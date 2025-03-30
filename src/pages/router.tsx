import { createBrowserRouter } from "react-router";
import { getImages } from "../features/images/_api";
import ImagesOverviewPage from "./images-overview-page";

const router = createBrowserRouter([
  {
    index: true,
    element: <ImagesOverviewPage />,
    loader: async () => {
      return {
        data: await getImages(),
      };
    },
  },
]);

export default router;
