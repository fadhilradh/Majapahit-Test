const Card = ({ post }) => {
  return (
    <div
      className=" capitalize text-white hover:cursor-pointer rounded-md transition duration-150 transform hover:scale-105
     shadow-lg p-5 flex flex-col justify-center items-center h-96 w-96 bg-blue-400 hover:bg-blue-500"
    >
      <p className="text-lg capitalize font-bold mb-5">{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default Card;
