import React from 'react';
import Header from './Header';

class MyRecipes extends React.Component{


   render(){
       const getRecipesLocalStorage = JSON.parse(localStorage.getItem('myRecipes'));
       
       return(
        <div>
            <Header/>
            <div className='text-center container mt-5'>
            <h1 className='text-success font-weight-bold text-center mt-5'>My Recipes  <i className="fas fa-clipboard-list"></i></h1> 
            <hr style={{width:'5%',border: '2px solid #28a745'}} className='mb-5'/>  
            <p className="font-weight-bold lead mb-2">The recipes you made are pearls!</p>
            <p className="font-weight-bold lead mt-0 pt-0">Dont waste your time and start cooking</p>
            <div className="row">
                {getRecipesLocalStorage !== null ? getRecipesLocalStorage.map(r=>{
                    return(
                        <div className="col-md-6"  key={r.name} style={{marginBottom:"2rem",marginTop:"2rem"}}>
                            <div className="card" style={{width: '100%', height:'100%'}} >
                            <img className="card-img-top" src={r.picture} alt={r.name} height='300px' />
                            <div className="card-body">
                             <h4 className="card-title font-weight-bold text-success">{r.name}</h4>
                             <p className="card-text">{r.description.length<62?r.description:r.description.substring(0,62) + '..'}</p>
                               <a href={r.puburl} role="button" target='_blank' rel="noopener noreferrer"  className="btn btn-outline-success mr-1">{r.pubname} <i className="fas fa-mouse"></i></a>
                               <button className="btn btn-danger" onClick={()=>{
                                
                                let i = getRecipesLocalStorage.findIndex(re=>re.name === r.name)
                                if(i!==-1){
                                    getRecipesLocalStorage.splice(i,1);
                                    localStorage.setItem('myRecipes',JSON.stringify(getRecipesLocalStorage));
                                    window.location.reload();
                                }

                              }}>Delete <i className="fas fa-trash"></i></button>


                            </div>

                            </div>
                        </div>
                    );
                }):<p className="font-weight-bold text-center">Start add recipes! </p>}
            </div>
                
            </div>

        </div>
       );
   }
}

export default MyRecipes;