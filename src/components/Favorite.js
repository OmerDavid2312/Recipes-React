import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom'

class Favorite extends React.Component{

    render(){
        const getFavoritesLocalStorage = JSON.parse(localStorage.getItem('favorited'));

        return(
            <div>
                <Header/>
             <div className='text-center container mt-5'>
            <h1 className='text-success font-weight-bold text-center mt-5'>Favorite Recipes <i className="fas fa-star"></i></h1> 
            <hr style={{width:'5%',border: '2px solid #28a745'}} className='mb-5'/>  
            <p className="font-weight-bold lead mb-2">Here are your favorited recipes!</p>
            <p className="font-weight-bold lead mt-0 pt-0">Dont Worry, We will save it for you</p>
            <div className="row">
            {getFavoritesLocalStorage !==null ? getFavoritesLocalStorage.map(r=>{
        return(
     <div className="col-md-4" key={r.recipe.url} style={{marginBottom:"2rem",marginTop:"2rem"}}>
         <div className="card" style={{width: '100%'}} >
            <img className="card-img-top" src={r.recipe.image} alt={r.recipe.label}/>
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
              <button className="btn btn-danger" onClick={()=>{
                  let i = getFavoritesLocalStorage.findIndex(f=>f.recipe.label === r.recipe.label)
                   if(i!==-1){
                    getFavoritesLocalStorage.splice(i,1);
                    localStorage.setItem('favorited',JSON.stringify(getFavoritesLocalStorage));
                    window.location.reload();
                 }


              }}>Delete <i className="fas fa-trash"></i></button>
            </div>
        </div>
     </div>
            
            
        
        );

    }):<p className="text-center font-weight-bold">Go and favorite some recipes!</p>}
            </div>
            </div>
            </div>
        );
    }
}

export default Favorite;
