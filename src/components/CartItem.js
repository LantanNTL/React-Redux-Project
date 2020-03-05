import React, { Component } from 'react';
import * as Message from './../constants/Message';

class CartItem extends Component {

    render() {
        var {item} = this.props;
        // console.log (item);
        var {quantity} = item;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image} alt={item.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong> {item.product.name} </strong>
                    </h5>
                </td>
                <td> {item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty"> {quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity(item.product, item.quantity -1)}
                        >
                            <div>—</div>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick = { () => this.onUpdateQuantity(item.product, item.quantity + 1)}
                        >
                            <div>+</div>
                        </label>
                    </div>
                </td>
                <td> {this.showSubTotal(item.product.price, item.quantity)} $ </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick = {()=> this.onDelete(item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }

    // Thực hiện cập nhập số lượng sản phẩm trong giỏ hàng
    onUpdateQuantity = (product, quantity) => {
        var {onUpdateProductInCart, onChangeMessage} = this.props;
        if(quantity > 0){
            onUpdateProductInCart(product, quantity);
            onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

    // Thực hiện xóa sản phẩm ra khỏi giỏ hàng
    onDelete = (product) =>{
        this.props.onDeleteProductInCart(product);
        this.props.onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    // Thực hiện tính tổng tiền mua hàng cho từng sản phẩm
    showSubTotal = (price, quantity) => {
        return price * quantity;
    }
}

export default CartItem;