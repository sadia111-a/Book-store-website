import { useLoaderData, useParams } from "react-router-dom";

const SingleBook = () => {
  const { _id } = useParams();
  const allBook = useLoaderData();

  return <div>single Book:{(_id, bookTitle)}</div>;
};

export default SingleBook;
