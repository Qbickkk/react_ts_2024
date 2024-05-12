import {FC, useEffect, useState} from "react";
import {Recipe} from "../recipe/Recipe";
import {IRecipeProps} from "../../models/recipeModel";
import {getAllRecipes} from "../../services/recipes.api.service";

const Recipes: FC = () => {

    const [recipes, setRecipes] = useState<IRecipeProps[]>([]);

    useEffect(() => {
        getAllRecipes().then(value => setRecipes(value.data.recipes))
    }, []);


    return (
        <div>
            {recipes.map(({id,name,cuisine, instructions, mealType, image}:IRecipeProps)=><Recipe key={id} name={name} cuisine={cuisine} instructions={instructions} mealType={mealType} image={image}/>)}
        </div>
    );
};

export {Recipes};