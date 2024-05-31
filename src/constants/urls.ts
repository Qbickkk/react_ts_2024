const baseURL = 'https://jsonplaceholder.typicode.com/';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users:{
        base: users,
        byId: (id: number) => `${users}${id}`,
    },
    posts:{
        byUserId: (userId: string) => `${users}/${userId}${posts}`,
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