/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const signIn = async ({ username, password }) => {
  try {
    const response = await axios.post('http://localhost:3001/auth/login', {
      username, password,
    }, { withCredentials: true });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};

export const signup = async ({ username, email, password }) => {
  try {
    const response = await fetch('http://localhost:3001/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('There was a problem with the fetch operation:', error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post('http://localhost:3001/auth/logout', {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
