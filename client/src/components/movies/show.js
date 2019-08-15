import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => setMovie(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{movie.title}</h1>
      </header>

      <div>{movie.description}</div>
      <div>{movie.price}</div>
      <div>{movie.rating}</div>
    </div>
  );
}

export default Show;
