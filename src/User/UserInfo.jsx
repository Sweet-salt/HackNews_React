import React, { useState } from "react";
import InfoList from "./InfoList";
import InfoView from "./InfoView";
import "./style.css";
import data from "../assets/api/movie.json";
import Modal from "./Modal";

const UserInfo = (userName) => {
  const [movies, setMovies] = useState(data);
  const [current, setCurrent] = useState(data[0]);

  const [modal, setModal] = useState(false);

  const onView = (rank) => {
    setCurrent(data.find((item) => item.rank === rank));
  };

  const onPopup = () => {
    setModal(true);
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <>
      <div className="popup">
        <InfoView current={current} onPopup={onPopup} />
        <InfoList movies={movies} onView={onView} />
        {modal && <Modal current={current} onClose={onClose} />}
      </div>
    </>
  );
};

export default UserInfo;
