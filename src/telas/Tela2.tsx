import React from "react";
import { View } from 'react-native';
import Somar from '../componentes/somar';
import Estilo from "../estilo/style";

export default function Tela2(){
    return(
        <View style={Estilo.container}>
           <Somar numero1 = {10} numero2 = {5} />
            <Somar numero1 = {34} numero2 = {5} />
              <Somar numero1 = {17} numero2 = {8} />
            
        </View>



    );

}