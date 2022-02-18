import "../css/New.css";
import UseScroll from "../scroll/scroll";
import NewApi from "../showApi/NewApi";

function New() {
  return (
    <>
      <div className="container">
        <div className="main_word flex">
          <div className="word">
            <h2>Check out today's</h2>
            <h2>News now</h2>
          </div>
          <img src={`/assets/headline.svg`} alt="star" className="star_new" />

          <UseScroll />
        </div>

        <div className="new_boxs">
          <NewApi />
        </div>
      </div>

      <div className="more_post_new">
        <img src={`/assets/more.svg`} alt="plus" />
      </div>
    </>
  );
}

export default New;
