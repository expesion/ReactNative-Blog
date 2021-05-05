import createDataContext from "./createContextData";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { title: action.payload }];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return (e) => {
    dispatch({ type: "ADD_POST", payload: e.nativeEvent.text });
  };
};
const { Context, Provider } = createDataContext(reducer, { addBlogPost }, []);
export { Provider };
export default Context;
