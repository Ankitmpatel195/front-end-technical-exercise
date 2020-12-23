import React from 'react'
import { NavBar } from './NavBar'
import './header.scss'
import { Button } from '../Button'

export const Header = () => {
    return (
        <div className='header'>
            <NavBar />

            <div className='hero_container'>

                <div className="container">
                    <div className='main_content'>
                        <p className='heading_secondary'>New Games & Accesories</p>
                        <div className='heading_primary'>
                            <h1>Monthly packages.</h1>
                            <h1>Excitement delivered daily.</h1>
                        </div>
                        <div className='heading_content'>
                            What’s the best way to shop for the latest video games and peripherals? How about never shopping at all? <br/> You’ll get new stuff on your doorstep — every month.
                        </div>
                        <Button>GET STARTED</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
