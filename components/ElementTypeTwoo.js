import {Image, StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";


function ElementType(props, screenName) {
    const navigation = useNavigation();

    return (
        <View style={styles.element}>
            <View style={styles.header}>
            <View style={styles.SpanElement}>
                <Text style={{fontWeight:"bold", fontSize:20, color:"#ffffff"}}> {props.letter} </Text>
            </View>
            <Text style={styles.textSpanElement}> {props.headerElement} </Text>
                <View title={`Go to ${screenName}`}
                      onPress={() => navigation.navigate(screenName)} >
                    <Image source={require('../assets/pointBlack.png')}
                           style={{height:30, width:10}}
                           title={`Go to ${screenName}`}
                           onPress={() => navigation.navigate(screenName)}/>
                </View>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    element:{
        flex:1,
        borderRadius:20,
        alignItems: 'center',
        justifyContent: 'space-around',
        //color:'#fff',
        marginEnd:10,


    },

    header:{
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        padding:'3%',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    SpanElement:{
        width:50,
        height:50,
        borderRadius:10,
        backgroundColor:'rgb(9,9,9)',
        alignItems: 'center',
        justifyContent: 'center',
     //   color:'#fff',
        marginTop:'auto',
        marginBottom:'auto',

    },

    textSpanElement:{

        textAlign: 'auto',
       // color:'#fff',
        width:'75%',
        marginStart:'5%',
        marginTop:'auto',
        marginBottom:'auto',

    },

});

export default ElementType;
