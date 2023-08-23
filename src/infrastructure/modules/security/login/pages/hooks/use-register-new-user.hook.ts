import {SecurityApp} from '@application';
import {DomainException} from '@domain';
import {useAuth0} from 'react-native-auth0';
import Config from 'react-native-config';
import 'react-native-get-random-values';
import {v5 as uuidv5} from 'uuid';
import {HttpClient} from '../../../../../adapters';
import {NetworkException} from '../../../../../exceptions';
import {UserService} from '../../../services';

export const useRegisterNewUser = () => {
  const {getCredentials, user} = useAuth0();

  const credentials = async () => {
    try {
      const data = await getCredentials();
      const httpClient = new HttpClient({
        headers: {
          ContentType: 'application/json',
          Authorization: `Bearer ${data?.idToken ?? ''}`,
        },
      });
      const securityApp = new SecurityApp();
      const externalId = uuidv5(
        user?.email ?? '',
        Config.NAMESPACE_UUID_V5 ?? '',
      );
      securityApp.registerUser({externalId}, new UserService(httpClient));
    } catch (error: any) {
      if (error instanceof DomainException) {
        console.error('message', error.message);
        console.error('details', error.details);
        throw error;
      } else if (error instanceof NetworkException) {
        console.error(error);
        throw error;
      }
    }
  };
  if (user) credentials();
};
