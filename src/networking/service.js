// import {postData} from './new';
import {api} from './axiosApiReq';

export default {
  getAnswers(url, payload) {
    console.log('reached here 1');

    // eslint-disable-next-line no-sequences
    return api(url, 'get', payload);
  },
};
