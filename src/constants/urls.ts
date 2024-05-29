const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base: users,
        byId: (id: string) => `${users}${id}`,
    },
    posts:{
        base: posts,
        byId: (id: string) => `${posts}${id}`,
    },
    comments:{
        base: comments,
        byId: (id: string) => `${comments}${id}`,
    }
};

export {
    baseURL,
    urls
}