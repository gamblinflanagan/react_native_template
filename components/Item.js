import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const Item = props => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.lstElement}>
          <Text>{props.element}</Text> 
        </View>
      </TouchableOpacity>
    );
};
//.element can also be .children "
const styles = StyleSheet.create({
    lstElement: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        minWidth: "80%",
    },
});

export default Item;