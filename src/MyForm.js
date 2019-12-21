import React from 'react';
import './App.css';
import languageTranslation from "./libs/LanguageTranslation";
class MyForm extends React.Component{
    constructor(props){
        super(props); 
        this.mySelect = this.mySelect.bind(this);
        this.componentName="MyForm";
        this.defaultLanguage="EN";
    }
    mySelect = (event) =>{
        console.log(event.target.value);
        languageTranslation.change(this.componentName,event.target.value);
    }
    componentDidMount(){
        languageTranslation.change(this.componentName,this.defaultLanguage);
    }
    
    render(){ 

        return (
            <div className="App">
            <h1 id="hCL">Test change language</h1>
            <select onChange={this.mySelect}>
            <option value="EN">Eng</option>
             <option value="TH">ไทย</option>
             <option value="CN">中文語言</option>
            </select>
           
            <p id="pFirstName">First Name</p> 
            <input type="text" id="txtFirstName" ></input>
            <p id="pLastName">Last Name</p> 
            <input type="text" id="txtLastName" ></input>
            </div>
        );
    }
}
export default MyForm