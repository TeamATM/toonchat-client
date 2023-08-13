import axios from 'axios';

const defaultInstance = axios.create({
  baseURL: process.env.SERVER_URL || 'http://localhost:8080/',
});

export default defaultInstance;
