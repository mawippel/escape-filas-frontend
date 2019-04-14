import { createStackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Register from '../components/register/Register'
import MainContainer from '../components/main/MainContainer';

createRoutingStack = () => {
  return createStackNavigator(
    {
      Login: Login,
      Register: Register,
      Map: MainContainer
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