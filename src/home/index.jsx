import React from 'react'
import { connect } from 'react-redux'

import './home.css'
import NewList from './newList'
import List from './list'
import { getListTotal } from '../store/reducers/listReducer'

const Home = props => (
    <div className='page-container'>
        <NewList />
        {props.list.items.length > 0 && <List list={props.list.list} total={props.total} />}

    </div>
)

const mapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state)
})
export default connect(mapStateToProps, null)(Home)