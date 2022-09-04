import Router from 'koa-router';
import todolists from './todolists';

const api = new Router();

api.use('/todolists', todolists.routes());

export default api;
