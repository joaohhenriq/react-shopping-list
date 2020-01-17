import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { InputAdornment } from '@material-ui/core';

import { Creators as FormAction } from '../store/actions/formAction'

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

    // handles component update after it has already been mounted
    componentDidUpdate(prevProps) {
        if (this.props.form.action === 'update'
            && prevProps.form.productToUpdate !== this.props.form.productToUpdate) {

            const { product, quantity, unit, price } = this.props.form.productToUpdate
            this.setState({
                list: this.props.form.listToUpdate,
                product,
                quantity,
                unit,
                price,
                showErrors: false,
            })
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        const { list, product, quantity, unit, price } = this.state
        if (!list || !product || !quantity || !unit) {
            this.setState({ showErrors: true })
        } else {
            this.props.form.action === 'new'
                ? this.addItem(list, product, quantity, unit, price)
                : this.updateItem(list, product, quantity, unit, price)
        }
    }

    addItem = (list, product, quantity, unit, price) => {
        this.props.addProduct({ product, quantity, unit, price }, list)
        this.clearState()
    }

    updateItem = (list, product, quantity, unit, price) => {
        const { id, checked } = this.props.form.productToUpdate
        this.props.updateProduct({ product, quantity, unit, price, id, checked }, list)
        this.clearState()
        this.props.finishUpdate()
    }

    clearState = () => {
        this.setState({
            product: '',
            quantity: '',
            unit: '',
            price: '',
            showErrors: false,
        })
    }

    render() {
        if (!this.props.showForm) {
            return <div></div>
        } else
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
                        <Button variant='outlined' color='secondary' onClick={this.handleSubmit}>Save</Button>
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

const mapStateToProps = (state, ownProps) => ({
    form: state.form,
    showForm: state.form.action === 'update' || ownProps.url === 'new'
})
const mapDispatchToProps = dispatch => bindActionCreators(FormAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form)