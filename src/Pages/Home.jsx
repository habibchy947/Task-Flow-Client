import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            Welcome {user?.displayName}
        </div>
    );
};

export default Home;