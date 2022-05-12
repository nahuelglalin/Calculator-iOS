import {View,Text, TouchableOpacity,} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
    text: string;
    color?: string;
    textColor?: string;
    width?: boolean;
    action: ( numText: string ) => void;
}

const CalcButton = ( {text, color = "#2D2D2D", textColor = "#fff", width, action}: Props ) => {

  return (
      <TouchableOpacity onPress={ () => action(text) }>
        <View 
            style={{
                ...styles.button,
                backgroundColor: color,
                width: ( width ) ? 180 : 80,
            }}
        > 
            <Text 
                style={{
                    ...styles.buttonText,
                    color: textColor,
                    alignSelf: width ? 'flex-start' : 'center',
                    paddingStart: width ? 35 : 10
                }}
            >
                {text}
            </Text>
        </View>
      </TouchableOpacity>
  )
}
export default CalcButton;