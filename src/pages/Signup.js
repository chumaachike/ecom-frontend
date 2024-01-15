import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user';

function Signup() {
  const { createUser } = useContext(UserContext);
  const [values, setValues] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          email
          <input
            name="email"
            id="email"
            type="text"
            value={values.email}
            onChange={handleInput}
          />
        </label>
        <label htmlFor="username">
          Username
          <input
            name="username"
            id="username"
            type="text"
            value={values.username}
            onChange={handleInput}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            name="password"
            id="password"
            type="password"
            value={values.password}
            onChange={handleInput}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;
