import { useState, useEffect } from "react";
import { getUser } from "../api";

const UseUser = (id) => {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser(id).then((user) => setUser(user));
  // }, [id]);

  return (
    <>
      <div className="user-detail flex">
        <div className="user-profile"></div>
        <div className="user-detail-info">
          <p className="modal-user">user : </p>
          <p className="modal-created">created : </p>
          <p className="modal-karma">karma : </p>
        </div>
      </div>
      <p className="about">about:</p>
      <p className="email">Twitter:</p>);
      {console.log("123123213")}
    </>
  );
};

export default UseUser;
