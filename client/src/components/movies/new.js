import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/movies",inputs)
      .then(resp => setRedirect(true))
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    event.persist();
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/movies" />;

  return (
    <div className="container">
      <header>
        <h1>New Movie Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              name="title"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              name="description"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              className="form-control"
              name="price"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <input
              className="form-control"
              name="rating"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
