import createDataContext from "./createContextData";
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "DELETE_POST":
      let id = state.findIndex((post) => post.id === action.payload.id);
      return [...state.slice(0, id), ...state.slice(id + 1)];
    case "EDIT_POST":
      return [
        ...state.slice(0, action.payload.id),
        {
          title: action.payload.title,
          content: action.payload.content,
          id: action.payload.id.toString(),
        },
        ...state.slice(action.payload.id + 1),
      ];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (value, callback) => {
    if (!value) return;
    dispatch({ type: "ADD_POST", payload: value });
    callback();
  };
};
const deletePost = (dispatch) => {
  return (value) => {
    dispatch({ type: "DELETE_POST", payload: value });
  };
};
const editPost = (dispatch) => {
  return (payload, callback) => {
    dispatch({ type: "EDIT_POST", payload });
    callback();
  };
};
const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deletePost, editPost },
  [{ title: "Blog 1", content: "Test Content 1", id: "1" }]
);
export { Provider as BlogContextProvider };
export default Context;
