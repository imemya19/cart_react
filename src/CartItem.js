import React from 'react';

//class based component
class CartItem extends React.Component{
    //add a state to this component via a constructor
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
        //  this.state.qty++;   but this doesnt update in UI, so we have to use setstate function

        // ***FIRST WAY*****
        //   this.setState({
        //     qty: this.state.qty+=1
        //       });
        //     console.log('this state ', this.state);


        //***SECOND WAY, use this when previous state is required ****
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
         });
        }      

        decreaseQuantity=()=>{
            if(this.state.qty==0){
                return;
            }

            this.setState({
                 qty: this.state.qty-=1
             })
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
                    src="data:image/png;base64,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"                    className="action-icons" 
                    alt=""
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