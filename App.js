import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import Container from './components/Container';
import GroupList from './components/GroupList';
import colors from './config/color';
import TabNav from './navigation/TabNav';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import RegisterCode from './screens/RegisterCode';
import NoticeScreen from './screens/NoticeScreen';
import AuthStack from "./navigation/AuthStack";

export default function App() {
  
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar style="auto" /> 
        {/* <TabNav/> */}
        <AuthStack/>
        {/* <Login/> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyboardView:{
    flex:1,
    width:"100%",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
