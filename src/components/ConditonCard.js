import './ConditionCard.css';
import { Link } from "react-router-dom";
const ConditionCard =(props) =>{
    return(
     <div> 
        <div className="condition-card"> 
             
             <img className="condition-img" alt={props.title} src={props.image_url}/>

            <p className="card-title" > {props.title} </p>
           <div className="descr-box"> <p className="card-desc" >  {props.desc} </p> </div> 
            
         
             <Link to={`/update/${props.id}`}>   <button onClick={props.onClick} className="controls"> Update </button> </Link> 
             <input type="text" className="username-input" placeholder="owner username"  onChange={props.getUser}/> 
             <button className="controls delete-butt" onClick={props.deleteCondition}>  Delete </button>


           

        </div>
          

  </div>      

    );

}

export default ConditionCard;