import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Link } from 'react-router-dom'

export default props => (
    <AppBar position='static' color='primary'>
        <div className='header'>
            <Link to='/'>
                <p className='title'>Shopping List</p>
            </Link>
        </div>
    </AppBar>
)