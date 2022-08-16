class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            }
            resolve({name: "John", age: 18})
        },500);
    })
}

async function gettingUserName() {
    try {
        const result = await fetchingUserFromInternet(false);
        return result.name;
    } catch(error) {
        return error.message;
    }
}

gettingUserName()
.then((result) => console.log(result));