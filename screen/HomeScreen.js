import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import H1 from "../components/H1";
import Paragraph from "../components/Paragraph";
import {StatusBar} from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import BtnPlein from "../components/BtnPlein";


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Image source={require('../assets/img/imgOne.jpg')}
                   style={styles.hero}
            />
            <View style={{width:'90%', justifyContent:'space-around', paddingBottom:'15%'}}>
                <H1  h1='psam vero urbem Byzanti' TexteColor='#ffffff'/>
                <H1  h1='ornatissimam signis' TexteColor='#ffffff' graisse='bold'/>
                <Paragraph
                    TexteColor='#ffffff'
                    content='Hey Guys, Hope You all doing well today I want to share my new shot for.
                    What do you think? Please leave any feedback and dont forget to like if you love it.
                    You can hire me…'
                />

                <View >
                    <View style={styles.button}>
                        <Text
                            title="Go to Details"
                            onPress={() => navigation.navigate('Concenteur')}
                        > Concenteur </Text>
                    </View>


                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        //flex: 2,
        height:'100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding:2,
        backgroundColor:'#FA7712',
    },

    hero: {
        height:'60%',
        width:'110%',
        alignSelf:' strech',
        marginStart:-10,
        marginTop:-10,
        marginBottom:20},

    button: {
        //height:'60%',
        width:100,
        alignItems:'center',
        alignSelf:' strech',
        backgroundColor:'#ffffff',
        marginTop:10,
        padding:10,
        borderRadius:5,
    },

});


export default HomeScreen;