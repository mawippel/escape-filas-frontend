import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from '../components/login/Login';
import Register from '../components/register/Register'
import Lines from '../components/lines/Lines';
import Map from '../components/map/Map';
import QRCodeScanner from '../components/qrCodeScanner/QRCodeScanner';

createRoutingStack = () => {
  return createStackNavigator(
    {
      Login: Login,
      Register: Register,
      Map: Map,
      Lines: Lines,
      QRCodeScanner: QRCodeScanner,
    },
    {
      initialRouteName: 'Login',
      transitionConfig
    }
  )
}

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {      
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [ { translateX } ] }
    },
  }
}

export default createRoutingStack()