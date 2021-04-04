import React from "react";
import CartItem from "./CartItem2_useofprops";

// class Cart extends React.Component{
//     render(){

//         return(
//         <div className="cart">
//             <CartItem qty={1} price={99} title={"watch"} img={''} />
//         </div>
//         );
//     }
// }

class Cart extends React.Component{
constructor(){
    super();
    this.state = {
        products: [
            {
                price: 50,
                title:'clothes',
                qty:12,
                img:'',
                id:1

            },
            {
                price: 120,
                title:'phone',
                qty:98,
                img:'',
                id:2

            },
            {
                price: 4560,
                title:'laptop',
                qty:45,
                img:'',
                id:3
            }
        ]
    }
}

    render(){

        const {products} = this.state;
        return (
        <div className="cart">
            {
                products.map((product)=>{
                    //return <CartItem price={product.price} title={product.title} qty={product.qty} img={product.img} />

                    return <CartItem product={product} key={product.id} />

                })
            }

        </div>
        )
    }
}



export default Cart;