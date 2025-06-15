import { useForm, Controller } from 'react-hook-form'
import { useNavigate, useLocation } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { z as zod } from "zod"
import Input from '../components/Input/Input'
import useLocalStorage from '../hooks/useLocalStorage'
import { useState } from 'react';
import { useEffect } from 'react';


export default function LoginRoute() {
    const [tooltip, setTooltip] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const [loggedIn, setLoggedIn] = useLocalStorage('loggedIn', false)

    useEffect(() => {
        loggedIn && navigate('/');
    }, [])
    
    const schema = zod
                    .object({
                        login: zod.string().email(),
                        password: zod.string().min(6),
                    })
                    .required()

    const {control, handleSubmit, reset, formState: {isValid, errors}} = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            login: '',
            password: ''
        },
        mode: 'onBlur' 
    });

    const onSubmit = ({login, password}) => {
        if (login === 'test@example.com' && password === 'p@$$word') {
            setLoggedIn(true);
            setTooltip(null)
            navigate('/', { state: { from: location.pathname } });
        } else {
            setTooltip('Invalid login or password')
            reset()
        }
    }

    return (
        loggedIn ? null : <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-xl">
                {tooltip && <p>{tooltip}</p>}
                <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Login</label>
                    <Controller 
                        name='login' 
                        control={control} 
                        render={({field}) => <Input {...field} type="email" placeholder="you@example.com" className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />}
                    />
                    {errors.login && <p className='text-red-400'>{errors.login.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <Controller 
                        name='password' 
                        control={control} 
                        render={({field}) => <Input {...field} type='password' placeholder='••••••••' className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />}
                    />
                    {errors.password && <p className='text-red-400'>{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    disabled={!isValid}
                    className={`w-full px-4 py-2 font-semibold text-white rounded-md transition ${isValid ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}`} >
                    Sign In
                </button>
                </form>
            </div>
        </div>
  );
}
