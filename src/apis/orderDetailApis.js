import {backEndUrl} from "@/constants/index.ts";


export const orderDetailApis = {
    async getAllOrderDetailsByCart(cartId) {
        try {
            const response = await fetch(`${backEndUrl}orderDetails/cart/${cartId}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching orderDetail:', error);
        }
    },
    async createOrderDetail(cartId, productId, price) {
        try {
            const response = await fetch(`${backEndUrl}orderDetails/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: productId,
                    cartId: cartId,
                    price: price,
                })
            });
            return response.ok;
        } catch (error) {
            console.error('Error during add to cart:', error);
        }
    },

    async deleteOrderDetail(orderDetailId) {
        try {
            const response = await fetch(`${backEndUrl}orderDetails/${orderDetailId}`, {
                method: 'DELETE',

            });
            return response.ok;
        } catch (error) {
            console.error('Error during delete order detail:', error);
        }
    },

}