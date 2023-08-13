import {NavigationContainer} from '@react-navigation/native';
import type {ReactElement} from 'react';
import {Auth0Provider} from 'react-native-auth0';
import Config from 'react-native-config';
import 'react-native-gesture-handler';
import {MainRoute} from './routes';

function App(): ReactElement {
  console.log('Config.SCOPE', Config.SCOPE);
  return (
    <Auth0Provider
      domain={Config.AUTH0_DOMAIN ?? ''}
      clientId={Config.AUTH0_CLIENT_ID ?? ''}>
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
    </Auth0Provider>
  );
}

export default App;
