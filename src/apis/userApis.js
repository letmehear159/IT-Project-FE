import {backEndUrl} from "@/constants/index.ts";

export const userApis = {
    async login(username, password) {
        try {
            const response = await fetch(`${backEndUrl}auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.authenticated === true) {
                    localStorage.setItem('jwtToken', data.token);
                    localStorage.setItem('username', username);
                    return true;
                } else {
                    return false;
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    },
    async getUserByUsername(username) {
        try {
            const response = await fetch(`${backEndUrl}users/username/${username}`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error during get user by username:', error);
        }
    },
    async createUser(username, email, password) {
        try {
            const response = await fetch(`${backEndUrl}users/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        password: password,
                        email: email,
                    })
                });
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    },
    async getUserShippingAddress(username) {
        try {
            const response = await fetch(`${backEndUrl}customerShippings/user/${username}`);
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.error('Error fetching order:', error);
        }
    },
    async createShippingAddress(username, receiverName, phoneNumber, city, detailAddress) {
        try {
            const response = await fetch(`${backEndUrl}customerShippings/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username: username,
                        receiverName: receiverName,
                        phoneNumber: phoneNumber,
                        city: city,
                        detailAddress: detailAddress,
                    })
                });
            if (response.ok) {
                return response.json();
            }
        } catch (error) {
            console.error('Error fetching order:', error);
        }

    },
}