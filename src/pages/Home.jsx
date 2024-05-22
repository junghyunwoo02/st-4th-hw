import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>Home페이지입니다.</h3>
      <Link to={"/detail"}>Detail 페이지로 이동하기</Link>
    </div>
  );
};

export default Home;
