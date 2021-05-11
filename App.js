import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';


import Item from "./components/Item";
import Input from "./components/Input";

export default function App() {

  const [inputLst, setInputLst]= useState([]);
  const [isAddMode, setIsAddMode]= useState(false);

  const addInputHandler = (inputTitle) => {
    if (inputTitle != '') {
      //flatlist
      setInputLst(inputLst => [
        ...inputLst, 
        {key: inputLst.length.toString(), value: inputTitle}
      ]);
      setIsAddMode(false);
    }
  }

  const closeInputHandler = () => {
    setIsAddMode(false);
  } 

  const removeInputHandler = (inputID) => {
    setInputLst(inputLst => {
      return inputLst.filter((element) => element.key !== inputID);
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Input" onPress={() => setIsAddMode(true)}/>
      <Input visible={isAddMode} onAddInput={addInputHandler} onClose={closeInputHandler}/>
      <FlatList 
        //keyExtractor={(item, index) => item.id} sets the key to the id item in our object
        data={inputLst}
        renderItem={itemData => (
          <View>
            <Item id={itemData.item.key} onDelete={removeInputHandler} element={itemData.item.value}/> 
          </View>
        )}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});








/*
export default function App() {

  const [enteredInput, setEnteredInput] = useState('');
  const [inputLst, setInputLst]= useState([]);

  const inputHandlerFunc = (input) => {
      setEnteredInput(input);
  }

  const addinputHandler = () => {
    if (enteredInput != '') {
      //console.log(enteredInput);
      //setInputLst([...inputLst, enteredInput]); //works as well but below is better
      //setInputLst(currentLst => [...inputLst, enteredInput]);
      
      //flatlist
      setInputLst(inputLst => [
        ...inputLst, 
        {key: inputLst.length.toString(), value: enteredInput}
      ]);
      setEnteredInput('');
    }
  }

  const removeinputHandler = (inputID) => {
    setInputLst(inputLst => {
      return inputLst.filter((element) => element.key !== inputID);
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput 
            id="textBox"
            placeholder="goal"
            style={styles.text}
            onChangeText={inputHandlerFunc}
            value={enteredInput}
        />
        <Button title="ADD" onPress={addinputHandler}/>
      </View>
      <FlatList 
        //keyExtractor={(item, index) => item.id} sets the key to the id item in our object
        data={inputLst}
        renderItem={itemData => (
          <TouchableOpacity id={itemData.item.key} onPress={removeinputHandler(id)}>
            <View style={styles.lstElement}>
              <Text>{itemData.item.value}</Text> 
            </View>
          </TouchableOpacity>
        )}
      />
      {/*<ScrollView>
        {inputLst.map((element) => (
          <View key={element} style={styles.lstElement}>
            <Text>{element}</Text>
          </View>
        ))}
      />
      </ScrollView>*}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  inner: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
  },
  text: {
    width: "80%",
    borderColor: "black", 
    borderWidth: 1, 
    padding: 10,
  },
  lstElement: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
*/