import { useEffect, useState } from "react";

function UseScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  //! window.scrollY : 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다
  //! document.documentElement.scrollTop : y축 방향으로 스크롤한 거리
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <div>
      <div className={scrollPosition < 60 ? "recent_new" : "recent_scroll"}>
        <p>Recent Post: a few seconds ago</p>
      </div>
    </div>
  );
}

export default UseScroll;
