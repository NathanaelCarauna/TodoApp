import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import HeaderComponent from './components/header';
import TodoItem from './components/todoItem';
import AddTodos from './components/addTodos';

export default function App() {
  const [todoList, settodoList] = useState([
    {task: "Fazer visita à casa", key: '1'},
    {task: "Reunião às 17h", key: '2'},
    {task: "Cozinhar", key: '3'},
    {task: "Sábado", key: '4'},
  ])

  const pressHandler = (key) => {
    settodoList((previusList) => {
      return previusList.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (task) => {
    if(task.length > 3){
      settodoList((previusList) => {
        return [
          {task: task, key: Math.random().toString()},
          ...previusList
        ]
      })
    }else{
      Alert.alert('OOPS', "Uma tarefa deve possuir mais de 3 letras", [
        {text: 'Entendido', onPress: () => console.log('Alert closed')}
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('Keyboard dismissed')
    }}>
      <View style={styles.container}>
        <HeaderComponent/>
        {/*Content */}
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
            data={todoList}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 30,
  }
});
