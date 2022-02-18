import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "../api";

function TopContents() {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    News().then((res) => {
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
    <div className="box_new" key={i}>
      <div className="flex">
        <li className="numbers">{i + 1}</li>
        <a href={m.url} className="titleFont">
          {m.title}
        </a>
        <br />
      </div>
      <br />
      <div className="underline"></div>
    </div>
  ));
  return <ul>{menuList}</ul>;
}

export default TopContents;
