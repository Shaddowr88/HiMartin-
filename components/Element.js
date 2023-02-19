import {StyleSheet, Text, View} from "react-native";


function Element(props) {
    return (
        <View style={styles.element}>

        <View style={styles.header}>
            <View style={styles.SpanElement}>
                <Text>{props.letter} </Text>
            </View>
            <Text style={styles.textSpanElement}> {props.headerElement} </Text>
        </View>
            <View style={styles.header}>

                <Text style={{color:'#ffffffff'}}>Open up App.js to start working on your app!
                    tthdrhgfjhfgdjhfgj sdfhfdgh dfgh rdfhfgd j</Text>
            </View>
    </View>
    );
}

const styles = StyleSheet.create({

    element:{
        flex:1,
        borderRadius:20,
        backgroundColor:'rgb(9,9,9)',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginEnd:10,


    },

    header1:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },

    header2:{
        fontSize: 18,
        fontWeight: 'strong',
        marginBottom: 5,
    },

    header3:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    header:{
        gap: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        padding:'3%',
        fontSize: 15,
        fontWeight: 'bold',
       // marginBottom: 5,
    },

    SpanElement:{
        width:50,
        height:50,
        borderRadius:10,
        backgroundColor:'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#fff',
        marginTop:'auto',
        //marginBottom:'auto',

    },

    textSpanElement:{

        textAlign: 'auto',
        color:'#fff',
        width:'75%',
        marginStart:'5%',
        marginTop:'auto',
        marginBottom:'auto',

    },

});

export default Element;
