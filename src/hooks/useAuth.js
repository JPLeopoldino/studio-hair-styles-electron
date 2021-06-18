import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';

const useAuth = () => {

    const [auth, setAuth] = useState('');

    const getData= async () => {
        try{
            const resp = await AsyncStorage.getItem('auth');
            if(resp !== null)
                setAuth(resp);
        } catch (error) {
            console.log(error);
        }
   }

   useEffect(() => {
       getData();
   }, [])

   return (auth !== '' ? JSON.parse(auth) : null);
}

export default useAuth;