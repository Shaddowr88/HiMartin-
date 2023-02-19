import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderNav from "../components/HeaderNav";
import H1 from "../components/H1";
import Element from "../components/Element";
import ElementType from "../components/ElementTypeTwoo";
import {StatusBar} from "expo-status-bar";
import H2 from "../components/H2";

function ConcenteurScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <HeaderNav/>

            <View style={{width:'90%', marginTop:20,}}>
                <H1  h1='Open up '/>
                <H1  h1='App.js to!'/>
            </View>

                <Text
                    style={styles.link}
                    title="Go to Details"
                    onPress={() => navigation.navigate('Finder')}
                > Page suivante </Text>

            <View style={styles.H2} >
                <H2  h1='App.js to!'/>
            </View>
            <View style={styles.Bander}>
                <Element headerElement="Defines the width/height in absolute pixels. " letter='M'/>
            </View>

            <View style={styles.H2}>
                <H2   h1='App.js to!'/>
            </View>
            <ScrollView >

                <View style={styles.container2}>
                    {persons.map((person)=>{
                        return(
                        <ElementType screenName="Home"
                                     id={person.id}
                                     headerElement={person.name}
                                     letter={person.letter}/>
                    )
                    })}
                </View>
            </ScrollView>

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    nav:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
        padding:10
    },

    container: {
        flex: 1,
        //backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Bander:{
        //flex:3,
        maxHeight:'20%',
        minHeight:'20%',
        flex: 1,
       // marginTop:50,
        marginBottom:20

    },

    container2:{
        flex:6,
        justifyContent:"flex-start",
        //height:'20%',

    },

    H2:{
      //  marginStart:10,
        width:'90%',
        marginTop:20,
        marginBottom:10,
    },

    link:{
      //  marginStart:10,
        width:150,
        alignItems:'center',
        alignSelf:' strech',
        marginLeft:20,
        marginTop:10,
        padding:10,
        borderRadius:5,
        backgroundColor:'#FA7712',

    },

});

const persons = [
    {
        id: "1",
        name: "Earnest Green",
        letter:"E"
    },
    {
        id: "2",
        name: "Winston Orn",
        letter:"W"
    },
    {
        id: "3",
        name: "Carlton Collins",
        letter:"C"
    },
    {
        id: "4",
        name: "Malcolm Labadie",
        letter:"M"
    },
    {
        id: "5",
        name: "Michelle Dare",
        letter:"M"
    },
    {
        id: "6",
        name: "Carlton Zieme",
        letter:"C"
    },
    {
        id: "7",
        name: "Jessie Dickinson",
        letter:"J"
    },
    {
        id: "8",
        name: "Julian Gulgowski",
        letter:"J"
    },
    {
        id: "9",
        name: "Ellen Veum",
        letter:"E"
    },
    {
        id: "10",
        name: "Lorena Rice",
        letter:"L"
    },
    {
        id: "11",
        name: "Carlton Zieme",
        letter:"C"
    },
    {
        id: "12",
        name: "Jessie Dickinson",
        letter:"J"
    },
    {
        id: "13",
        name: "Julian Gulgowski",
        letter:"J"
    },
    {
        id: "14",
        name: "Ellen Veum",
        letter:"E"
    },
    {
        id: "15",
        name: "Lorena Rice",
        letter:"L"
    },
];

export default ConcenteurScreen;
