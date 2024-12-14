import {backEndUrl} from "@/constants/index.ts";


export const orderApis = {
    async getOrdersByUsername(username) {
        try {
            const response = await fetch(`${backEndUrl}orders/user/${username}`);
            return await response.json();
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    },
    async createOrder(username, customerName, shippingAddress, paymentMethod, shippingMethod, phoneNumber, orderDetailIds) {
        try {
            const response = await fetch(`${backEndUrl}orders/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    customerName: customerName,
                    shippingAddress: shippingAddress,
                    paymentMethod: paymentMethod,
                    shippingMethod: shippingMethod,
                    phoneNumber: phoneNumber,
                    orderDetailIds: orderDetailIds,
                })
            });
            return response.ok;
        } catch (error) {
            console.error('Error during add to cart:', error);
        }
    },
}