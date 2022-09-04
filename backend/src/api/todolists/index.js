import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);
posts.delete('/:id', postsCtrl.checkObjectId, postsCtrl.remove);
posts.delete('/', postsCtrl.removeAll);
posts.patch('/:id', postsCtrl.checkObjectId, postsCtrl.update);
posts.patch('/', postsCtrl.checkAll);

export default posts;
