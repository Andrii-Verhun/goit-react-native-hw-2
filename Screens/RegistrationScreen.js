import { ImageBackground, View } from "react-native";

import { styles } from "../App";

import imageBG from '../assets/image/Photo-BG.jpg';


export const RegistrationScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={imageBG}/>
        </View>
    );
};