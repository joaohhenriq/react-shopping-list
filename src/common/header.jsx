import React from 'react'
import AppBar from '@material-ui/core/AppBar'

export default props => (
    <AppBar position='static' color='primary'>
        <div className='header'>
            <p className='title'>Shopping List</p>
        </div>
    </AppBar>
)