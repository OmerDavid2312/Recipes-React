import React from 'react';
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

const Recipes = props => (

    <div className="recipesContainer">
        <div className="row">
        {props.results.map(r=>{
        return(
     <div className="col-md-4" key={r.recipe.url} style={{marginBottom:"2rem",marginTop:"2rem"}}>
         <div className="card" style={{width: '100%'}} >
            <img className="card-img-top recipesimgs" src={r.recipe.image} alt={r.recipe.label}/>
            <div className="card-body">
            <h5 className="card-title font-weight-bold text-success">
                {r.recipe.label.length<30? r.recipe.label: r.recipe.label.substring(0,30) + '..' }
            </h5>
            <p className="card-text">{r.recipe.source}</p>
              <button className="btn btn-outline-success font-weight-bold clicked mr-2">
              <Link className="text-success clickedlink" to={{
                  pathname:`/recipe/${r.recipe.uri.substring(52)}`,
                  state : {recipe : r.recipe}
                  }}>View Recipe</Link>

              </button>
              <button className="btn btn-success font-weight-bold" onClick={()=>{
                  const recipeObj = r;
                  if(localStorage.getItem('favorited')==null)
                  {
                      let startArray = [];
                      startArray.push(recipeObj);
                      localStorage.setItem('favorited',JSON.stringify(startArray));
                  }
                  else // update localstorage
                  {
                      
                      let array =  JSON.parse(localStorage.getItem('favorited'));
                      array.push(recipeObj);
                      localStorage.setItem('favorited',JSON.stringify(array));
                  }
                  
                  swal({
                    title: r.recipe.label+ " Added To Favorite",
                    icon: "success",
                  });
                  
              }}>Favorite <i className="far fa-star"></i></button>
            </div>
        </div>
     </div>
            
            
        
        );

    })}
        </div>

    </div>

    
);

export default Recipes;

