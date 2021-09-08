// Codesandbox : https://codesandbox.io/s/recursion-update-objectstructure-imt5s
let user={

  name:"Mayur",
  address:{
    personal:{
      state:{
        city:"Ahmedabd"
      }
    },
    work:{
      state:"Gujarat"
    }
  }
}


const user_details=(obj,parent)=>{
  let updatedUser={};

  for(let key in obj ){
    if(typeof obj[key] === 'object'){
     updatedUser= {
       ...updatedUser,...(user_details(obj[key],parent+'_'+key))
     }

    }else{
    
        updatedUser[`${parent}_${key}`]=obj[key]
      
      
    }
  }

  return updatedUser
}

console.log(user_details(user,"user"))
