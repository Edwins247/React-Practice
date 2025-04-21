import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import useSwr from "swr";

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  // const [docs, setDocs] = useState([]);

  async function fetcher(url) {
    const result = await axios.get(url);
    console.log(result.data);
    return result.data;
  }

  const { data: docs, error } = useSwr("posts", () => fetcher("https://jsonplaceholder.typicode.com/posts"));

  if (error) return <div>에러가 발생했습니다.</div>;
  if (!docs) return <div>로딩중...</div>;

  // const docs = [
  //   {
  //     id: 1,
  //     title: "React 공부를 시작하면서",
  //     date: "05/01/2021",
  //   },
  //   {
  //     id: 2,
  //     title: "CRA 없이 리액트 프로젝트 시작하기",
  //     date: "12/01/2021",
  //   },
  //   {
  //     id: 3,
  //     title: "이제는 사용해보자 useMemo & useCallback",
  //     date: "31/01/2021",
  //   },
  //   {
  //     id: 4,
  //     title: "React 프로젝트에 Prettier 적용하기",
  //     date: "15/02/2021",
  //   },
  //   {
  //     id: 5,
  //     title: "React의 setState() 제대로 사용하기",
  //     date: "28/02/2021",
  //   },
  // ];

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const result = await res.json();
  //     console.log(result);
  //     return result;
  //   }

  //   fetchData().then(res => {
  //     setDocs(res);
  //   });
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     console.log(result);
  //     console.log(result.data);
  //     return result.data;
  //   }

  //   fetchData().then(res => {
  //     setDocs(res);
  //   });
  // }, []);

  return (
    <div>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
      {/* <Outlet /> */}
    </div>
  );
}
