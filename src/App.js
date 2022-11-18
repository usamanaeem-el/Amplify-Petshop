import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Petstore from './component/Petstore/Petstore';
import AdminAction from './component/Admin_Action/AdminAction';
import { ADMIN_ACTION, PETSTORE } from '../src/shared/constants/pageRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shared Persisted Routes  */}
          <Route path={PETSTORE} element={<Petstore />} />
          <Route path={ADMIN_ACTION} element={<AdminAction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
