import '@aws-amplify/ui-react/styles.css';
import Amplify, { Hub } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Petstore from './component/Petstore/Petstore';
import AdminAction from './component/Admin_Action/AdminAction';
import { ADMIN_ACTION, PETSTORE } from '../src/shared/constants/pageRoutes';
import SigninForm from './component/Signin/SigninForm';
import { useState, useEffect } from 'react';
function App() {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    Hub.listen('auth', (e) => {
      console.log(e);
      setCurrentUser(e.payload.data);
    });
  });

  return (
    <div>
      {currentUser ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* Shared Persisted Routes  */}
            <Route path={PETSTORE} element={<Petstore />} />
            <Route path={ADMIN_ACTION} element={<AdminAction />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <SigninForm />
      )}
    </div>
  );
}

export default App;
