import { Link } from "react-router-dom";

const Detail = () => {
  const data = [
    { id: 1, todo: "리액트 자세히 배우기" },
    { id: 2, todo: "노드 꼼꼼히 배우기" },
    { id: 3, todo: "자바스크립트 완벽히 배우기" },
  ];
  return (
    <div>
      <h3>Detail페이지입니다.</h3>
      {data.map((detail) => {
        return (
          <div key={detail.id}>
            <div>할일 : {detail.id}</div>
            <Link to={`/detail/${detail.id}`}>
              <span>Go to : {detail.todo}</span>
            </Link>
            {console.log(detail.id)}
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
