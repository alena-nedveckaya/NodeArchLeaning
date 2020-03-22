const backEndServer = 'http://localhost:4095';

export const saveInList = async ( body ) =>  {
    return await api({
        url: '/save',
        method: 'POST',
        body});

};

export const sendRequest = async (body) => {
    return await api({
        url: '/send',
        method: 'POST',
        body});
};

export const getRequestList = async () => {
    return await api({
        url: '/list',
        method: 'GET'
    })
};

export const deleteRequestFromList = async (data) => {
    console.log( 'data' , data)
    return await api({
        url: '/deleteItem',
        method: 'POST',
        body: data

    })
}


export  const api = async ({url, method, body}) => {
    try {
        const res = await (fetch(`${backEndServer}${url}`, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }));
        return res.json()
    }
    catch (e) {
        console.error('Error: ', e)
    }


};