import React, { useContext } from 'react';
import logo from '../assets/check-list.png'
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const Login = () => {
    const {googleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = (e) => {
        e.preventDefault()
        googleLogin()
        .then(result => {
            console.log(result.user)
            toast.success('You are logged in successfully. Enjoy your session')
            navigate('/home')
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='border flex flex-col justify-center items-center rounded-sm p-6 text-center'>
                <img className='h-14 w-14 mb-4' src={logo} alt="" />
                <h1 className='text-3xl mb-2 font-semibold'>TaskFlow</h1>
                <div className="divider py-0 my-0"></div>
                <p className='text-lg font-semibold mb-2'>Log in to continue</p>
                <button onClick={handleGoogle} className='flex items-center gap-4 font-semibold hover:bg-gray-100 px-5 py-2 rounded-md border'><span><FcGoogle></FcGoogle></span> Sign in With Google</button>
            </div>
        </div>
    );
};

export default Login;