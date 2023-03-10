import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import HeaderNav from "../components/HeaderNav";
import ElementInput from "../components/ElementInput";
import H1 from "../components/H1";
import HeadBlock from "../components/HeadBlock";
import Element from "../components/Element";
import Paragraph from "../components/Paragraph";
import ElementType from "../components/ElementTypeTwoo";
import {StatusBar} from "expo-status-bar";

function FinderScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>



            <View style={{alignSelf:'stech',width:'100%',
                height:250, alignContent:'center',
                alignItems:'center'}}>
                <HeadBlock titre="titre" sousTitre="soustitre" texte="text" />
            </View>

            <View style={{flexDirection:'row'}}>

                <View style={styles.button}>
                    <Text
                        title="Go to Details"
                        onPress={() => navigation.navigate('Home')}
                    > Home </Text>
                </View>

                <View style={styles.button2}>
                    <Text
                        title="Go to Details"
                        onPress={() => navigation.navigate('Concenteur')}
                    > Concenteur </Text>
                </View>

            </View>

            <ScrollView >
                <View style={styles.container2}>
                    <Paragraph
                        titre=" Tittre du paragraph"
                        puce=""
                        content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                    />


                    <View>

                        <Paragraph
                            titre=" Tittre du paragraph"
                            puce="• "
                            content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                        />
                        <Paragraph
                            titre=" Tittre du paragraph"
                            puce="• "
                            content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                        />
                        <Paragraph
                            titre=" Tittre du paragraph"
                            puce="• "
                            content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                        />
                        <Paragraph
                            titre=" Tittre du paragraph"
                            puce="• "
                            content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                        />
                        <Paragraph
                            titre=" Tittre du paragraph"
                            puce="• "
                            content='Hey Guys, Hope You all doing well today I want to share my new shot for . What do you think? Please leave any feedback and dont forget to like if you love it. You can hire me…'
                        />

                    </View>

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
        flex: 1

    },

    container2:{
        flex:6,
        justifyContent:"flex-start",
        //height:'20%',

    },

    button: {
        //height:'60%',
        width:100,
        alignItems:'center',
        alignSelf:' strech',
        backgroundColor:'#ffffff',
        margin:10,
        padding:10,
        borderRadius:5,
    },

    button2: {
        //height:'60%',
        width:100,
        alignItems:'center',
        alignSelf:' strech',
        backgroundColor:'#FA7712',
        margin:10,
        padding:10,
        borderRadius:5,
    },


});


export default FinderScreen;
