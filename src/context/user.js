import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { signIn, signup, logout } from '../api/auth';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = async (values) => {
    try {
      const response = await signIn(values);
      setUser(response);
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  const createUser = async (values) => {
    try {
      const response = await signup(values);
      setUser(response);
    } catch (error) {
      console.error('Error logging in', error.message);
    }
  };

  const deleteUser = async () => {
    try {
      await logout();
      setUser({});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider value={{
      user, login, createUser, deleteUser,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContext;
