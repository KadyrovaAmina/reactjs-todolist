export const TodoInput = (props) => {
  const { handleCreateTodos, todoValue, setTodoValue } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo ..."
      />
      <button
        onClick={() => {
          handleCreateTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
};
