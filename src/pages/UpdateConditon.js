
import '../App.css';
import React,{Component} from 'react';
import axios from "axios";

import Nav from '../components/Nav'
class UpdateCondition extends Component {

        
    constructor(props) {
        super(props);
      
        this.state = {
           conditionId:this.props.match.params.id,
           conditionTitle:null,
           conditionDescription:null,
           imageUrl:null,
           username:null
        };
        
       this.updateCondition = this.updateCondition.bind(this)
      }
      
      
  updateCondition(){    
    axios({
     method :"put",
     data :{
     title:this.state.conditionTitle,
     description:this.state.conditionDescription, 
     image_url:this.state.imageUrl,
     username:this.state.username   
    },
     withCredentials:true,         
     url:`https://skincitytest.herokuapp.com/updatecondition/${this.state.conditionId}`
    }).then((response)=>{       
     // this.setState({conditions:[...response.data]})
     
     if(response.data==="Condition Updated"){
         this.props.history.push('/')
     }

    }) 
  }
  
  componentDidMount(){
     
    axios({
      method :"get",
      withCredentials:true,         
      url:`https://skincitytest.herokuapp.com/onecondition/${this.state.conditionId}`
     }).then((response)=>{      
           
      this.setState({conditionTitle:response.data[0].title})
      this.setState({conditionDescription:response.data[0].description})
      this.setState({imageUrl:response.data[0].image_url})
          
     }) 
   
  }
   
  render(){

         return(
            
            <div className="container" > 
               
                <Nav 
                    nav1={"Homepage"}
                    navForm={"hide-nav-form"}  
                /> 
                  
                 <div className="row">
                      <div className="col-lg-1 col-sm-12"  >

                      </div>
                      <div className="col-lg-10 col-sm-12">
                           
                    <div  className={"add-form"}>
                             <p className="condition-title"> Title </p>
                             <input className="form-input" type="text"  placeholder={this.state.conditionTitle} onChange={e => this.setState({conditionTitle:e.target.value})} />
                             <p className="condition-title"> Image url </p>
                             <input className="form-input" type="text"  placeholder={this.state.imageUrl}  onChange={e => this.setState({imageUrl:e.target.value})} />
                                <p className="condition-title"> Description </p>
                           <textarea  className="condition-desc-input"  placeholder={this.state.conditionDescription}  onChange={e => this.setState({conditionDescription:e.target.value})} >         
            
                            </textarea>
            
                        <p className="condition-title"> Your Username </p>
                         <input className="form-input" type="text" onChange={e => this.setState({username:e.target.value})}  />
                        <button className="submit-button" onClick={this.updateCondition} > Submit </button>
                
                </div>

                      </div>


                 </div>
             
             </div>
              
          

         )
   
        

       }

}

export default UpdateCondition;