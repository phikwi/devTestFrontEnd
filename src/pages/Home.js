
import '../App.css';
import React,{Component} from 'react';
import axios from "axios";
import ConditionCard from '../components/ConditonCard'
import Nav from '../components/Nav'

class Home extends Component {

       
  constructor(props) {
    super(props);
  
    this.state = {

       conditions:[],
       username:null,
       navToggleClass:null,
       navFormClass:"hide-nav-form"
       

    };
  
    this.setData = this.setData.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
     this.searchConditions= this.searchConditions.bind(this)
  }


 setData(){
  
   axios.get("https://skincitytest.herokuapp.com/allconditions").then((response)=>{

      this.setState({conditions:[...response.data]})
    

   })
    

 }

 deleteCondition(id){

     console.log(id + ": " + this.state.username)
     axios({
      method :"delete",
     data :{
     condition_id:id, 
     username:this.state.username   
     },
       withCredentials:true,         
     url:"/deletecondition"
   }).then((response)=>{       
    
      if(response.data==="Condition Removed"){
           this.setData()
      }


   }) 
     

 }

 searchConditions(){
     
  axios({
    method :"post",
   data :{
  
   username:this.state.username   
   },
     withCredentials:true,         
   url:"/myconditions"
 }).then((response)=>{       
  
    if(response.data){
      this.setState({conditions:[...response.data]})
      this.setState({navToggleClass:null})
      this.setState({navFormClass:"hide-nav-form"})
    }
    else{

      console.log("NO DATA")
    }


 }) 
   


 }
  
  toggleNav(){
    
    console.log("nav")
       if(this.state.navToggleClass===null){

           this.setState({navToggleClass:"nav-bar-toggle"})
           this.setState({navFormClass :"show-navform"})
       }
       else if(this.state.navToggleClass==="nav-bar-toggle"){
                
           this.setState({navToggleClass:null})
           this.setState({navFormClass:"hide-nav-form"})
  
       }
      

  }

 componentDidMount(){
     
  this.setData()

 }

 render(){
   
    if(this.state.conditions.length < 1){
         
       return(
         
        <div className="container" >
            <Nav  
           nav1={"All Conditions"}
           nav2={"My conditions"}
           nav3={ `Add Condition`} 
           logo={<i class="fas fa-plus-square fa-lg plus-icon"></i>}
           myConditionsClick={this.toggleNav}
           navToggle ={this.state.navToggleClass}
           navForm={this.state.navFormClass}
           enterUser ={e =>this.setState({username:e.target.value})}
           search = {this.searchConditions}
           showAll = {this.setData}
         /> 

           <h5> No  records found  please adjust search queries or create new ones !!!</h5> 
         </div>   
     
               
          
       )
       
    }
    return (  
      
      <div className="container" >  
     
         <Nav  
           nav1={"All Conditions"}
           nav2={"My conditions"}
           nav3={ `Add Condition`} 
           logo={<i class="fas fa-plus-square fa-lg plus-icon"></i>}
           myConditionsClick={this.toggleNav}
           navToggle ={this.state.navToggleClass}
           navForm={this.state.navFormClass}
           enterUser ={e =>this.setState({username:e.target.value})}
           search = {this.searchConditions}
           showAll = {this.setData}
         /> 
        <div className="row  conditions-row"> 

           {
             this.state.conditions.map( condition=>(
                           
              <div className="col-lg-4 col-sm-12 card-box">    
              <ConditionCard 
                 title={condition.title}
                 desc={condition.description}
                 image_url={condition.image_url}                
                 deleteCondition={()=>{this.deleteCondition(condition.condition_id)}} 
                 getUser={e =>this.setState({username:e.target.value})}
                 id={condition.condition_id} 
              /> 
           </div> 
         

             ))
       
           }
           
        </div>
           
      </div>
    );
  }
}
export default Home;
