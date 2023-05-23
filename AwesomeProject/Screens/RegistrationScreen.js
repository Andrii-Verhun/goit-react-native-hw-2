import { View, Text, TextInput, Button } from 'react-native';

import { styles } from '../App';

export const RegistrationScreen = () => {
    return (
        <View style={styles.registrationScreen}>
            <Text style={styles.cation}>Регистрация</Text>
            <TextInput style={styles.input} placeholder='Логин'/>
            <TextInput style={styles.input} placeholder='Адрес электронной почты'/>
            <TextInput style={styles.input} placeholder='Пароль' />
            <Button title='Зарегистрироваться' style={styles.buttonReg} color={'#FF6C00'}/>
        </View>
    );
};