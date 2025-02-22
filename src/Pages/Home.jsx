import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import NavBar from '../Components/NavBar';
import TasksBoards from '../Components/TasksBoards';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='max-w-[1400px] mx-auto min-h-screen'>
            <NavBar></NavBar>
            <TasksBoards></TasksBoards>
        </div>
    );
};

export default Home;