import {createBrowserRouter} from "react-router-dom";
import {productApis} from "@/apis/productApis.js";

const path = {HOME: '/', ABOUT: '/about', CONTACT: '/contact'}
import {Button} from '@/components/ui/button.jsx'
import {ThemeToggle} from "@/components/common/ThemeToggle/ThemeToggle.jsx";
import Homepage from "@/pages/HomePage.jsx";
import CompleteProduct from "@/modules/Product/CompleteProduct.jsx";
import LayoutHeader from "@/modules/Layout/LayoutHeader.jsx";
import UserManagement from "@/modules/UserManagement/UserManagement.jsx";
import Cart from "@/pages/Cart.jsx";
import {orderDetailApis} from "@/apis/orderDetailApis.js";

const router = createBrowserRouter([
    {
        element: <LayoutHeader/>,
        errorElement: <div>404</div>,
        children: [
            {
                path: path.HOME,
                element: <Homepage/>
            },
            {
                path: '/products/:productId',
                loader: async ({params}) => {
                    return productApis.getProductByProductId(params.productId);
                },
                element: <CompleteProduct/>
            }
            ,
            {
                path: '/account',
                element: <UserManagement/>
            }, {
                path: '/cart/:cartId',
                loader: async ({params})=>{
                    return orderDetailApis.getAllOrderDetailsByCart(params.cartId);
                },
                element:<Cart/>
            }
        ]
    },


]);

export {router}