import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default class CartSummary extends Component {
    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Options - {props.cart.length}
                    </DropdownToggle>
                    <DropdownMenu right>
                        {props.cart.map(cartItem =>(
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                        ))}
                        <DropdownItem divider />
                        <DropdownItem>
                            Reset
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>
        )
    }
}
