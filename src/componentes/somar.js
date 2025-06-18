import React from "react";
import {View, Text} from 'react-native';

const Somar = ( props) => {
const resultado = props.numero1 + props.numero2;

return(
    <View>
        <Text>{props.numero1} + {props.numero2} = {resultado}</Text>
    </View>

);

}
export default Somar;