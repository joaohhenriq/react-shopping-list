import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import { InputAdornment } from '@material-ui/core';

import './list.css'

const units = ['kg', 'lt', 'un']

const CreateList = props => (
    <div className='page-container'>
        <form className='form-container'>
            <div className='form-row'>
                <TextField
                    name='list'
                    label="List"
                    value={''}
                    required
                />
                <Button variant='outlined' color='secondary'>Add</Button>
            </div>
            <div className='form-row'>
                <TextField
                    name='product'
                    label="Product"
                    value={''}
                    required
                />
                <TextField
                    name='quantity'
                    label="Quantity"
                    value={''}
                    required
                />
                <TextField
                    select
                    name='unity'
                    label="Unity"
                    value={''}
                    required
                >
                    {units.map((option) => (
                        <MenuItem key={option}>{option}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    name='price'
                    label="Price"
                    value={''}
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>R$</InputAdornment>
                    }}
                />
            </div>
        </form>
    </div>
)

export default CreateList