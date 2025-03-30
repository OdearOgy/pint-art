import { useLoaderData } from "react-router";

const Images = () => {
  const { data } = useLoaderData();

  return (
    <div>
      images
      <br />
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default Images;
