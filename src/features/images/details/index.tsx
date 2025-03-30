import { useCallback, type FC } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { APP_ROUTES } from "../../../pages/router";

const ImageDetails: FC = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const handleBackNavigation = useCallback(() => {
    navigate(APP_ROUTES.HOME);
  }, [navigate]);

  return (
    <div>
      <button onClick={handleBackNavigation}>go back</button>
      <br />
      Image details
      <br />
      {JSON.stringify(data, null, 4)}
    </div>
  );
};

export default ImageDetails;
