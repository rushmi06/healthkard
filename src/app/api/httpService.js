import axios from 'axios';

const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const joinURL = (base, url) => `${base}/${url}`;

class HttpService {
    constructor() {
        this.domain = 'http://192.168.0.103:3002';
        // this.domain = 'https://backend-green-tau.vercel.app/';
    }

    async request(url, method = 'POST', data = null) {
        url = joinURL(this.domain, url);
        const options = {
            headers: header,
            method,
            url,
        };
        if (data) {
            options.data = data;
        }
        try {
            const response = await axios(options);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch: ${error.message}`);
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