import {createBrowserRouter} from "react-router-dom";

const path = {HOME: '/', ABOUT: '/about', CONTACT: '/contact'}
import {Button} from '@/components/ui/button.jsx'
import {ThemeToggle} from "@/components/common/ThemeToggle/ThemeToggle.jsx";
import Homepage from "@/pages/HomePage.jsx";

const router = createBrowserRouter([
    {
        path: path.HOME,
        element: <Homepage/>,
        errorElement: <div>404</div>,
    },
]);

export {router}