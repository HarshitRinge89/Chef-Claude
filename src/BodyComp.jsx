import React from "react"
export default function BodyComp(){
    const [ingredients,setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
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
                    placeholder="e.g. oregano"
                    type="text"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}