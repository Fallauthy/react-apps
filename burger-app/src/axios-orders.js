import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a5c5d.firebaseio.com/'
})

export default instance;