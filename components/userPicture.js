import {Image, View,} from "react-native";


function userPicture() {
    return (
        <View>
            <Image style={{height:50, width:50}}  source={require('../assets/ProfileBlack.png')} />
        </View>

    );
}

export default userPicture;