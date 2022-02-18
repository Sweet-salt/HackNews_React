import "../css/Show.css";
import UseScroll from "../scroll/scroll";
import ShowContents from "../showApi/ShowApi";

function Show() {
  return (
    <>
      <div className="container">
        <div className="main_word flex">
          <div className="word">
            <h2>Check out</h2>
            <h2>hacker's work</h2>
          </div>
          <img src={`/assets/headline.svg`} alt="star" className="star_show" />

          <UseScroll />
        </div>

        <div className="new_boxs">
          <ShowContents />
          <div className="blankBox_show"></div>
        </div>
      </div>

      <div className="more_post_show">
        <img src={`/assets/more.svg`} alt="plus" />
      </div>
    </>
  );
}

export default Show;
