const API_PATH = 'http://api.aiyep.com';

function _param(obj = {}) {
    let _ = encodeURIComponent
    return Object.keys(obj).map(k => `${_(k)}=${_(obj[k])}`).join('&')
}

function _networkDone(res) {
    if (!res['err_code']) {
        return res
    } else {
        return Promise.reject(res)
    }
}
function _networkFail(res) {
    console.log(res['status']);
    return Promise.resolve(res)
}
function _fetch(url, data, method) {
	    let map = {method:'POST'};
        let headers = {
            'Access-Control-Request-Headers':'X-Custom-Header',
            'Content-Type': 'text/plain',
            'User-Agent':'Mozilla/5.0',
            'client':'iphone',
            'lnglat':'1212,1212',
            'dataType':'JSON',
            'rtime':'1111111',
            'token':'1461',
        };
        map.headers = headers;
        map.follow =10;
        map.timeout = 8000;
        map.size = 0;
    return fetch(url, map)
}

export function RomoteAction({url, query, data, method = 'POST'}) {


    url = API_PATH + url + '?' + _param(query)
    console.log(url);
    let promise = _fetch(url, data, method)
    let success = _networkDone.bind(this)
    let failure = _networkFail.bind(this)

    return promise.then(resp => resp.ok ? resp.json().then(success) : failure(resp))
}
