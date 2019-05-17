import { createStackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Register from '../components/register/Register'
import Lines from '../components/lines/Lines';
import Map from '../components/map/Map';

createRoutingStack = () => {
  return createStackNavigator(
    {
      Login: Login,
      Register: Register,
      Map: Map,
      Lines: Lines
    },
    {
      initialRouteName: 'Login',
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    }
  )
}

export default createRoutingStack()