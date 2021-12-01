import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';


function App() {

  const [foodsArr, setFoods] = useState(foods) //for listing original books
  const [foodsArrCopy, setFoodsCopy] = useState(foods) //copy of the previous so that we can filter it for search purposes
  const [showForm, setShowForm] = useState(false) //state to define the form behaviour
  const [totalData, setTotal] = useState([])

  function handleShowForm() {
    setShowForm(!showForm)
  }

  function handleSubmit(event){
    event.preventDefault()
    let newFoodie = {
          name: event.target.name.value,
          calories: event.target.calories.value,
          image: event.target.image.value
        }
        setFoods([newFoodie, ...foodsArr]) 
        setShowForm(false)  
  }

  function handleSearch(event){
    let searchedThings = event.target.value.toLowerCase()
    let filteredFoodies = foodsArr.filter((foodie) => {
      return foodie.name.toLowerCase().includes(searchedThings)
    })
    setFoodsCopy(filteredFoodies)
  }

  function addClick(foodie, quantity) {
    let totalFoodies = {
      name: foodie.name,
      quantity: quantity,
      calories: foodie.calories
    }
    setTotal([totalFoodies, ...totalData])
  }

  return (
    <div class="columns">
      <div class="column">
              
          {
            showForm ? <AddForm btnSubmit={handleSubmit}/> : <button onClick={handleShowForm}>Add foodie</button>
          }
          <br/>
          or 
          <Search btnSearch={handleSearch} />
          {
            foodsArrCopy.map((elem, i) => {
              return (
                <FoodBox key={i} foodie={elem} addClick={addClick}/>
              )              
            })            
          }          
        </div>
        <div class="column">
          <Total totalData={totalData} /> 
          
        </div>      
    </div>
  );
}

export default App;
