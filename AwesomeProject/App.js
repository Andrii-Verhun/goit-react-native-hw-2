import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import imgBkg from './image/background.jpg';

import { RegistrationScreen } from './Screens/RegistrationScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={imgBkg} style={styles.background}>
        <RegistrationScreen/>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    width: 395,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  registrationScreen: {
    width: 395,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  cation: {
    fontFamily: 'Roboto-Black',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    letterSpacing: 0.16,
    marginBottom: 33,
    marginTop: 92,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 16,
    padding: 16,
  },
  buttonReg: {
    width: 343,
  }
});
