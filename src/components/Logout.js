import React from 'react';
import { useDispatch } from 'react-redux' //use dispatch to modify state values
import { logout } from '../features/user';

function Login() {
    const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => {dispatch(logout())} }>LOGOUT</button>
    </div>
  )
}

export default Login;
