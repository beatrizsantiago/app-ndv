import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import StoreKeys from '../config/StoreKeys'

export async function Login(email, password) {
    try {
        let login = await axios.post('account/login', { email, password })
        let { accessToken, expiration } = login.data

        await AsyncStorage.setItem(StoreKeys.UserToken, accessToken)
        await AsyncStorage.setItem(StoreKeys.SessionExpiration, expiration)

        return accessToken

    } catch (error) {
        console.warn("Error Login", error.message);
        throw error
    }
}

export async function Register(name, phone, email, password, confirmPassword) {
    try {
        await axios.post('account/register', { name, phone, email, password, confirmPassword })
        return true

    } catch (error) {
        console.warn("Error Register", error.message);
        throw error
    }
}

export async function Logout() {
    try {
        await AsyncStorage.removeItem(StoreKeys.UserToken)
        await AsyncStorage.removeItem(StoreKeys.SessionExpiration)
        
        return true

    } catch (error) {
        console.warn("Error Logout", error);
        throw error
    }
}

export async function InfoProfile() {
    try {
        let datas = {
            name: 'Ana Beatriz Santiago',
            email: 'beatrizsantiago1999@gmail.com',
            phone: '(85) 12365-4569',
            detailsUser: false,
            userType: 'Integrador',
            mentor: 'Fulano da Silva',
            net: 3
        }

        return datas

    } catch (error) {
        console.warn("Error InfoProfile", error);
        throw error
    }
}

export default { Login, Register, Logout, InfoProfile }