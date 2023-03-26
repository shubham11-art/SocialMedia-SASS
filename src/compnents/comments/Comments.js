import "./comments.scss";

const Comments = () => {
  const comments = [
    {
      id: 1,
      name: "Daren",
      userId: 1,
      profilePic: "https://picsum.photos/200/300",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit , sit amet consectetur adipisicing elit. Eligendi eos saepe, praesentium quod tempore blanditiis? Eius",
      img: "https://picsum.photos/200/300",
    },
    {
      id: 2,
      name: "Daren",
      userId: 2,
      profilePic: "https://picsum.photos/200/300",
      desc: "Repellendus impedit quasi accusamus sequi, libero enim vero, quas ad eum nulla, numquam iure voluptatum ipsum excepturi dolore doloremque.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src="https://picsum.photos/200/300" alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>

      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p> {comment.desc} </p>
          </div>
          <span className="date">1 hour ago </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
