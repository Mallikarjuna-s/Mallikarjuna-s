// commomn api reqest with out using any libraryes

export const api = (url, methode, payload) => {
    const header = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
    const options = {
        methode: methode,
        header: header,
        body: payload,
    }

    let fetchresponse = fetch(url, options)

    return new Promise((resolve, reject) => {
        console.log('reached here 2')
        return fetchresponse
            .then(fetchresponse => {
                console.log('reached here 3')
                if (fetchresponse.status === 200) {
                    resolve(fetchresponse.json())
                    console.log('reached here 3')
                } else if (fetchresponse.status === 400) {
                    resolve(fetchresponse)
                } else {
                    reject('no data found')
                }
            })
            .catch(error => {
                if (error.response) {
                }
            })
    })
}
