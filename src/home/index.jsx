import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './home.css'
import CustomCard from '../common/customCard'

export default props => (
    <div className='page-container'>
        <CustomCard containerClass='new-list-container'>
            <div>
                <p className='card-title'>Add new list</p>
            </div>
        </CustomCard>
        <CustomCard
            containerClass='list-container'
            footer={(
                <div className='list-footer'>
                    <p>01/01/2020</p>
                    <p>100.00</p>
                </div>
            )}
        >
            <div>
                <p className='card-title'>Month</p>
                <div className='list-card-body'>
                    <div className='list-card-item'>
                        <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
                        <p>1 item(s) left</p>
                    </div>
                    <div className='list-card-item'>
                        <FontAwesomeIcon icon={faCheck} size='sm' />
                        <p>2 item(s) bought</p>
                    </div>
                </div>
            </div>
        </CustomCard>
        {/* 

        <div className='list-container'>
            <Card className='card'>
                <CardActionArea className='card-action-area'>
                    <CardContent className='card-content'>
                        <div>
                            <p className='card-title'>Month</p>
                            <div className='list-card-body'>
                                <div className='list-card-item'>
                                    <FontAwesomeIcon icon={faShoppingBasket} size='sm' />
                                    <p>1 item(s) left</p>
                                </div>
                                <div className='list-card-item'>
                                    <FontAwesomeIcon icon={faCheck} size='sm' />
                                    <p>2 item(s) bought</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
                <Divider />
                <CardActions className='card-footer'>
                    <p>01/01/2020</p>
                    <p>100.00</p>
                </CardActions>
            </Card>
        </div> */}
    </div>
)