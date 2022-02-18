import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Top_API } from "../api";

function TopContents() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    Top_API().then((res) => {
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
                  comments: res.data.kids,
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
    <div className="n1" key={i}>
      <div className="flex">
        <li className="numbers">{i + 1}</li>
        <a href={m.url} className="titleFont" rel="noreffer" target="_blank">
          {m.title}
        </a>
      </div>
      <br />
      <br />
      <div className="line"></div>

      <div className="user flex">
        <p>
          {m.score} points by: {m.user}
        </p>
      </div>
    </div>
  ));
  return <ul>{menuList}</ul>;
}

export default TopContents;
