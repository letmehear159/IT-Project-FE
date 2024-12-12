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
}