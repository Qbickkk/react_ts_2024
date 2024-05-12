import axios, {AxiosResponse} from "axios";
import {IRecipes} from "../models/recipeModel";



let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type' : 'application/json'
    }
})

const getAllRecipes = ():Promise<AxiosResponse<IRecipes>> => {
   return axiosInstance.get('/recipes')
}

export {
    getAllRecipes
}