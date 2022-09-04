import client from './client';

export const writeList = ({ title }) => client.post('/api/todolists', { title });
export const getList = () => client.get('/api/todolists/');
export const deleteList = (id) => client.delete(`/api/todolists/${id}`);
export const deleteAll = () => client.delete('/api/todolists/');
export const editList = ({ id, checked, title, publishedDate }) =>
    client.patch(`/api/todolists/${id}`, { checked, title, publishedDate });
export const editTitle = ({ id, title }) => client.patch(`/api/todolists/${id}`, { title });
export const checkAll = () => client.patch('/api/todolists/');
