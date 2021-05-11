import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';



const Input = props => {

    const [enteredInput, setEnteredInput] = useState('');

    const inputHandlerFunc = (input) => {
        setEnteredInput(input);
    }

    const clearInput = () => {
        if (enteredInput !== '') {
            props.onAddInput(enteredInput);
            setEnteredInput('');
        }
    }

    const closeModal = () => {
        props.onClose();
        setEnteredInput('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.outter}>
                <TextInput 
                    id="textBox"
                    placeholder="goal"
                    style={styles.text}
                    onChangeText={inputHandlerFunc}
                    onMagicTap={clearInput}
                    value={enteredInput}
                />
                <View style={styles.inner}>
                    <View style={styles.button}><Button title="Close" onPress={closeModal/*props.onClose*/} color="red"/></View>
                    <View style={styles.button}><Button title="ADD" onPress={clearInput}/></View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    outter: { 
        flex: 1,
        justifyContent: "center", 
        alignItems: "center",
    },
    inner: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "40%",
    },
    text: {
        width: "80%",
        borderColor: "black", 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
    },
});

export default Input;

