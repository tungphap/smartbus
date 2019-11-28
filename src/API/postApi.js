import {
    AsyncStorage,
    ToastAndroid,
    NetInfo
} from 'react-native';
var timeoutFetch;
const postApi = async (url, hashtoken, params) => {
    try {
        const net = await NetInfo.getConnectionInfo();
        if (net.type === 'none') return { connection: false, a: 1 };
        timeoutFetch = setTimeout(() => {
            return { connection: false };
        }, 20000);
        let headers = {
            'Token': hashtoken,
            'Content-Type': 'application/json'
        };

        // console.log('url', url);
        // console.log('params', params);
        // console.log('headers', headers);

        let response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(params)
        });
        // console.log('response',response);
        if (response.status === 200) {
            clearTimeout(timeoutFetch);
            const res = await response.json();
            return res;
        }
        if (response.status !== 200) {
            return { connection: false, a: 2 };
        }
    } catch (error) {
        // console.log(error);
        return { connection: false, a: 3 };
    }
};
export default postApi;
