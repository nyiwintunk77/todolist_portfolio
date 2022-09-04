import React, { useCallback, useState } from 'react';
import { GrAdd } from 'react-icons/gr';
import Style from './TodoInsert.module.scss';

const Todoinsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        (e) => {
            if (value === '') {
                e.preventDefault();
                alert('必ず入力してください！');
                return;
            }
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className={Style.Todoinsert} onSubmit={onSubmit}>
            <input placeholder="新規作成" value={value} onChange={onChange} />
            <button type="submit">
                <GrAdd />
            </button>
        </form>
    );
};
export default Todoinsert;
