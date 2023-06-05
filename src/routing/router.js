import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import Products from "../components/Products";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
    {path: '/' , element: <RootLayout/> , children: [
        {index: true , element: <h1>Home Page</h1>},
        {path: 'products' , element: <Products/>},
        {path: 'products/:id' , element: <ProductDetails/>},
        {path: 'cart' , element: <Cart/>},
    ]}
])