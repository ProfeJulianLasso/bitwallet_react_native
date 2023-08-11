import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/infrastructure/app';

AppRegistry.registerComponent(appName, () => App);
