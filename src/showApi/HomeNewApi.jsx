import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "../api";
import "../css/Home.css";

function HomeContentsNew() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    News().then((res) => {
      this.res = res.data.slice(0, 3);
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
                  score: res.data.score,
                  time: res.data.time
                }
              ]);
            }
          });
      });
    });
  }, []);
  const menu = storyIds;
  const menuList = menu.map((m, i) => (
    <div key={i}>
      <div className="inBox">
        <div className="flex">
          <div className="square"></div>
          <div>
            <div className="inBox_title">{m.title}</div>
            <p className="inBox_time">{m.time}</p>
            <a href={m.url} className="inBox_url">
              {m.url}
            </a>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="flex">
        <div className="inBox_News">News</div>
        <img
          src={`/assets/back.svg`}
          alt=""
          className="linkImg"
          target="_blank"
        />
      </div>
      {menuList}
    </>
  );
}

export default HomeContentsNew;
