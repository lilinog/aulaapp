import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import Estilo from "../estilo/style";

export default function Tela1(){
    //Variavel
    //const qtdClique:number = 25;
    const[qtdClique, setQtdClique] = useState(0);

    return(
        <View style={Estilo.container}>
            <Text style={Estilo.textoTitulo}>Uso do useStat</Text>
            <Text>Quantidade de Cliques: {qtdClique}</Text>
            <Button
                title="Aumentar"
                onPress={() => setQtdClique(qtdClique +1)}
            />
        </View>
    );
}