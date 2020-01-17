import React from 'react'

import CustomCard from '../common/customCard'

export default props => (
    <CustomCard action={props.newList} containerClass='new-list-container' link='/list'>
        <div>
            <p className='card-title'>Add new list</p>
        </div>
    </CustomCard>
)