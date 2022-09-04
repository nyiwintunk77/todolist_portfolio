import React, { useCallback } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import Style from './TodoItem.module.scss';
import Moment from 'moment';

const TodoItem = ({ todo, onCheckCompleted, onCheckUnCompleted, onRemove, onEdit, style }) => {
    const { id, title, checked, publishedDate } = todo;
    Moment.locale('ja');
    let date = publishedDate;

    const onChange = useCallback(
        (e) => {
            onEdit(id, e.target.value);
            if (e.target.value === '') onRemove(id);
        },
        [onEdit, onRemove, id],
    );

    return (
        <div className={Style.TodoItemVirtualized} style={style}>
            <div className={Style.TodoItem}>
                {todo && (
                    <>
                        <div className={checked ? Style.checked : Style.CheckBox}>
                            {checked ? (
                                <ImCheckboxChecked onClick={() => onCheckUnCompleted(id, checked)} />
                            ) : (
                                <ImCheckboxUnchecked onClick={() => onCheckCompleted(id, checked)} />
                            )}
                            <div className={Style.text}>
                                <input type="text" value={title} onChange={onChange} />
                                {Moment(date).format('YYYY-MM-DD HH:mm:ss')}
                            </div>
                        </div>
                        <div className={Style.Remove}>
                            <RiDeleteBin6Fill onClick={() => onRemove(id)} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default React.memo(TodoItem);
