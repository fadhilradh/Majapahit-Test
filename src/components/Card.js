const Card = ({ post }) => {
  return (
    <div
      className=" capitalize hover:cursor-pointer rounded-md transition duration-150 transform hover:scale-105
     shadow-lg p-5 flex flex-col justify-center items-center h-96 w-80 
     bg-gradient-to-br from-blue-600 via-blue-400 to-white hover:bg-blue-600"
    >
      <p className="text-xl text-white capitalize font-bold mb-5">
        {post.title}
      </p>
      <p>{post.body}</p>
    </div>
  );
};

export default Card;
