import {FC, useEffect, useState} from "react";
import {IRecipeProps, Recipe} from "../recipe/Recipe";

const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(value => value.json())
            .then(({recipes}) => {
                setRecipes(recipes)
            })
    }, []);


    return (
        <div>
            {recipes.map(({id,name,cuisine, instructions, mealType, image}:IRecipeProps)=><Recipe key={id} name={name} cuisine={cuisine} instructions={instructions} mealType={mealType} image={image}/>)}
        </div>
    );
};

export {Recipes};