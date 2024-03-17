import React from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../Redux/Slice/postSlice";

const Post = () => {
  const dispatch = useDispatch();
  const fetchPost = () => {
    dispatch(getPosts());
  };
  return (
    <div>
      <h1>Fetching Postdata</h1>
      <button onClick={fetchPost}>fetchPost</button>
    </div>
  );
};

export default Post;
