import "../css/Top.css";
import TopContents from "../showApi/TopApi";

function Top() {
  return (
    <>
      <div className="main_word flex">
        <div className="word">
          <h2>Check out today's</h2>
          <h2>popular information</h2>
        </div>
        <img src={`/assets/headline.svg`} alt="star" className="star_top" />
        <div className="recent">
          <p>Recent Post: a few seconds ago</p>
        </div>
      </div>

      <div className="top_post">
        <TopContents />
      </div>

      <div className="more_post">
        <img src={`/assets/more.svg`} alt="plus" />
      </div>
    </>
  );
}

export default Top;
