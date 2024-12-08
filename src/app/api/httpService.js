import axios from 'axios';

const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const joinURL = (base, url) => {
    base = base.replace(/\/+$/, '');
    url = url.replace(/^\/+/, '');
    console.log(`${base}/${url}`)
    return `${base}/${url}`;
};

class HttpService {
    constructor() {
        this.domain = 'https://backend-green-tau.vercel.app';
        // this.domain = 'http://127.0.0.1:3002';

        this.axiosInstance = axios.create({
            baseURL: this.domain,
            withCredentials: true,
            headers: header
        });
    }

    async request(url, method = 'POST', data = null) {
        url = url.replace(/^\/+/, '');
        const options = {
            method,
            url,
        };
        if (data) {
            options.data = data;
        }
        try {
            const response = await this.axiosInstance(options);
            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(`Server error: ${error.response.status} - ${error.response.data}`);
            } else if (error.request) {
                throw new Error('No response received from server');
            } else if (error.code === 'ERR_NETWORK') {
                window.location.href = 'https://healthkard.in';
                throw new Error('Network error occurred');
            } else {
                throw new Error(`Request failed: ${error.message}`);
            }
        }
    }

    async post(url, data) {
        return this.request(url, 'POST', data);
    }

    async get(url, id) {
        if (id) {
            url = joinURL(url, id);
        }
        return this.request(url, 'GET');
    }

    async put(url, id, data) {
        url = joinURL(url, id);
        return this.request(url, 'PUT', data);
    }

    async delete(url, id) {
        url = joinURL(url, id);
        return this.request(url, 'DELETE');
    }
}

const httpService = new HttpService();
export default httpService;