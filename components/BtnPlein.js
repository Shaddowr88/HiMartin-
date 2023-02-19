import {StyleSheet, Text, View} from "react-native";

function BtnPlein(props) {
    return (
        <View style={styles.button}>
            <Text
            > {props.name} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        //height:'60%',
        width:100,
        alignItems:'center',
        alignSelf:' strech',
        backgroundColor:'#ffffff',
        padding:10,
        borderRadius:5,
    },
});

export default BtnPlein;