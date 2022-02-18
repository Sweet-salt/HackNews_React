import Ask from "./show/Ask";
import Detail from "./show/Detail";
import Home from "./show/Home";
import Job from "./show/Job";
import New from "./show/New";
import Show from "./show/Show";
import Top from "./show/Top";

export const routes = [
  {
    role: "home",
    path: "/",
    element: <Home />
  },
  {
    role: "top",
    path: "/top",
    element: <Top />
  },
  {
    role: "new",
    path: "/new",
    element: <New />
  },
  {
    role: "show",
    path: "/show",
    element: <Show />
  },
  {
    role: "ask",
    path: "/ask",
    element: <Ask />
  },
  {
    role: "job",
    path: "/job",
    element: <Job />
  }
];
