import React, { useRef, useState } from "react";
import "./signup.css";
import axios from "axios";
import PropType from "prop-types";

function SignUp(props) {
  const [signUp, setSignUp] = useState({
    Username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;

    setSignUp({
      ...signUp,
      [name]: e.target.value,
    });
  };
  const file = useRef(null);

  const handleSubmmit = (e) => {
    e.preventDefault();

    if (file.current.files[0].size <= 2 * 1024 * 1024) {
      alert(
        "The file uploaded of name" +
          file.current.files[0].name +
          "is of size" +
          file.current.files[0].size +
          "Kb" +
          "is uploaded"
      );
    } else {
      alert("Upload next file");
    }

    //   axios
    //     .put(
    //       "https://jsonplaceholder.typicode.com/posts/1",
    //       JSON.stringify({
    //         Username: signUp.Username,
    //         email: signUp.email,
    //         password: signUp.password,
    //       }),
    //       {
    //         headers: {
    //           "Content-type": "application/json; charset=UTF-8",
    //         },
    //       }
    //     )
    //     .then((response) => response.data.json())
    //     .then((json) => console.log(json));
    // };
  };

  return (
    <div>
      <div className="container">
        <form className="signup-form">
          <h2>
            {props.name}
            <br />
            {props.phone_number}
          </h2>
          <div className="form-group">
            <label htmlFor="Username">Username:</label>
            <input
              type="text"
              id="Username"
              name="Username"
              value={signUp.Username}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={signUp.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={signUp.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          <hr />
          <input type="file" ref={file} />
          <button onClick={handleSubmmit}> Sign Up</button>
          <div className="login-link">
            <span>
              Already have an account? <a href="signin.html">Log in</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
SignUp.propType = {
  name: PropType.string,
  phone_number: PropType.number,
};
export default SignUp;
