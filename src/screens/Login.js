import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './styles'

const Login = ({navigation}) => {
    const handleNavigation = () => {
        navigation.navigate('ListView')
    }
    return (
        <View style={styles.center}>
            <TouchableOpacity onPress={() => handleNavigation()}>
                <View>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Login
