import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Show, User } from "../api";
import UseUser from "../scroll/userInfo";
import Loader from "../scroll/Loader";

function ShowContents() {
  const [storyIds, setStoryIds] = useState([]);
  const [visible, setVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
            setIsLoaded(false);
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
        <div className="userNameShow">{m.user}</div>
      </button>
    </div>
  ));

  return (
    <>
      {menuList}
      {isLoaded && <Loader />}
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
            <UseUser />
          </div>
        </div>
      )}
    </>
  );
}

export default ShowContents;
