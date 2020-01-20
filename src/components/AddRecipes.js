import React from 'react';
import Header from './Header';
import swal from 'sweetalert';

class AddRecipes extends React.Component{

    
    addRecipe = (e) =>{
        e.preventDefault();
        const recipeName = e.target.elements.title.value;
        const desc = e.target.elements.desc.value;
        const pic = e.target.elements.pic.value;
        const publishername = e.target.elements.publishername.value;
        const publisherurl =  e.target.elements.publisherurl.value;
        if (recipeName.trim() === '' || desc.trim() === '' || pic.trim() ==='' || publishername.trim()==='' || publisherurl.trim() ==='')
        {
            alert('Fill all inputs');
            return;
        }
        const recipeObj = 
        {
            name : recipeName,
            description : desc,
            picture : pic,
            pubname : publishername,
            puburl : publisherurl
        };
        //console.log(recipeObj);
        if(localStorage.getItem('myRecipes')==null)
        {
            let startArray = [];
            startArray.push(recipeObj);
            localStorage.setItem('myRecipes',JSON.stringify(startArray));
        }
        else // update localstorage
        {
            
            let array =  JSON.parse(localStorage.getItem('myRecipes'));
            array.push(recipeObj);
            localStorage.setItem('myRecipes',JSON.stringify(array));
        }

        //reset values
        e.target.elements.title.value = '';
        e.target.elements.desc.value = '';
        e.target.elements.pic.value = '';
        e.target.elements.publishername.value ='';
        e.target.elements.publisherurl.value ='';
        swal({
            title:"Good Job!",
            text:"Now you need to start cooking this recipe",
            icon: "success",
          });


    }


    render(){
        return(
            <div>
            <Header/>
            <div className='text-center container mt-5'>
            <h1 className='text-success font-weight-bold text-center mt-5'>Add Your Recipes  <i className="fas fa-plus"></i></h1>
            <hr style={{width:'5%',border: '2px solid #28a745'}} className='mb-5'/>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5 ">

            <form onSubmit={this.addRecipe}>
            <div className="form-group mt-3">     
            <label  className="font-weight-bold text-success" style={{fontSize : '1.2rem'}}>Recipe Title</label>    
            <input type="text"  className="form-control form-rounded text-success text-center" name="title"  />
            </div>
            <div className="form-group">
            <label className="font-weight-bold text-success" style={{fontSize : '1.2rem'}}>Description</label>
            <input type="text"  className="form-control form-rounded text-success text-center" name="desc" />
            </div>
            <div className="form-group">
            <label  className="font-weight-bold text-success" style={{fontSize : '1.2rem'}}>Picture</label>
            <input type="text"  className="form-control form-rounded text-success text-center" name="pic" />
            </div>  
            <div className="form-group">
            <label className="font-weight-bold text-success" style={{fontSize : '1.2rem'}}>Publisher Name</label>   
            <input type="text"  className="form-control form-rounded text-success text-center" name="publishername" />
            </div> 
            <div className="form-group">
            <label className="font-weight-bold text-success" style={{fontSize : '1.2rem'}}>URL</label>
            <input type="text"  className="form-control form-rounded text-success text-center" name="publisherurl"/>
            </div> 
            <button className="btn btn-lg btn-success form-rounded mt-2" >Add Recipe</button>
            </form>
            </div>
            </div>
            </div>
        );
    }
}

export default AddRecipes;