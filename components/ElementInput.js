import {StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";


function ElementInput() {
    const [text, setText] = useState('');
    return (
        <View style={styles.element}>
            <TextInput
                style={styles.input}
                placeholder="Type here to translate!"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    element:{
        alignSelf:'strech',
        padding:3,
        borderRadius:5,
        backgroundColor:'rgba(9,9,9,0.31)',

    },

    input:{
      //  fontSize: 25,
        padding:3,
        fontWeight: 'bold',
        height:40
    },

    header2:{
        fontSize: 18,
        fontWeight: 'strong',
        marginBottom: 5,
    },


});

export default ElementInput;