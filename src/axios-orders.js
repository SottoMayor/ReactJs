import axios from 'axios';

const instace = axios.create({

    baseURL : 'https://react-burger-builder-br-default-rtdb.firebaseio.com/'

});

export default instace;