import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../common/customCard'
import { Creators as FormActions } from '../store/actions/formAction'

const NewList = props => (
    <CustomCard link='#' action={() => props.startAdd(props.list)} containerClass='list-item'>
        <div className='new-item'>
            <p className='title'>New Product</p>
            <FontAwesomeIcon icon={faPlusCircle} color="#e4e4e4" size='5x' />
        </div>
    </CustomCard>
)

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)
export default connect(null, mapDispatchToProps)(NewList)