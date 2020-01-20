import React from 'react';
import {Link} from 'react-router-dom'

class Header extends React.Component{

    render(){

        return(
            <nav className="navbar navbar-expand-md bg-success navbar-dark">
            
         
         <li className="navbar-brand ml-4 mr-5" style={{fontSize:'1.6rem'}}><Link to={{pathname:'/'}} className='text-white'><i className="fas fa-utensils"></i> Recipe App</Link></li>

         
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
           <span className="navbar-toggler-icon"></span>
         </button>

          
         <div className="collapse navbar-collapse" id="collapsibleNavbar">
         
          <li className="navbar-brand">
          <Link to={{pathname:'/'}} className='text-white ml-3 hoverpath' style={{fontSize:'1.3rem'}}><i className="fas fa-home"></i> Home</Link>
           </li>
        <li className="navbar-brand">
        <Link to={{pathname:'/Favorite'}} className='text-white ml-3 mb-0 hoverpath' style={{fontSize:'1.3rem'}}> <i className="fas fa-star"></i> Favorite Recipes</Link>
          </li>
          <li className="navbar-brand ">
          <Link to={{pathname:'/MyRecipes'}} className='text-white ml-3 mb-0 hoverpath' style={{fontSize:'1.3rem'}} ><i className="fas fa-clipboard-list"></i> My Recipes</Link>
          </li>
          <li className="navbar-brand ">
          <Link to={{pathname:'/AddRecipes'}} className='text-white ml-3 mb-0 hoverpath' style={{fontSize:'1.3rem'}}><i className="fas fa-plus"></i> Add Recipes </Link>
          </li>
          

    
  </div>
</nav>
        );
    }
}

export default Header
