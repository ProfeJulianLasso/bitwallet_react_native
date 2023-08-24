import {NavigationContainer} from '@react-navigation/native';
import {MainRoute} from '@routes';
import type {ReactElement} from 'react';
import {Auth0Provider} from 'react-native-auth0';
import Config from 'react-native-config';
import 'react-native-gesture-handler';

function App(): ReactElement {
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
