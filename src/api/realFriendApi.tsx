import axios from "axios";

export default axios.create({
    baseURL: 'https://protected-island-49090.herokuapp.com',
})