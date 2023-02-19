import {StyleSheet, Text, View} from "react-native";


function HeadBlock(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header1}>{props.titre}</Text>
            <Text style={styles.header2}>{props.sousTitre}</Text>
            <Text>{props.texte}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },


    header1:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
    },

    header2:{
        fontSize: 18,
        fontWeight: 'strong',
        marginBottom: 5,
    },

});

export default HeadBlock;