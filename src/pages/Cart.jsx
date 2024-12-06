import CartMenu from "@/modules/Cart/CartMenu.jsx";
import {useLoaderData} from "react-router-dom";

export default function Cart() {

    const orderDetails = useLoaderData();

    return (
        <CartMenu orderDetails={orderDetails}/>
    );
};