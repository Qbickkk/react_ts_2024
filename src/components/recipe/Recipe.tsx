import React, {FC} from "react";
import {IRecipeProps} from "../../models/recipeModel";


export type IRecipeTypeProps = IRecipeProps & { children?: React.ReactNode }
const Recipe: FC<IRecipeTypeProps> = ({image, name, mealType, cuisine, instructions}) => {
    return (
        <div>
            <h2>{name}. {mealType}. {cuisine}.</h2>
            <img src={image} alt={name}/>
            <ul>
                {
                    instructions?.map((value, index) => <li key={index}>{value}</li>)
                }
            </ul>
        </div>
    );
};

export {Recipe};