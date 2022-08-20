import React from 'react';
import { useState } from 'react';
import CrudHome from '../CrudHome/CrudHome';
import Login from '../Login/Login';

import firebaseApp from '../../firebase/credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

export const CrudContainer = () => {
    const [user, setUser] = useState (null);
    
    onAuthStateChanged(auth, (userFirebase) => {
        if (userFirebase) {
            setUser(userFirebase)
        } else {
            setUser(null)
        };
    });

    return (
        <div>
            {user ? <CrudHome mailUser = {user.email} /> : <Login/>}
        </div>
    )
}

export default CrudContainer