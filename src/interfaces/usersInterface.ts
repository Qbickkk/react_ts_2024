export interface IUsers {
    users: IUser[]
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: 50,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup:string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        "color": string,
        "type": string
    }
}