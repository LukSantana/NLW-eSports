import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import { GameAds } from "../pages/GameAds";
import { Home } from "../pages/Home";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/games/:gameId/ads",
        element: <GameAds />
    },
])

export const Router = () => {
    return (
        <RouterProvider router={Routes} />
    )
}
