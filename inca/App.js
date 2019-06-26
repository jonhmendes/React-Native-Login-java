import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';import Home from "./src/components/Home";
import Login from "./src/components/Login";
import Register from "./src/components/Register";

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Login: { screen: Login },
  Register: { screen: Register }
});


const App = createAppContainer(RootStack);

export default App;