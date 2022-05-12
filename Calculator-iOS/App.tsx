import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/screen/CalculadoraScreen';

import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={ styles.background }>
      
      <StatusBar 
        backgroundColor="black"
        barStyle="light-content"
      />

      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App;