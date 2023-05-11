import logo from './logo.svg';
import './App.css';
import React, {useState, Fragment} from 'react'

const post1 = {
  postId: 1,
  title: "happy holiday",
  writer: "kim",
  year: 2023,
  month: 5,
  likes: 5,
};
const post2 = {
  postId: 2,
  title: "happy festival",
  writer: "kim",
  year: 2023,
  month: 4,
  likes: 10,
};

const blogInfo = {
  nPosts: 200,
  nFollower: 400,
  nFollow: 600,
};
  
function BlogInfo() {
  let [info, setInfo] = useState(blogInfo);
  return (
    <div className="info-container">
      <div className="info-list">게시물:{info.nPosts}</div>
      <div className="info-list">팔로워:{info.nFollower}</div>
      <div className="info-list">팔로우:{info.nFollow}</div>
      <i onClick={
        () => {
          setInfo({...info, nFollow: info.nFollow + 1})
        }
      }>다른 사용자 팔로우 ❤️</i>
    </div>
  );
}
  
function Paging() {
  let [pageNum, setPageNum] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setPageNum(pageNum - 1);
          setPageNum(pageNum - 1);
          console.log(pageNum);
        }}
      >
        ◀
      </button>
      {pageNum}
      <button
        onClick={() => {
          setPageNum((prevState) => prevState + 1);
          setPageNum((prevState) => prevState + 1);
          console.log(pageNum);
        }}
      >
        ▶
      </button>
    </div>
  );
}

function App() {
  let [post, setPost] = useState([post1, post2]);

  return (
    <div className="post-container">
      <BlogInfo></BlogInfo>
      <div className="post-list">
        <h2>Title: {post[0].title}</h2>
        <p>
          date: {post[0].month}. {post[0].year}
        </p>
        <p>Writer: {post[0].writer}</p>
        <p>Like:{post[0].likes}</p>
        <i
          onClick={() => {
            let modiPost = post.map((p) =>
              p.postId === 1 ? { ...p, likes: p.likes + 1 } : p
            );
            setPost(modiPost);
          }}
        >
          👍
        </i>
      </div>

      <div className="post-list">
        <h2>Title: {post[1].title}</h2>
        <p>
          date: {post[1].month}. {post[1].year}
        </p>
        <p>Writer: {post[1].writer}</p>
        <p>Like:{post[1].likes}</p>
        <i
          onClick={() => {
            let modiPost = post.map((p) =>
              p.postId === 2 ? { ...p, likes: p.likes + 1 } : p
            );
            setPost(modiPost);
          }}
        >
          👍
        </i>
      </div>
      <Paging></Paging>
    </div>
  );
}



export default App;

// 3항 연산자
/*
function App() {
  const name = {
    firstName: "Haneol",
    lastName: "Kim"
  }

  const isMember = true;
  const lang = "KOR";

  return( 
    <div>
      {
        isMember? 
          (
            lang === "KOR"? 
            <h1>안녕하세요, {formatName(name)}!</h1>
            :
            <h1>Hello, {formatName(name)}!</h1>
          ): 
        <h1>Hello, Visitor</h1>
      }
    </div>
  )
*/

// 조건부 렌더링
/* 
const tabUI = {
  admin:<button>음식점 등록관리</button>,
  company:<button>음식점 등록</button>,
  user:<button>음식점 조회</button>
}

function App() {
  const memberType = "company"
  return tabUI[memberType]
}
*/

// SetPost? 
/*
function App() {
  let postTitle = "Happy holiday";
  let postDate = new Date();
  let likes = 5;
  let [post, setPost] = useState({
    title: "Happy holiday",
    date: new Date(),
    writer: "KIM",
    likes: 5
  })

  return (
    <div className="post-container">
      <div className="post-list">
        <h2>Title: {post.title}</h2>
        <p>Writer: {post.writer}</p>
        <p>
          date: {post.date.getMonth() + 1}. {postDate.getFullYear()}
        </p>
        <p
          onClick={function () {
            //// 값 변경은 setter를 통해 수행
            // setPost.likes++; (X)
            // 객체 변경은 확산하여, 필요한 부분만 교체
            setPost( {...post, likes: post.likes+1} )
            console.log(post.likes);
          }}
        >
          Like:{post.likes}
        </p>
      </div>
    </div>
  );
}
*/

// blog, post
/*
const blogInfo = {
  nPosts: 200,
  nFollower: 400,
  nFollow: 600,
};
  
function BlogInfo() {
  let [info, setInfo] = useState(blogInfo);
  return (
    <div className="info-container">
      <div className="info-list">게시물:{info.nPosts}</div>
      <div className="info-list">팔로워:{info.nFollower}</div>
      <div className="info-list">팔로우:{info.nFollow}</div>
      <i onClick={
        () => {
          setInfo({ ... info, nFollow: info.nFollow + 1})
        }
      }>다른 사용자 팔로우♥</i>
    </div>
  );
}
  

function Paging() {
  let [pageNum, setPageNum] = useState(1);
  return (
    <div>
      <button
        onClick={() => {
          setPageNum(pageNum - 1);
          setPageNum(pageNum - 1);
          console.log(pageNum);
        }}
      >
        ◀
      </button>
      {pageNum}
      <button
        onClick={() => {
          setPageNum((prevState) => prevState + 1);
          setPageNum((prevState) => prevState + 1);
          console.log(pageNum);
        }}
      >
        ▶
      </button>
    </div>
  );
}

function App() {
  let [post, setPost] = useState({
    title: "hppay holiday",
    date: new Date(),
    writer: "Kim",
    likes: 5,
  }); 
  return (
    <div className="post-container">
      <BlogInfo></BlogInfo>
      <div className="post-list">
        <h2>Title: {post[0]}</h2>
        <p>
          date: {post.date.getMonth() + 1}. {post.date.getFullYear()}
        </p>
        <p>Writer: {post[1]}</p>
        <p
          onClick={function () {
            setPost({... post, likes: post.likes + 1})
            console.log(post.likes);
          }}
        >
          Like:{post.likes}
        </p>
      </div>
      <Paging></Paging>
    </div>
  );
}
*/