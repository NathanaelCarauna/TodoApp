import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button,TextInput, View} from 'react-native';

export default function addTodos({submitHandler}){
    const [text, settext] = useState('')
    const changeHandler = (val) => {
        settext(val);
    }
    return (
        <View>
            <TextInput 
            style={styles.input}
            placeholder='Tarefa a ser feita...'
            onChangeText={changeHandler}
            />
            <Button onPress={() => submitHandler(text)} title='Adicionar tarefa' color='coral'/>
        </View>        
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingRight: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:  '#ddd',
    }
})