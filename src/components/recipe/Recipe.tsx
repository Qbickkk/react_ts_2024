import React, {FC} from "react";

export interface IRecipeProps {
    id?: number,
    name?: string,
    ingredients?: string[],
    instructions?: string[],
    prepTimeMinutes?: number,
    cookTimeMinutes?: number,
    servings?: number,
    difficulty?: number,
    cuisine?: string,
    caloriesPerServing?: number,
    tags?: string[],
    userId?: number,
    image?: string,
    rating?: number,
    reviewCount?: number,
    mealType?: string[]
}

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