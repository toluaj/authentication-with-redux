import React from 'react';
import { useDispatch } from 'react-redux' //use dispatch to modify state values
import { login } from '../features/user';

function Login() {
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => {dispatch(login({ name: 'Tolu', age: '21', email: 'toluajia@gmail.com' }))} }>LOGIN</button>
    </div>
  )
}

export default Login;
