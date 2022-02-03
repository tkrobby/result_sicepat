const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL);

const getId = () => api.get('/posts')
    .set('Content-Type', 'application/json')

const getUserId = (idUser) => api.get('/posts/'+idUser)
    .set('Content-Type', 'application/json')

const getUserIdComment = (idUser) => api.get('/posts/'+idUser+'/comments')
    .set('Content-Type', 'application/json')

module.exports = {
    getId,getUserId,getUserIdComment
}