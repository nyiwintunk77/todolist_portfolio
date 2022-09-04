import React from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Style from './TodoItem.module.scss';

const TodoItem = ({ todo, onCheckCompleted, style }) => {
    const { _id, title, checked, publishedDate } = todo;
    return (
        <div className={Style.TodoItemVirtualized} style={style}>
            <div className={Style.TodoItem}>
                <div className={checked ? Style.checked : Style.CheckBox}>
                    {checked ? (
                        <ImCheckboxChecked onClick={() => onCheckCompleted(_id, checked)} />
                    ) : (
                        <ImCheckboxUnchecked onClick={() => onCheckCompleted(_id, checked)} />
                    )}
                    <div className={Style.text}>{title + ' (' + publishedDate + ') '}</div>
                </div>
                <div className={Style.Remove}>
                    <RiDeleteBin6Fill />
                </div>
            </div>
        </div>
    );
};

export default React.memo(TodoItem);
