import React from 'react';
import Style from './TodoTemplate.module.scss';

const TodoTemplate = ({ children }) => {
    return (
        <div className={Style.TodoTemplate}>
            <div className={Style.title}>メモを取りましょう</div>
            <div className={Style.contents}>{children}</div>
        </div>
    );
};
export default TodoTemplate;
