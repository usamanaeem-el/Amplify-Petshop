import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator, Button, View } from '@aws-amplify/ui-react';
import Navbar from './component/Navbar/Navbar';
import Petstore from './component/Petstore/Petstore';

function App({ signOut }) {
  return (
    <View className='App'>
      <Navbar />
      <Petstore/>
      {/* <Button onClick={signOut}>Sign Out</Button> */}
    </View>
  );
}

export default withAuthenticator(App);
