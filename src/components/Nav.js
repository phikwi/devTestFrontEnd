import { Link } from "react-router-dom";


const Nav = (props) =>{

    return (

        <div className={`row nav-bar ${props.navToggle}`} >
           
           <div className=" col-lg-4 col-md-2 col-sm-12 col-xs-2">    
             <Link to="/">  <p className="logo" >Skin Conditions</p> </Link> 
           </div>
           <div className="col-lg-2 col-sm-12">
               
           <Link to="/"> <p className="nav-text" onClick={props.showAll} > {props.nav1} </p> </Link>

             
            </div>

           <div className="col-lg-2 col-sm-12">
               
               <p className="nav-text" onClick={props.myConditionsClick}> {props.nav2} </p>
                 
               <div className={`${props.navForm}`}>
           
                <input className="nav-input" placeholder ="owner username" onChange={props.enterUser} /> 
                 <button className="nav-butt" onClick={props.search}> Search </button>
             </div> 
       

           </div>
           <div className="col-lg-2 col-sm-4 ">
               
           <Link to="/add">   <p className="nav-text" onClick ={props.onClick} > {props.nav3} {props.logo} </p>  </Link> 
               

           </div>

            

        </div>
    )

}

export default Nav;