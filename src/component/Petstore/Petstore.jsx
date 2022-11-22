import React, { useState, useEffect } from 'react';
import { API, Auth } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

const Petstore = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [name, setName] = useState('');
  const [animalType, setAnimalType] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [age, setAge] = useState('');
  const [group, setGroup] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const savePet = async () => {
    const petDetails = {
      name: name,
      description: description,
      age: age,
      animalType: animalType,
    };
    try {
      await API.graphql({
        query: mutations.createPet,
        variables: { input: petDetails },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      await fetchdata();
    } catch (error) {
      throw Error(error);
    }
  };

  const fetchdata = async () => {
    try {
      const pets = await API.graphql({
        query: queries.listPets,
        // authMode: 'API_KEY',
      });
      const petsList = pets.data.listPets.items;
      setData(petsList);
      console.log({ petsList });
    } catch (error) {
      throw Error(error);
    }
  };

  const deletePet = async (id) => {
    const deletePets = {
      id: id,
    };
    try {
      await API.graphql({
        query: mutations.deletePet,
        variables: { input: deletePets },
        authMode: 'AMAZON_COGNITO_USER_POOLS',
      });
      // await fetchdata();
    } catch (err) {
      console.log(err);
    }
  };

  let nextToken;
  const listEditors = async (limit) => {
    let apiName = 'AdminQueries';
    let path = '/listGroupsForUser';
    let myInit = {
      queryStringParameters: {
        username: 'usama.naeem@emerald-labs.com',
        limit: limit,
        token: nextToken,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    nextToken = NextToken;
    return rest;
  };
  useEffect(() => {
    fetchdata();
    (async () => {
      const a = await listEditors();
      setGroup(a.Groups[0].GroupName);
      //  console.log(a.Groups[0].GroupName);
    })();
  }, []);
  return (
    <div className='p-8'>
      {group === 'Admins' ? (
        <button
          className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'
          onClick={() => setShowModal(true)}
        >
          Add Pet
        </button>
      ) : (
        []
      )}
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>Add a Pet</h3>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <form
                    onSubmit={(e) => {
                      handlesubmit(e);
                    }}
                  >
                    <label>Enter Name</label>
                    <input
                      name='name'
                      type='text'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label>Enter Description</label>
                    <input
                      name='description'
                      type='text'
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <label>Enter Age</label>
                    <input
                      name='age'
                      type='number'
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                    <br />
                    <label>Enter type</label>
                    <select
                      name='animalType'
                      value={animalType}
                      onChange={(e) => setAnimalType(e.target.value)}
                    >
                      <option value='dog'>Dog</option>
                      <option value='cat'>Cat</option>
                      <option value='goat'>Goat</option>
                      <option value='wolf'>Wolf</option>
                    </select>
                    <br />
                    <input type='submit' value='Add Pet' onClick={savePet} />
                  </form>
                </div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}

      <table className='table-md:table-fixed'>
        <thead>
          <tr>
            {/* <th className='px-4 py-2 text-emerald-600'>ID</th> */}
            <th className='px-4 py-2 text-emerald-600'>Name</th>
            <th className='px-4 py-2 text-emerald-600'>Description</th>
            <th className='px-4 py-2 text-emerald-600'>Age</th>
            <th className='px-4 py-2 text-emerald-600'>Type</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr key={item.id}>
                <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.name}
                </td>
                <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.description}
                </td>
                <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.age}
                </td>
                <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.animalType}
                </td>
                <td>
                  {group === 'Admins' ? (
                    <button onClick={() => deletePet(item.id)}>Delete</button>
                  ) : (
                    []
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Petstore;
