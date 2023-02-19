import {StyleSheet, Text, View} from "react-native";


function ElementType(props) {
    return (
        <View style={styles.element}>
            <View style={styles.header}>
            <View style={styles.SpanElement}>
                <Text> M </Text>
            </View>
            <Text style={styles.textSpanElement}> {props.headerElement} </Text>
                <View >
                    <Text> • </Text>
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
        backgroundColor:'rgba(9,9,9,0.31)',
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