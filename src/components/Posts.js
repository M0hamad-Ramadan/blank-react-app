const Posts = ({ title }) => {
  return <h1>{title == null || title === "" ?( <></>) : (title)}</h1>;
};

export default Posts;
