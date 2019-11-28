import CryptoJS from 'crypto-js';

//format number
export function format_number(value, dv = null) {
  return (value = Number(value)
    .toLocaleString()
    .split(',')
    .join('.'));
}

export function toTimeStamp(d) {
  var times = d.split(' ');
  var n = times[0].split('-');
  return n[2] + '-' + n[1] + '-' + n[0] + ' ' + times[1];
}
export function getDaytoTimeStamp(d) {
  var times = d.split(' ');
  var n = times[0].split('-');
  if( n[2] === undefined){
    return n[1] + '-' + n[0];
  }else {
    return n[2] + '-' + n[1] + '-' + n[0];
  }
}


export function getTimestamp(timestamp = null) {
  if (timestamp == null) timestamp = new Date().getTime();
  return parseInt(timestamp / 1000, 0);
}

//ma hoa du lieu
export function encrypt(data, key) {
  const value = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
  return value;
}

//giai ma hoa ~~
export function decrypt(data, key) {
  return JSON.parse(
    CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8)
  );
}

export function distance(lat1, lng1, lat2, lng2, unit = null) {
  // console.log(lat1, lng1, lat2, lng2);
  if (lat1 == lat2 && lng1 == lng2) return 0;

  var radlat1 = (Math.PI * lat1) / 180;
  var radlat2 = (Math.PI * lat2) / 180;
  var theta = lng1 - lng2;
  var radtheta = (Math.PI * theta) / 180;
  var dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) dist = 1;
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit == 'K') {
    dist = dist * 1.609344;
  }
  if (unit == 'N') {
    dist = dist * 0.8684;
  }
  return dist;
}

export function getCompany(pass, host) {
  if (host === 'https://beta.xebuytthongminh.vn') {
    switch (pass) {
      case 'nhatrang':
        return '19';

      case 'qnic':
        return '6';

      default:
        return 'No_Company';
    }
  } else {
    switch (pass) {
      case 'dfm':
        return '12';

      case 'nhatrang':
        return '19';

      default:
        return 'No_Company';
    }
  }
}