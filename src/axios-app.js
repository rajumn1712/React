import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-application-1b3dc.firebaseio.com/'
})

export default instance;