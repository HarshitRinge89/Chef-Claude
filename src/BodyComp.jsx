export default function BodyComp(){
    const ingredients = ["Chicken","Oregano","Tomatoes"]
    const ingredientsList = ingredients.map(ingredient =>(
        <li key={ingredient}>{ingredient}</li>
    ))
    function handleSubmit(event){
        event.preventDefault();
        const formData= new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(event.currentTarget)
        
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
                {ingredientsList}
            </ul>
        </main>
    )
}