import { StatusBar } from 'expo-status-bar';
import Cadastro from './src/screens/cadastro';
import Home from './src/screens/home';
import Lista from './src/screens/lista';
import AddConteudo from './src/screens/addConteudo';
import Login from './src/screens/login';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';


export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

