// by using axios api reqest;
import axios from 'axios';
// import { BASEURL } from './urls';
// const timeOut = 10000;
// function baseAxios() {
//   const defaultHeaders = {
//     'Content-Type': 'application/json',
//     authorization: GLOBAL.REFRESH_TOKEN,
//     platform: Platform.OS,
//     appVersion: DeviceInfo.getVersion(),
//     'x-access-token': GLOBAL.GUEST_TOKEN,
//     'client-id': CONSTANTS.CLIENT_ID,
//   };
//   // console.log('defaultHeaders ' + JSON.stringify(defaultHeaders));
//   const axiosClient = axios.create({
//     baseURL: url.format(BASEURL),
//     headers: defaultHeaders,
//   });

//   axiosClient.defaults.timeout = timeOut;
//   return axiosClient;
// }

export const api = (url, methode, payload) => {
  const header = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const options = {
    url: url,
    methode: methode,
    header: header,
    body: payload,
  };
  // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  let fetchresponse = axios(options);

  return new Promise((resolve, reject) => {
    console.log('reached here 2');
    return fetchresponse
      .then(fetchresponse => {
        console.log('reached here 3');
        if (fetchresponse.status === 200) {
          resolve(fetchresponse.data);
          console.log('reached here 3');
        } else if (fetchresponse.status === 400) {
          resolve(fetchresponse);
        } else {
          reject('no data found');
        }
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  });
};
