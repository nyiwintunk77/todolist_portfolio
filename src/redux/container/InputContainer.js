import Todos from 'redux/component/Todos';
import { editList, changeinput, getList, writeList, editTitle } from 'redux/modules/todos';
import { initialize } from 'redux/modules/todos';
import { useDispatch, useSelector } from 'react-redux';
import React, { useCallback, useEffect } from 'react';
import { checkAll, deleteAll, deleteList } from 'redux/lib/api/lists';

const InputContainer = () => {
    const dispatch = useDispatch();
    const { title, list, checked, publishedDate, listError, loading } = useSelector(({ todos, loading }) => ({
        title: todos.title,
        checked: todos.checked,
        publishedDate: todos.publishedDate,
        list: todos.list,
        listError: todos.listError,
        loading: loading['todos/GET_LIST'],
    }));

    const onChange = useCallback((payload) => dispatch(changeinput(payload)), [dispatch]);

    const onSubmit = (e) => {
        dispatch(writeList({ title }));
    };

    useEffect(() => {
        dispatch(getList());
        console.log('GETTING');
        // return () => {
        //     dispatch(initialize());
        // };
    }, [dispatch]);

    const onRemove = async (id) => {
        try {
            await deleteList(id);
            dispatch(getList());
        } catch (error) {
            console.log(error);
        }
    };

    const onRemoveAll = () => {
        deleteAll();
        dispatch(getList());
    };

    // publishedDate = new Date().toISOString();
    // const onEdit = (id, checked, title) => {
    //     dispatch(editList({ id, checked: !checked, title: title, publishedDate: publishedDate }));
    //     dispatch(getList());
    // };

    const onEdit = (id) => {
        dispatch(editList({ id, checked: !checked, publishedDate: publishedDate }));
        dispatch(getList());
    };
    const onEdit1 = (id) => {
        dispatch(editList({ id, checked }));
        dispatch(getList());
    };
    const onEditTitle = (id, title) => {
        dispatch(editTitle({ id, title }));
        // dispatch(getList());
    };
    const onCheckAll = () => {
        checkAll();
        dispatch(getList());
    };

    return (
        <Todos
            onChange={onChange}
            title={title}
            list={list}
            loading={loading}
            listError={listError}
            onSubmit={onSubmit}
            onRemove={onRemove}
            onEdit={onEdit}
            onEdit1={onEdit1}
            onEditTitle={onEditTitle}
            onRemoveAll={onRemoveAll}
            onCheckAll={onCheckAll}
        />
    );
};

export default InputContainer;
