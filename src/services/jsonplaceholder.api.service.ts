import axios, {AxiosResponse} from "axios";
import {PostModel} from "../models/postModel";
import {CommentModel} from "../models/commentModel";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'content-type':'application/json'}
});

const requests = {
    posts:{
        getAllPosts: ():Promise<AxiosResponse<PostModel[]>> => {
            return axiosInstance.get('/posts');
        }
    },
    comments:{
        getAllCommentsOfSinglePost:(id:number):Promise<AxiosResponse<CommentModel[]>> => {
            return axiosInstance.get(`/comments?postId=${id}`)
        }
    }
}

export {
    requests
}