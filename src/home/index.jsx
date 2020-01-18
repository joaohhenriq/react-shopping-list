import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './home.css'
import NewList from './newList'
import List from './list'
import { getListTotal, getOpenedItems, getClosedItems } from '../store/reducers/listReducer'
import { Creators as ListActions } from '../store/actions/listAction'

const Home = props => (
    <div className='page-container'>
        <NewList newList={props.newList} />
        {props.list.items.length > 0 &&
            <List
                list={props.list.list}
                total={props.total}
                openedItems={props.openedItem}
                closedItems={props.closedItems}
                date={props.date}
            />
        }

    </div>
)

const mapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state),
    openedItem: getOpenedItems(state),
    closedItems: getClosedItems(state),
    date: state.list.date
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)