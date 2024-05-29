const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';

const urls = {
    users:{
        base: users
    },
    posts:{
        byUserId:(userId:string)=>`${posts}/${userId}`
    }
}

export {
    baseURL,
    urls
}