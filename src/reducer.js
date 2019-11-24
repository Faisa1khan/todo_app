export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.input, completed: false }
      ];
    case "REMOVE_TODO":
      return [...state.filter(todo => todo.id !== action.id)];

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.value } : todo
      );
    case "TODO_WITH_BUCKET":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.input,
          completed: false,
          bucket: action.name
        }
      ];
    default:
      return state;
  }
};
