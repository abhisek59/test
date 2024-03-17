import axios from "axios";
import { createPortal } from "react-dom";
import React, { useEffect, useState } from "react";

const Formdata = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPostData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap ">
        {createPortal(<p>Hy i am avisek</p>, document.body)}
        {postData.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Formdata;
