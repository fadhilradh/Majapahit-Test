import "./App.css";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div className="App gap-8 w-full flex justify-center flex-wrap py-10">
      {posts.map((post, index) => (
        <Card key={index} post={post} />
      ))}
    </div>
  );
}

export default App;
