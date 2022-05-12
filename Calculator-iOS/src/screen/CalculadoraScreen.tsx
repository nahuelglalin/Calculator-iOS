import {View,Text,} from 'react-native';
import CalcButton from '../components/CalcButton';
import { useCalculator } from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

const CalculadoraScreen = () => {
    
    const {
        numberBefore,
        number,
        clean,
        positiveNegative,
        deleteNumber,
        divide,
        makeNumber,
        substract,
        multiply,
        sum,
        calculate
    } = useCalculator();
   
  return (
    <View style={styles.container}>

        { (numberBefore !== '0') &&
            <Text style={styles.resultSmall}> {numberBefore} </Text> 
        }
         
        <Text 
            style={styles.result}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
        > 
            {number} 
        </Text> 

        <View style={styles.row}>
            <CalcButton text="C" color="#9b9b9b" textColor="black" action={clean}/>
            <CalcButton text="+/-" color="#9b9b9b" textColor="black" action={positiveNegative}/>
            <CalcButton text="Del" color="#9b9b9b" textColor="black" action={deleteNumber}/>
            <CalcButton text="/" color="#FF9427" action={divide}/>
        </View>

        <View style={styles.row}>
            <CalcButton text="7" action={makeNumber}/>
            <CalcButton text="8" action={makeNumber}/>
            <CalcButton text="9" action={makeNumber}/>
            <CalcButton text="X" color="#FF9427" action={multiply}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="4" action={makeNumber}/>
            <CalcButton text="5" action={makeNumber}/>
            <CalcButton text="6" action={makeNumber}/>
            <CalcButton text="-" color="#FF9427" action={substract}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="1" action={makeNumber}/>
            <CalcButton text="2" action={makeNumber}/>
            <CalcButton text="3" action={makeNumber}/>
            <CalcButton text="+" color="#FF9427" action={sum}/>
        </View>
        <View style={styles.row}>
            <CalcButton text="0" action={makeNumber} width={true} />
            <CalcButton text="," action={makeNumber}/>
            <CalcButton text="=" color="#FF9427" action={calculate}/>
        </View>

    </View>
  )
}

export default CalculadoraScreen;