import "../css/Job.css";
import UseScroll from "../scroll/scroll";
import JobsContents from "../showApi/JobApi";

function Job() {
  return (
    <>
      <div className="container">
        <div className="main_word flex">
          <div className="word">
            <h2>What job you want?</h2>
            <h2>Check out job!</h2>
          </div>
          <img src={`/assets/headline.svg`} alt="star" className="star_job" />
          {/* <div className="recent_job">
            <p>Recent Post: a few seconds ago</p>
          </div> */}
          <UseScroll />
        </div>

        <div className="new_boxs">
          <JobsContents />
        </div>
      </div>

      <div className="more_post_job">
        <img src={`/assets/more.svg`} alt="plus" />
      </div>
    </>
  );
}

export default Job;
