import axios from 'axios';

// axios.get('https://dog.ceo/api/breeds/image/random')
//     .then(response =>{
//         this.url = response.data.message;
//     }).catch(function (err) {
//     console.log(err)
// });

// function () {
//     return axios.get('https://dog.ceo/api/breeds/image/random')
// };
var host = 'https://dog.ceo';
export const dogs = () => {
    return axios.get(`${host}/api/breeds/image/random`)
};

