import {createStackNavigator} from '@react-navigation/stack';
import {LoginPage} from '../modules';

const Stack = createStackNavigator();

const MainRoute = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default MainRoute;
