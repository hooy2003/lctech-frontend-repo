import axios from 'axios'

export const axiosDefaultHeader = {
	'X-Auth-Token': 'userToken',
	'x-version': 'userVersion',
	VersionType: 0,
	clientType: 1
}

const axiosGeneral = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 1000000,
	withCredentials: true,
	headers: axiosDefaultHeader
})

// axiosGeneral.interceptors.request
// axiosGeneral.interceptors.response

const HttpService = {
	post<T>(url: string, data: Record<string, T>): Promise<T> {
		return new Promise((resolve, reject) => {
			axiosGeneral({
				method: 'post',
				url,
				data: data
			})
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
	get<T>(url: string, data: Record<string, T>): Promise<T> {
		return new Promise((resolve, reject) => {
			axiosGeneral({
				method: 'get',
				url,
				params: data
			})
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
	put<T>(url: string, data: Record<string, T>): Promise<T> {
		return new Promise((resolve, reject) => {
			axiosGeneral({
				method: 'put',
				url,
				data: data
			})
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	},
	delete<T>(url: string, data: Record<string, T>): Promise<T> {
		return new Promise((resolve, reject) => {
			axiosGeneral({
				method: 'delete',
				url,
				data: data
			})
				.then((res) => {
					resolve(res.data)
				})
				.catch((err) => {
					reject(err)
				})
		})
	}
}

export default HttpService
