// console.log("hello world");

// To connect your javascript file with node like you want to see your code result
//  in you VS code terminal instead of open a browser and the console so you can connect your 
//  JS file with your terminal with node.JS
//  Node js is basically a run time environment it's not a library or something like that simple it's a run time
// environment which shows your code output in your IDE terminal
// So How to connect your file?
// Simple go to terminal and Write node and your file name.
// For example in my case: node index.js


// let's move further we Use redux so We create a Store first:
//I'm using bank example here but you can use any real world example it totally depends on you.


import {combineReducers, createStore} from "redux";
  //createStore is a function which we import from redux


// We created a store now we create a reducer
// Reducer is used to update the state 
// Here it takes two arguments State and action and action have type and payload so we type 
// like this {type,payload} instead of action BTW Both are correct if you action or 
// {type,payload}





// const cashDeposit = (state=initialValue,{type,payload}) =>{
//  if (type === "cashDeposit"){
//     return {cash: state.cash + payload}

//  }

//  return state

// }

// // const bankStore = createStore(cashDeposit)

// // bankStore.dispatch({type:"cashDeposit", payload:10000})

// // console.log(bankStore.getState());







// const withDraw = (state=initialValue,{type,payload})=>{
//     if (type === "withDraw"){

//         if(state.cash < payload){
//             return "no money"
//         }
//         else{
//              return{cash: state.cash - payload}
//         }
      
//     }
   
//     return state

// }


// // const bankStore = createStore(withDraw)
// // bankStore.dispatch({type:"WithDraw",payload:1000})
// // console.log(bankStore.getState());



// const showBalance= (state=initialValue,{type}) =>{
//      if(type === "showBalance"){
//         return state
//      }
//      return state
// }


// const merge = combineReducers({
//     cashDeposit:cashDeposit,
//     withDraw:  withDraw,
//     showBalance:showBalance
// })

// const bankStore = createStore(merge )
// bankStore.dispatch({type:"cashDeposit", payload:5})
// bankStore.dispatch({type:"WithDraw",payload:20})
// bankStore.dispatch({type:"showBalance"})
// console.log(bankStore.getState());



