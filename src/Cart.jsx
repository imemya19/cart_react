import React from "react";
import CartItem from "./CartItem";

// class Cart extends React.Component{
//     render(){
//         return(
//         <div className="cart">
//             <CartItem/>
//             <CartItem/>
//             <CartItem/>

//         </div>
//         );
//     }
// }

class Cart extends React.Component{
    render(){
        const arr=[1,2,3,4,5];

        return(
        <div className="cart">
           {arr}
        <div>
        {
             arr.map((item)=>{
                 return item+5;
             })
        }
        </div>

        </div>
        );
    }
}



export default Cart;