import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
