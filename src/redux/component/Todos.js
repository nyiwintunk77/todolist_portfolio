import React, { useCallback } from 'react';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { GrAdd } from 'react-icons/gr';
import Style2 from './css/TodoItem.module.scss';
import Style1 from './css/TodoInsert.module.scss';
import Style from './css/TodoTemplate.module.scss';
import Style3 from './css/TodoList.module.scss';
import Moment from 'moment';

const TodoItem = ({ todo, onRemove, onEdit, onEdit1, onEditTitle }) => {
    const { _id, title, checked, publishedDate } = todo;
    Moment.locale('ja');
    const onChange = useCallback(
        (e) => {
            onEditTitle(_id, e.target.value);
            e.preventDefault();
        },
        [onEditTitle, _id],
    );

    return (
        <div className={Style2.TodoItem}>
            {console.log('publishedDate:' + publishedDate)}
            <ul>
                <li>
                    <div className={checked ? Style2.checked : Style2.CheckBox}>
                        {checked ? (
                            <ImCheckboxChecked onClick={() => onEdit1(_id)} />
                        ) : (
                            <ImCheckboxUnchecked onClick={() => onEdit(_id)} />
                        )}
                        {console.log('CHECKED:' + checked)}
                        <div className={Style2.text}>
                            <input type="text" value={title} onChange={onChange} />[
                            {Moment(publishedDate).format('YYYY-MM-DD HH:mm:ss')}]
                        </div>
                        <div className={Style2.Remove}>
                            <RiDeleteBin6Fill onClick={() => onRemove(_id)} />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

const Todos = ({
    title,
    onChange,
    onSubmit,
    list,
    loading,
    listError,
    onRemove,
    onEdit,
    onEdit1,
    onRemoveAll,
    onEditTitle,
    onCheckAll,
}) => {
    if (listError) {
        return <div>エラーが発生しました。</div>;
    }
    const onChangeTitle = (e) => {
        onChange({ key: 'title', value: e.target.value });
    };

    return (
        <div className={Style.TodoTemplate}>
            <div className={Style.title}>TO DO LIST</div>
            <div className={Style.contents}>
                <form className={Style1.Todoinsert} onSubmit={onSubmit}>
                    <input value={title} onChange={onChangeTitle} placeholder="新規作成..." />
                    <button type="submit">
                        <GrAdd />
                    </button>
                </form>
                <div className={Style3.All}>
                    <input type="checkbox" checked={false} readOnly={true} onClick={onCheckAll} />
                    全てチェック
                    <button onClick={onRemoveAll}>削除</button>
                    <span>完了チェックして全て削除</span>
                </div>
                {console.log('List :' + list)}
                {!loading && list && (
                    <div className={Style3.TodoList}>
                        {console.log('rendering')}
                        {list.map((todo) => (
                            <TodoItem
                                todo={todo}
                                key={todo._id}
                                onRemove={onRemove}
                                onEdit={onEdit}
                                onEdit1={onEdit1}
                                onEditTitle={onEditTitle}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Todos;
