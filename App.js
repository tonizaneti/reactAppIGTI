import {StyleSheet, View} from "react-native";
import React, {useState} from "react";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker'

function App(){
    const [stateValorInput, setStateValorInput] = useState("");
    const [stateData, setStateData] = useState("19-07-2020")
    return(
        <>
        <View style = {styles.viewStyle}>
            <TextInput style={styles.TextInputStyle} 
                        value={stateValorInput}
                        onChangeText={(text)=>setStateValorInput(text)} />
        </View>
        <View>
            <DatePicker 
            date={stateData}
            mode="date"
            placeholder="Selecione a Data"
            format="DD-MM-YYYY"
            minDate="01-01-1980"
            maxDate="01-12-2025"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            onDateChange={(date) => {setStateData(date)}} 
            />
        </View>
        </>
    )
}

export default App;

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:20
    },
    TextInputStyle:{
        backgroundColor:"#f2b141",
        color:"#f00",
        height:50,
    }
})