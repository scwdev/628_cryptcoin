import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>
                    CYRPTO PRICES
                </div>
            </Link>
            <Link to='/currencies'>
                <div>
                    CURRENCIES
                </div>
            </Link>
        </div>
    )
}

export default Nav