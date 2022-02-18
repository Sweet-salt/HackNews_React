import { useLocation, useNavigate, useParams } from "react-router-dom";

// react-router-dom v6 버전에서 사라진 withRouter 구현
const withRouter = (Component) => (props) => {
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();
	return <Component {...props} router={{ location, navigate, params }} />;
};

export default withRouter;
