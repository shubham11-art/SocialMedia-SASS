import "./stories.scss";

const Stories = () => {
  const stories = [
    {
      id: 1,
      img: "https://picsum.photos/200/300",
      name: "Steven",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/300",
      name: "Steven",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/300",
      name: "Steven",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/300",
      name: "Steven",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src="https://picsum.photos/200/300" alt="" />
        <span>John Kaka</span>
        <button>+</button>
      </div>

      {stories.map((story) => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
