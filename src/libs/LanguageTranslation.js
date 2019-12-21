import React from 'react';
class  languageTranslation extends React.Component{
    constructor(){

    }
    static change(component,language){
        fetch("http://localhost:3030/languageTranslation?componentName="+component+"&language="+language)
        .then(res => res.json())
        .then(
          (result) => {
            var lstObj = result.data;
            for(var i = 0;i <lstObj.length;i++){
                var obj = document.getElementById(lstObj[i].objectId);
                if(obj!=null){
                    obj.innerHTML=lstObj[i].text;
                }
                else{
                    console.log("Object id ("+lstObj[i].objectId+") is not found )");
                }
            }
          },
          (error) => {
            console.log("error:"+error);
          }
        )
    }
}
export default languageTranslation