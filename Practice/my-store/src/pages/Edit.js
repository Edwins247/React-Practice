import React, { useState, lazy, Suspense } from "react";
import { useQuery, useMutation, useQueryClient, useQueries } from "react-query";
import { getPosts, getUser, updateNickname } from "../mocks/api";

const Post = lazy(() => import("./Post"));

// // 정적으로 사용
// import add from "./math";
// add(1, 2)

// import ("./math").then(math => console.log(math.add(1, 2)))

// api를 통해 현재 닉네임값 가져오기
// handleSubmit: 업데이트 된 inputValue를 서버에 전송해서, 닉네임값 업데이트하기

export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  // const { data : user } = useQuery('@getUser', getUser, {
  //   staleTime: Infinity
  // });

  // const { data : posts } = useQuery('@getPosts', getPosts, {
  //   staleTime: Infinity
  // });

  const results = useQueries([
    {
      queryKey: ['@getUser'],
      queryFn: getUser,
      staleTime: Infinity
    },
    {
      queryKey: ['@getPosts'],
      queryFn: getPosts,
      staleTime: Infinity
    },
  ]);

  const user = results[0].data;
  const posts = results[1].data;

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries('@getUser');
    }
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  // if (isLoading) return <span>Loading...</span>

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts.map((post) => (
          <Post title={post.title}/>
        ))}
      </ul>
    </>
  );
}
