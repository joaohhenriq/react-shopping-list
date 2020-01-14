import React from 'react'

import './home.css'
import NewList from './newList'
import List from './list'

export default props => (
    <div className='page-container'>
        <NewList />
        <List />
    </div>
)