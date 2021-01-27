
import '../App.css';
import React,{Component} from 'react';
import axios from "axios";

import Nav from '../components/Nav'
class AddCondition extends Component {

        
    constructor(props) {
        super(props);
      
        this.state = {
    
           conditionTitle:null,
           conditionDescription:null,
           imageUrl:null,
           username:null
        };
        
       this.postCondition=this.postCondition.bind(this)
      }
      
      
  postCondition(){    
      axios({
       method :"post",
      data :{
      title:this.state.conditionTitle,
      description:this.state.conditionDescription, 
      image_url:this.state.imageUrl,
      username:this.state.username   
      },
             
      url:"https://skincitytest.herokuapp.com/createcondition"
    }).then((response)=>{       
     // this.setState({conditions:[...response.data]})
     
       if(response.data==="Condition Added"){
          this.props.history.push('/')
     }

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
                           <input className="form-input" type="text"  onChange ={ e => this.setState({conditionTitle:e.target.value})} />
                          <p className="condition-title"> Image url </p>
                            <input className="form-input" type="text"  onChange ={ e => this.setState({imageUrl:e.target.value})} />
                           <p className="condition-title"> Description </p>
                             <textarea  className="condition-desc-input"  onChange={ e => this.setState({conditionDescription:e.target.value})} >         
                             </textarea> 
                          <p className="condition-title"> Your Username </p>
                            <input className="form-input" type="text" onChange ={ e => this.setState({username:e.target.value})}  />
                          <button className="submit-button" onClick={this.postCondition} > Submit </button>
                
                    </div>

                      </div>


                 </div>
             
             </div>
              
          

         )
   
        

       }

}

export default AddCondition;