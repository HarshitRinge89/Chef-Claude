import React from "react"
import ClaudeRecipe from "./ClaudeRecipe.jsx"
import { getRecipeFromMistral } from "./ai.js"
export default function BodyComp(){
    const [ingredients,setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    const [recipe,setRecipe] = React.useState("")
    const [loading,setLoading] = React.useState(false)
    async function getRecipe(){
        setLoading(true);
        const recipeMarkdown= await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
        setLoading(false);
    }
    function handleSubmit(event){
        event.preventDefault(); //to prevent page refresh
        const formElement=event.currentTarget
        const formData= new FormData(formElement)
        const newIngredient = formData.get("ingredient") 
        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
        formElement.reset()
    }
    return(
        <main>
            <form onSubmit={handleSubmit}className="ingredients-form">
                <input 
                    aria-label="Add ingredient"
                    placeholder="e.g. Oregano"
                    type="text"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length>0 ? <section className="ingredients-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                {ingredients.length>3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={getRecipe}>Get a recipe</button>
                    {loading && <p>Please wait,fetching data...</p>}
                </div>}
            </section>: null}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}