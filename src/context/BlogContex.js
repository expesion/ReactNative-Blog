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
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (value) => {
    if (!value) return;
    dispatch({ type: "ADD_POST", payload: value });
  };
};
const deletePost = (dispatch) => {
  return (value) => {
    dispatch({ type: "DELETE_POST", payload: value });
  };
};
const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPost, deletePost },
  []
);
export { Provider as BlogContextProvider };
export default Context;
