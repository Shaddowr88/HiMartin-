import {StyleSheet, Text, View} from "react-native";


function Paragraph(props) {
    return (
        <View style={styles.container2}>
            <Text style={styles.header3}>{props.titre}</Text>

            <View style={styles.box}>
                <Text style={{
                    color: props.TexteColor,
                }} >{props.puce}</Text>
                <View style={styles.InnerBox}>
                    <Text style={{
                        color: props.TexteColor,
                    }}>{props.content}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container2:{
        marginTop:10,
        marginBottom:10,
        justifyContent:"flex-start",
    },

    header3:{
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    box:{
        flexDirection:"row"
    },

    InnerBox:{
        width:"90%"
    },

});


export default Paragraph;