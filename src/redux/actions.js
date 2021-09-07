import { GET_POSTS } from "./reducer";

export const fetchPosts = () => async (dispatch) => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await data.json();

    dispatch({
      type: GET_POSTS,
      payload: json,
    });
  } catch (err) {
    console.error(err);
  }
};
