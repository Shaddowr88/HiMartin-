import {Image, StyleSheet, Text, View} from "react-native";


function HeaderNav(props) {
    return (
        <View style={styles.nav} >
            <Image source={require('../assets/LeaderboardBlack.png')} style={{height:20, width:30}} />
            <Image source={require('../assets/ProfileBlack.png')}  style={{height:30, width:30}}/>
        </View>
    );
}

const styles = StyleSheet.create({

    nav:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'stretch',
        padding:10
    },

});

export default HeaderNav;