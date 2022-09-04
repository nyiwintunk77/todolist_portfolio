// import React from 'react';
// import { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Todos from 'redux/component/Todos';
// import { allcheck, changeinput, check, edit, insert, remove, removeall, unallcheck, uncheck } from 'redux/modules/todos';

// const TodosContainer = () => {
//     const { input, todos } = useSelector(({ todos }) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }));
//     const dispatch = useDispatch();
//     const onChangeinput = useCallback((input) => dispatch(changeinput(input)), [dispatch]);
//     const onInsert = useCallback((title) => dispatch(insert(title)), [dispatch]);
//     const onCheck = useCallback((id) => dispatch(check(id)), [dispatch]);
//     const onUnCheck = useCallback((id) => dispatch(uncheck(id)), [dispatch]);
//     const onAllCheck = useCallback((allchecked) => dispatch(allcheck(allchecked)), [dispatch]);
//     const onUnAllCheck = useCallback((allchecked) => dispatch(unallcheck(allchecked)), [dispatch]);
//     const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
//     const onRemoveAll = useCallback((checked) => dispatch(removeall(checked)), [dispatch]);
//     const onEdit = useCallback((id, title) => dispatch(edit(id, title)), [dispatch]);

//     return (
//         <Todos
//             input={input}
//             todos={todos}
//             onChangeinput={onChangeinput}
//             onInsert={onInsert}
//             onCheck={onCheck}
//             onUnCheck={onUnCheck}
//             onRemove={onRemove}
//             onRemoveAll={onRemoveAll}
//             onAllCheck={onAllCheck}
//             onUnAllCheck={onUnAllCheck}
//             onEdit={onEdit}
//         />
//     );
// };
// export default TodosContainer;
