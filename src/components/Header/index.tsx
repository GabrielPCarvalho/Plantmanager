import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native'

import userImg from '../../assets/fotoPerfil.png';
import { styles } from './styles'

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUserName(user || '')
        }

        loadStorageUserName()
    },[])

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>

            <Image source={userImg}  style={styles.img}/>

        </View>
    )
}



export default Header;
