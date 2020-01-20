import React from 'react';
let date = new Date();
let hour = date.getHours();
let blessing;
let searchSuggests;
if(hour>=7 && hour <=12)
{   
    blessing = 'Good Morning';
    searchSuggests = ['Egg','Salad','Toast','Shakshuka','Pancake']
}
else if(hour >=13 && hour <=16)
{
    blessing ='Good Afternoon';
    searchSuggests = ['Caesar salad','Roasted potatoes','Beef','Chicken','Sandwich'];
}
else if(hour >=17 && hour<=21)
{
    blessing ='Good Evening'
    searchSuggests = ['Fish','Pasta','Pizza','Rice','Burger']
}
else
{
    blessing ='Good Night'
    searchSuggests = ['Cake','Yougurt','Snack','Fruit','Milk']
}


const Form = props => (

    <div className="jumbotron text-center wallpaper " style={{height: '60vh'}}>
         <h1 className="mt-5 mb-2  text-success font-weight-bold ">{blessing} </h1>
         <p className="lead text-white font-weight-bold">We Want To Share With You Our Tastys Recipes!</p>
         <hr style={{border: '2px solid #28a745',width:'5%'}}/>
         <div className="container">
         <form onSubmit={props.getRecipe} className="mb-3">
         <div className='input-group mt-3'>
         <input type="text" name="recipeName" id="input" className="form-control font-weight-bold text-center" style={{fontSize:'1.4rem',color:'#28a745'}}></input>
         <div className="input-group-append">
         <button className="btn btn-lg btn-success"><i className="fas fa-search"></i> </button>
         </div>
         </div>
         
          </form>
        {searchSuggests.map((suggest,index)=>{return <span key={index} className='badge badge-pill badge-success mr-2 mb-1' style={{fontSize:'1.1rem',cursor :'pointer'}} onClick={()=>{document.getElementById('input').value = suggest}}>{suggest}</span>})}
         </div>


    </div>

  

);

export default Form;
