import axios from "axios";

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: { "API-KEY": "b5d52611-1432-460b-9a90-98ff97a4eb1b" },
});

export const api = {
	async getAuth() {
		return (
			await instance.get("auth/me", {
				withCredentials: true,
			})
		).data;
	},
	async follow(id) {
		return (
			await instance.post(
				`follow/${id}`,
				{},
				{
					withCredentials: true,
				}
			)
		).data;
	},

	async getProfile(id) {
		const data = {
			...(await instance.get(`/profile/${id}`)).data,
			status: (await instance.get(`/profile/status/${id}`)).data,
		};

		return data;
	},

	async unfollow(id) {
		return (
			await instance.delete(`follow/${id}`, {
				withCredentials: true,
			})
		).data;
	},

	async getUsers(usersCount, currentPage) {
		return (
			await instance.get(`users?count=${usersCount}&page=${currentPage}`, {
				withCredentials: true,
			})
		).data;
	},

	async getFriends(friendsCount, currentPage) {
		return (
			await instance.get(
				`users?count=${friendsCount}&page=${currentPage}&friend=true`,
				{
					withCredentials: true,
				}
			)
		).data;
	},

	async getFavoriteFriends() {
		return (
			await instance.get("users?count=6&page=1&friend=true", {
				withCredentials: true,
			})
		).data;
	},

	async loginApi(email, password, rememberMe) {
		return (
			await instance.post(
				"/auth/login",
				{ email, password, rememberMe },
				{
					withCredentials: true,
				}
			)
		).data;
	},
	async logoutApi() {
		return (
			await instance.delete("/auth/login", {
				withCredentials: true,
			})
		).data;
	},
	async newStatus(newStatus) {
		return (
			await instance.put(
				"/profile/status",
				{
					status: newStatus,
				},
				{
					withCredentials: true,
				}
			)
		).data;
	},
	async updateContacts(newProfileData) {
		return (
			await instance.put("/profile", JSON.stringify(newProfileData), {
				withCredentials: true,
				headers: {
					"Content-Type": "application/json",
				},
			})
		).data;
	},
	async updatePhoto(photo) {
		const formData = new FormData();

		formData.append("image", photo);
		return (
			await instance.put("/profile/photo", formData, {
				withCredentials: true,
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
		).data;
	},
	async getDialogs() {
		return (
			await instance.get("dialogs", {
				withCredentials: true,
			})
		).data;
	},
	async getMessagesWith(id, page, count = 10) {
		return (
			await instance.get(`dialogs/${id}/messages?page=${page}&count=${count}`, {
				withCredentials: true,
			})
		).data;
	},
	async startChatting(userId) {
		return (
			await instance.put(`dialogs/${userId}`, {}, { withCredentials: true })
		).data;
	},
	async sendMessage(userId, message) {
		return (
			await instance.post(
				`dialogs/${userId}/messages`,
				{
					body: message,
				},
				{
					withCredentials: true,
				}
			)
		).data;
	},
	async getCaptcha() {
		return (
			await instance.get("security/get-captcha-url", {
				withCredentials: true,
			})
		).data;
	},
};
