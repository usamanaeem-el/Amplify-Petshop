import React, { useState } from 'react';
import {
  addToGroup,
  listCustomers,
} from '../../../src/modules/api/adminActions';

const AdminAction = () => {
  const [res, setRes] = useState([]);
  return (
    <div>
      <button
        onClick={addToGroup}
        className='bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
      >
        Add to Group
      </button>
      <button
        className='bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
        type='button'
        onClick={async () => {
          const a = await listCustomers();
          //   console.log(a.Users[0]);
          setRes(a.Users);
        }}
      >
        List Customers
      </button>
      <table className='table-md:table-fixed'>
        <thead>
          <tr>
            <th className='px-4 py-2 text-emerald-600'>User Name</th>
            <th className='px-4 py-2 text-emerald-600'>Status</th>
          </tr>
        </thead>
        <tbody>
          {res.map((item) => (
            <tr key={item.Username}>
              <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                {item.Username}
              </td>
              <td className='border border-emerald-500 px-4 py-2 text-emerald-600 font-medium'>
                {item.UserStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminAction;
