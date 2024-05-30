import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate()
    const [state, setState] = useState(false);
    const [input, setInput] = useState({
        username: '',
        password: '',
    });
  console.log(input,'input');
    const Onchangee = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        try {
            const response = await axios.post('https://omofood.pythonanywhere.com/api/v1/users/token/', {
                username: input.username,
                password: input.password
            }).then((res) => {
                const token = res?.data?.access;
                localStorage.setItem('token', token);
                console.log(res);


                if (res?.status === 200) {
                    navigate('/')
                }
            });
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    console.log();
    return (
        <div className='flex flex-col bg-gray-800  justify-center h-[100vh] items-center'>
            <div className='bg-blue-900 rounded-[5vh] w-[60vh] h-[80vh] flex flex-col justify-center items-center'>

                <div className="mb-5 ">
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input
                        type="email"
                        id="email"
                        name="username"
                        value={input.username}
                        onChange={Onchangee}
                        className="w-[40vh] text-black h-[5vh] items-center flex justify-center  bg-blue-00 rounded-[1vh] "
                        placeholder="name@flowbite.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    {state ? (
                        <input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={Onchangee}
                            className="w-[40vh] text-black h-[5vh] items-center flex justify-center  bg-blue-00 rounded-[1vh] "
                            required
                        />
                    ) : (
                        <input
                            type="text"
                            name="password"
                            value={input.password}
                            onChange={Onchangee}
                            className="w-[40vh] text-black h-[5vh] items-center flex justify-center  bg-blue-00 rounded-[1vh] "
                            required
                        />
                    )}
                    {state ? (
                        <FaEyeSlash onClick={() => setState(!state)} className="relative top-[-4.3vh] left-[90%] size-[25px]" />
                    ) : (
                        <FaEye onClick={() => setState(!state)} className="relative top-[-4.3vh] left-[90%] size-[25px]" />
                    )}
                </div>

                <button
                    onClick={() => handleSubmit()}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Log In
                </button>
            </div>

        </div>

    );
};

export default Login;