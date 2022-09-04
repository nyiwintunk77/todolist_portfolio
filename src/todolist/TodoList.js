import React, { useCallback } from 'react';
import TodoItem from './TodoItem';
import Style from './TodoList.module.scss';
import { List } from 'react-virtualized';

const TodoList = ({ todos, onCheckCompleted }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return <TodoItem todo={todo} key={key} style={style} onCheckCompleted={onCheckCompleted} />;
        },
        [todos, onCheckCompleted],
    );
    return (
        // <div className={Style.TodoList}>
        //     {todos.map((todo) => (
        //         <TodoItem todo={todo} key={todo._id} />
        //     ))}
        // </div>
        <List
            className={Style.TodoList}
            width={512} //all width
            height={513} //all height
            rowCount={todos.length}
            rowHeight={57} //data height
            rowRenderer={rowRenderer}
            list={todos} //array
            style={{ outline: 'none' }} //remove outline style of which is basically used in list
        />
    );
};

export default React.memo(TodoList);
