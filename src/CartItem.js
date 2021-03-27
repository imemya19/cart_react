import React from 'react';

//class based component
class CartItem extends React.Component{
    //add a state to this component
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:0,
            img:'',
        }
    }
    //use arrow functions for default binding so that we can use 'this'
increaseQuantity=()=>{
   // console.log('test');
    this.state.qty++;
    console.log('this state ', this.state);

}

decreaseQuantity=()=>{
    // console.log('test');
     this.state.qty--;
     console.log('this state ', this.state);

 }
    render() {
        //include above state properties for ease of use in the component
        const{price,title,qty} = this.state;
        return (
            <div className="cart-item">
             <div className="left-block">
                <img style={styles.image} src="https://img.flaticon.com/icons/png/512/0/191.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" />
             </div>

             <div className="right-block">
                    <div style={{fontSize:50}}>{this.state.title}</div>
                    <div>{price}</div>
                    <div>Qty: {qty}</div>
                    <div className="cart-item-actions" >


{/* //attach an event listener */}
                   <img 
                   src="https://image.flaticon.com/icons/png/512/32/32339.png" 
                   className="action-icons" 
                   alt="increase"
                   onClick={this.increaseQuantity}
                   />
                   <img
                    src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1616839297~hmac=a6ce1e08dbfc8a67952db500566c7a5f" 
                    className="action-icons" 
                    alt="decrease"
                    onClick={this.decreaseQuantity}
                    />
                   <img 
                   src="data:image/jpeg;base64,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" 
                   className="action-icons" 
                   alt="delete"
                   />

                    </div>


             </div>
            </div>
        );
    }
}

//create an object styles to apply styles
const styles = {
    image:{
        height: 150,
        width: 350,
        borderRadius:4,
    }
}

//export the component
export default CartItem;