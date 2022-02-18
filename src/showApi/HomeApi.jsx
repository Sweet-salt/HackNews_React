import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { News } from "../api";
import "../css/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper";
import SwiperCore, { Navigation, Pagination } from "swiper";

function HomeContents() {
  const [storyIds, setStoryIds] = useState([]);
  SwiperCore.use([Navigation, Pagination]);
  const swiperstyle = {
    position: "absolute",
    display: "inline",
    overflow: "hidden"
  };

  useEffect(() => {
    News().then((res) => {
      this.res = res.data.slice(0, 5);
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
    <div className="popular_box" key={i}>
      <div className="home_user">by: {m.user}</div>
      <a href={m.url} className="home_url">
        <div className="home_title">{m.title}</div>
      </a>
      <br />
    </div>
  ));

  return <>{menuList}</>;
}

export default HomeContents;
