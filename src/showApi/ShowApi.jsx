import React from "react";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Show } from "../api";

function ShowContents() {
  const [storyIds, setStoryIds] = useState([]);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    Show().then((res) => {
      this.res = res.data.slice(0, 10);
      this.res.forEach(async (ele) => {
        await axios
          .get("https://hacker-news.firebaseio.com/v0/item/" + ele + ".json")
          .then((res) => {
            if (Array.isArray(this.res) && this.res.length === 0) {
              return;
            } else {
              setStoryIds((value) => [
                ...value,
                {
                  id: res.data.id,
                  title: res.data.title,
                  url: res.data.url,
                  user: res.data.by,
                  score: res.data.score
                }
              ]);
            }
          });
      });
    });
  }, []);
  const menu = storyIds;
  const menuList = menu.map((m, i) => (
    <div className="box_show" key={i}>
      <div className="flex">
        <p className="numbers">{i + 1}</p>
        <a href={m.url} className="titleFont">
          {m.title}
        </a>
        <a href={m.url}>
          <img src={`/assets/back.svg`} alt="" className="imgLink" />
        </a>
      </div>
      <br />
      <button
        className="userShow"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <a href={"#"} className="userNameShow">
          {m.user}
        </a>
      </button>
    </div>
  ));
  return (
    <>
      {menuList}
      {visible && (
        <div className="modal-container" id="modal">
          <div className="modal">
            <div className="modal-top flex">
              <p>User Info</p>
              <button
                className="close-btn"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                <img src={`/assets/close_black.svg`} alt="" />
              </button>
            </div>
            <div className="user-detail flex">
              <div className="user-profile"></div>
              <div className="user-detail-info">
                <p>user : </p>
                <p>created : </p>
                <p>karma : </p>
              </div>
            </div>
            <p className="about">about:</p>
            <p className="email">Twitter:</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowContents;
