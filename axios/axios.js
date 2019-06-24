import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://escape-filas-backend-app.herokuapp.com/graphql'
});

export default instance;