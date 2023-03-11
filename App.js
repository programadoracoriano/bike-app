import { SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';



import AuthScreen from './app/screens/AuthScreen';





export default function App() {
  return ( 
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
      <PaperProvider>
        <AuthScreen/>
      </PaperProvider>
    </SafeAreaView>
    </NavigationContainer>
    
            
  );
}

