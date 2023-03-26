import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Daren",
      userId: 1,
      profilePic: "https://picsum.photos/200/300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Daren",
      userId: 2,
      profilePic: "https://picsum.photos/200/300",
      desc: "Repellendus impedit quasi accusamus sequi",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
