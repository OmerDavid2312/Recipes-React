import React from 'react';
import Header from './Header';



class Recipe extends React.Component{
    
    state = {
        activeRecipe : {}
    }

    componentDidMount = () => { //init when component load
        
        this.setState({activeRecipe : this.props.location.state.recipe});
        //console.log(this.props.location.state.recipe);
    }

    render()
    {
        console.log(this.state.activeRecipe);
        const recipe = this.props.location.state.recipe;
        
        

        
        return(
            <div>
            <Header/>
            <div className="container text-center mt-5" key={recipe.uri}>
                <div className="row mb-3">

                <div className="col h-40">
                <img src={recipe.image} style={{weight : '300x', height : '400px'}} alt={recipe.label}/>

                 </div>

                 <div className="col h-40 text-center">
                 <h1 className="display-5 text-success mt-5 mb-4">{recipe.label}</h1>
                 {recipe.healthLabels.map(h=><span key={h} className="badge badge-pill badge-dark mr-1 ml-1">{h}</span>)}
                 <br/>
                 <span className="badge badge-success font-weight-bold mt-4" style={{fontSize: '1.3rem'}}>&nbsp;{Math.round(recipe.calories)} Kcal <i className="fas fa-carrot">  </i> &nbsp;</span>
                 <br/>
                 <span className="badge badge-success font-weight-bold mt-3 mb-3" style={{fontSize:'1.3rem'}}>{recipe.totalTime} Minutes <i className="far fa-clock"></i></span>
                <br/>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer"> <span className='badge badge-success font-weight-bold' style={{fontSize:'1.3rem'}}>{recipe.source} <i className="fas fa-mouse"></i></span></a>


                
                 </div>


                </div>
                    <hr className='mt-3'/>
                    <h2 className='text-success font-weight-bold text-center mt-5'>Ingredients  <i className="fas fa-list-ul"></i></h2>
                    <hr style={{width:'5%',border: '2px solid #28a745'}}/>
                    <ul className="list-group list-group-flush mb-5">
                    {recipe.ingredientLines.map((i,index)=><li className='' style={{fontSize:'1.2rem'}} key={index}>{i}</li>)}
                    </ul>

               
              

                    
            </div>
            </div>

         );
    }
}

export default Recipe;