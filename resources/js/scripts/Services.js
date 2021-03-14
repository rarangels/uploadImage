import axios from 'axios';

export default {
    doPost(url, data, config = {}) {
        return axios.post(url, data, config)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                return error;
            });
    },
}
