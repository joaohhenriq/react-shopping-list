import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import { Creators as FormAction } from '../store/actions/formAction'

const ListItemFooter = props => (
    <div className='list-item-footer'>
        <div className='list-card-footer-action'>
            <FontAwesomeIcon
                onClick={() => props.startUpdate(props.list, props.item)}
                icon={faPen} color='#2aa4f5' size='1x' />
            <FontAwesomeIcon
                onClick={() => props.deleteProduct(props.item.id)}
                icon={faTrash} color='#e95c5c' size='1x' />
        </div>
        <p>Total: R$ {props.item.total}</p>
    </div>
)

const mapStateToProps = state => ({ product: state.form.productToUpdate })
const mapDispatchToProps = dispatch => bindActionCreators(FormAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListItemFooter)