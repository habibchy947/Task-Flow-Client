import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../Components/NavBar';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='max-w-[1400px] mx-auto min-h-screen'>
            <NavBar></NavBar>
            Welcome {user?.displayName} {user?.uid}
        </div>
    );
};

export default Home;