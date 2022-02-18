import "../css/Ask.css";
import UseScroll from "../scroll/scroll";
import AskContents from "../showApi/AskApi";

function Ask() {
  return (
    <>
      <div className="container">
        <div className="main_word flex">
          <div className="word">
            <h2>Are you Curious?</h2>
            <h2>Check out ASK!</h2>
          </div>
          <img src={`/assets/headline.svg`} alt="star" className="star_ask" />

          <UseScroll />
        </div>

        <div className="new_boxs">
          <AskContents />
        </div>
      </div>

      <div className="more_post_ask">
        <img src={`/assets/more.svg`} alt="plus" />
      </div>
    </>
  );
}

export default Ask;
