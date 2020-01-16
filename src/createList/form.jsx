import React from 'react'

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { InputAdornment } from '@material-ui/core';


const units = ['kg', 'lt', 'un']

class Form extends React.Component {

    state = {
        list: '',
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErrors: false,
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state
        if (!list || !product || !quantity || !unit) {
            this.setState({ showErrors: true })
        } else {
            this.props.addProduct({ product, quantity, unit, price }, list)
            this.setState({
                product: '',
                quantity: '',
                unit: '',
                price: '',
                showErrors: false,
            })
        }
    }

    render() {
        return (
            <form className='form-container'>
                <div className='form-row'>
                    <TextField
                        name='list'
                        label="List"
                        value={this.state.list}
                        required
                        onChange={this.handleChange}
                        error={!this.state.list && this.state.showErrors}
                    />
                    <Button variant='outlined' color='secondary' onClick={this.handleSubmit}>Add</Button>
                </div>
                <div className='form-row'>
                    <TextField
                        name='product'
                        label="Product"
                        value={this.state.product}
                        required
                        error={!this.state.product && this.state.showErrors}
                        onChange={this.handleChange}
                    />
                    <TextField
                        name='quantity'
                        label="Quantity"
                        value={this.state.quantity}
                        required
                        error={!this.state.quantity && this.state.showErrors}
                        onChange={this.handleChange}
                    />
                    <TextField
                        name='unit'
                        label="Unit"
                        value={this.state.unit}
                        required
                        error={!this.state.unit && this.state.showErrors}
                        onChange={this.handleChange}
                    >
                        {units.map((option) => (
                            <MenuItem key={option}>{option}</MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        name='price'
                        label="Price"
                        value={this.state.price}
                        onChange={this.handleChange}
                        InputProps={{
                            startAdornment: <InputAdornment position='start'>R$</InputAdornment>
                        }}
                    />
                </div>
            </form>
        )
    }
}

export default Form