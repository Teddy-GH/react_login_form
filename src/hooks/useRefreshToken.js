import React from 'react';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    // refresh endpoint
    const response = await axios.get('/refresh', {
    // axios send secure httpOnly cookie 
      withCredentials: true,
    });
    setAuth(prev => {
        console.log(JSON.stringify(prev));
        console.log(response.data.accesstoken);
        return {...prev, accesstoken: response.data.accesstoken}
    })
    return response.data.accesstoken;
  };
  return refresh;
};

export default useRefreshToken;
