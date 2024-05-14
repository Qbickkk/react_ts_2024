import {FC} from "react";

import {IUser} from "../../../interfaces";

interface IProps {
    user: IUser
    lift?:(userId:number)=>void
}

const User:FC<IProps> = ({user, lift}) => {

    const {id,eyeColor,age,email, hair,bloodGroup,gender,height,image,firstName,lastName,maidenName,phone,password, weight, username, birthDate} = user;

    const handler = () => {
        lift && lift(id)
    }

    return (
        <>
            <h3>ID:{id} - Name: {firstName} - LastName: {lastName} - Username: {username}</h3>
                <li>email: {email}</li>
                <li>age: {age}</li>
                <li>birthDate: {birthDate}</li>
                <li>phone: {phone}</li>
                <li>maidenName: {maidenName}</li>
                <li>password: {password}</li>
                <li>gender: {gender}</li>
                <li>eyeColor: {eyeColor}</li>
                <li>bloodGroup: {bloodGroup}</li>
                <li>height: {height}</li>
                <li>weight: {weight}</li>
                <li>Hair Type: {hair.type}</li>
                <li>Hair Color: {hair.color}</li>
                <img src={image} alt={firstName}/>
                <div>
                    <button onClick={handler}>Show posts</button>
                </div>
            <hr/>
        </>
    );
};

export {User};