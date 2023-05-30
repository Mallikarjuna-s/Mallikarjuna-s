// import {postData} from './new';
import {api} from './axiosApiReq'

const BASE_URL = 'https://gorest.co.in/'
export default {
    getAnswers(url, payload) {
        console.log('reached here 1')

        // eslint-disable-next-line no-sequences
        return api(BASE_URL + url, 'get', payload)
    },
    updateUser(url, payload) {
        console.log('reached here 1')

        // eslint-disable-next-line no-sequences
        return api(BASE_URL + url, 'get', payload)
    },
}
