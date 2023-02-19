import {StyleSheet, Text, View} from "react-native";


function H1(props) {


    //let color= props.TexteColor;
    return (
        <View>
            <Text style={{
                color: props.TexteColor,
                fontSize: 25,
                fontWeight: props.graisse,
            }}>{props.h1}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
export default H1;