import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class ProductList extends Component {

    render() {
        return (
            <div>
                <h1 className="text-center text-danger">{this.props.info.title}-{this.props.currentCategory}</h1>
                <Table className="mt-5">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price Name</th>
                            <th>Quantity Per Unit</th> 
                            <th>Units In Stock</th> 
                            <th>Add To Cart</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                                <tr key={product.id} >
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td><Button onClick={() =>this.props.addToCart(product)} color="success" size="sm">Add</Button></td>
                                </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}
