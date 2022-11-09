import {getItem} from '../components/storage/localStorage';

const getUser = async () => {
  const response = await fetch(`http://localhost:8080/user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Authorization: `Bearer ${getItem('jwt')}`,
    },
  });
  return response.json();
};

const loginUser = async (userData: any) => {
  const response = await fetch(`http://localhost:8080/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

const registerUser = async (userData: any) => {
  const response = await fetch(`http://localhost:8080/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

export {getUser, loginUser, registerUser};
