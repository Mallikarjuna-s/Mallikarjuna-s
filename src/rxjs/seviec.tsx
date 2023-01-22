import {Observable} from 'rxjs'
import axios from 'axios'

const observable$ = Observable.create(observer => {
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            observer.next(response.data)
            observer.complete()
        })
        .catch(error => {
            observer.error(error)
        })
})

export default observable$
