
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useIp } from '../hooks/useIp';

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {

    const ip = useIp();
    const [user, setUser] = useState([{
        nameBank: 'Bancamiga',
        userRef: '65aa3170096860f293a58e86',
        ip: ''
    }]);
    
    const addData = (data) => {
        const [ updateUser ] = user.map( e => { return [{...e, ...data}] });
        setUser(updateUser)
        return updateUser;
    }
    useEffect(() => {
        // eslint-disable-next-line
        if (ip != false) addData({ip});
        // eslint-disable-next-line
    }, [ip]);


    return (
        <UserDataContext.Provider value={{ addData, user }}>
            { children }
        </UserDataContext.Provider>
    )
}