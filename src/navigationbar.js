import React from 'react'
import './navigationbar.css'

class NavigationBar extends React.Component{
    render()
    {
        return(
            <div>
                <ul className='navigation_ul'>
                    <li className='navigation_li'><a href='#listitem'>navigationbar</a> </li>
                    <li className='navigation_li'><a href='#listitem'>navigationbar</a> </li>
                    <li className='navigation_li'><a href='#listitem'>navigationbar</a> </li>
                    <li className='navigation_li'><a href='#listitem'>navigationbar</a> </li>
                </ul>
            </div>
        )
    }

}
export default NavigationBar