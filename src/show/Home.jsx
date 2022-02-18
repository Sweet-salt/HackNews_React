import "../css/Home.css";
import HomeContents from "../showApi/HomeApi";
import HomeContentsNew from "../showApi/HomeNewApi";
import HomeContentsAsk from "../showApi/HomeAskApi";
import HomeContentsShow from "../showApi/HomeShowApi";
import HomeContentsJobs from "../showApi/HomeJobApi";
// popular
let curPos = 0;
let position = 0;
const BOX_WIDTH = 220;
const items = document.querySelector(".home_popular");
function prev() {
  if (curPos > 0) {
    position += BOX_WIDTH;
    items.style.transform = `translateX(${position}px)`;
    curPos = curPos - 1;
  }
}

function next() {
  if (curPos < 4) {
    position -= BOX_WIDTH;
    items.style.transform = `translateX(${position}px)`;
    curPos = curPos + 1;
  }
}
//new
let new_curPos = 0;
let new_position = 0;
const NEW_BOX_WIDTH = 282;

const new_items = document.querySelector(".box_container");
function new_prev() {
  if (new_curPos > 0) {
    new_position += NEW_BOX_WIDTH;
    new_items.style.transform = `translateX(${new_position}px)`;
    new_curPos = new_curPos - 1;
  }
}
function new_next() {
  if (new_curPos < 3) {
    new_position -= NEW_BOX_WIDTH;
    new_items.style.transform = `translateX(${new_position}px)`;
    new_curPos = new_curPos + 1;
  }
}

function Home() {
  return (
    <div className="container">
      <div className="main_word flex">
        <div className="word_home">
          <h2>Check out today's</h2>
          <h2>popular information</h2>
        </div>

        <img src={`/assets/headline.svg`} alt="star" className="star" />
      </div>

      <div className="home_popular">
        <HomeContents />
      </div>

      <button className="move_btn_right" onClick={next}>
        <img src={`/assets/arrow_forward.svg`} alt="" />
      </button>
      <button className="move_btn_left" onClick={prev}>
        <img src={`/assets/arrow_back.svg`} alt="" />
      </button>

      <div className="today_new">
        <p className="today_new_word">Today's New!</p>

        <div className="box_container">
          <div className="box4">
            <HomeContentsNew />
          </div>
          <div className="box4">
            <HomeContentsAsk />
          </div>
          <div className="box4">
            <HomeContentsShow />
          </div>
          <div className="box4">
            <HomeContentsJobs />
          </div>
        </div>

        <button className="today_new_btn_right" onClick={new_next}>
          <img src={`/assets/arrow_forward.svg`} alt="" />
        </button>
        <button className="today_new_btn_left" onClick={new_prev}>
          <img src={`/assets/arrow_back.svg`} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Home;
