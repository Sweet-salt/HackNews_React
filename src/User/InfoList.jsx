import React from "react";

const InfoList = ({ info }) => {
  return (
    <div className="user_info">
      <div>
        <p>user: {info.by}</p>
        <p>created: {info.created}</p>
        <p>karma: {info.karma}</p>
        <p>about: {info.about}</p>
      </div>
    </div>
  );
};

export default InfoList;
