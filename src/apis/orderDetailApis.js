import {backEndUrl} from "@/constants/index.ts";


export const orderDetailApis={
   async getAllOrderDetailsByCart(cartId) {
        try {
            const response = await fetch(`${backEndUrl}orderDetails/cart/${cartId}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching orderDetail:', error);
        }
    },
}