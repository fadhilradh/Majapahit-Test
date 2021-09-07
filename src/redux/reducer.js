const INITIAL_STATE = {
  posts: [],
};

export const GET_POSTS = "GET_POSTS";

const reducer = (prevState = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return prevState;

    case GET_POSTS:
      return {
        ...prevState,
        posts: payload,
      };
  }
};

export default reducer;
