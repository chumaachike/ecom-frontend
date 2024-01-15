import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await axios.get('http://localhost:3001/product/products');
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductByName = async (name) => {
  try {
    const response = await axios.get(`http://localhost:3001/product/search?name=${name}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
