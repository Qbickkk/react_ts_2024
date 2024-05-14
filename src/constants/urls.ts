const baseURL = 'https://dummyjson.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users:{
        base: users
    },
    posts:{
        byId: (userId:number)=>`${posts}/user/${userId}`
    }
}

export {
    baseURL,
    urls
}