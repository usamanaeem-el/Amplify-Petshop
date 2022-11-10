import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';
import * as queries from '../../graphql/queries';

const Petstore = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState('');
  const [age, setAge] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const savePet = async () => {
    const petDetails = {
      name: name,
      description: description,
      age: age,
    };
    console.log({ name });
    try {
      await API.graphql({
        query: mutations.createPetstore,
        variables: { input: petDetails },
      });
      await fetchdata();
    } 
    catch (error) {
      throw Error(error);
    }
  };
  

  const fetchdata = async () => {
    try {
      const pets = await API.graphql({
        query: queries.listPetstores,
      });
      const petsList = pets.data.listPetstores.items;
      setData(petsList);
      console.log({ petsList });
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <div>
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
        <input type='submit' value='Add Pet' onClick={savePet} />
      </form>
      <table class='table-md:table-fixed'>
        <thead>
          <tr>
            <th class='px-4 py-2 text-emerald-600'>Name</th>
            <th class='px-4 py-2 text-emerald-600'>Description</th>
            <th class='px-4 py-2 text-emerald-600'>Age</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item) => (
              <tr>
                <td class='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.name}
                </td>
                <td class='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.description}
                </td>
                <td class='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                  {item.age}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button onClick={fetchdata}>Fetch</button>
    </div>
  );
};

export default Petstore;
