import { AsyncStorage, ToastAndroid, NetInfo } from 'react-native';

var timeoutFetch;
const getApi = async (url, partnerCode, companyId, hash) => {
    try {
        // alert(`${hash}`);
        // console.log('url', url);
        // console.log('hash', hash);
        // console.log('partnerCode', partnerCode);
        // console.log('companyId', companyId);
        const net = await NetInfo.getConnectionInfo();
        if (net.type === 'none') return { connection: false };
        timeoutFetch = setTimeout(() => {
            return { connection: false };
        }, 20000);
        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'partnerCode': partnerCode,
                'companyId': companyId,
                'Token': hash
            }
        });
        // console.log(response);
        //alert(`${JSON.stringify(response).toString()}`)
        if (response.status === 200) {
            clearTimeout(timeoutFetch);
            const res = await response.json();
            return res;
        } else {
            return { code: response.status };
        }
    } catch (error) {
        // console.log("net");
        return { connection: false };
    }
};
export default getApi;
