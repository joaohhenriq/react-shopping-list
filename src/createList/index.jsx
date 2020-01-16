import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './list.css'

import Form from './form'
import ListItem from './listItem'
import { Creators as ListAction } from '../store/actions/listAction'

class CreateList extends React.Component {

    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    }

    render() {
        return (
            <div className='page-container'>
                <Form addProduct={this.addProduct} />
                <div className='list-items-container'>
                    {this.props.list.items.map(item =>
                        <ListItem
                            key={item.id}
                            item={item}
                            deleteProduct={this.props.deleteProduct}
                            toggleProduct={this.props.toggleProduct}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.list })
const mapDispatchToProps = dispatch => bindActionCreators(ListAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)