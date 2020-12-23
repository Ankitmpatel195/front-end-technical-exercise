import React from 'react'
import './section_works.scss';
import { WorkItem } from './WorkItem'

export const SectionWorks = () => {
    const works = [
        {
            title: 'Fill out a profile',
            content: 'We only want you to get games and gear that you’ll love, so we’ll ask for your preferences up front.'
        },
        {
            title: 'Request a delivery',
            content: 'Once you’re ready for your first delivery, all it takes is a click to get your shipment on the way.'
        },
        {
            title: 'Keep what you want',
            content: 'Tell us “no thanks” by returning any unwanted products in the enclosed packaging.'
        },
        {
            title: 'Request another delivery',
            content: 'Get your next gaming fix by updating your profile then initiating your next shipment.'
        }
    ]

    return (
        <div className='section_works'>
            <div className="container">
                <div className="heading">
                    How It Works
                </div>

                <div className='row'>
                    {works.map((el, i) => <WorkItem {...el} count={i+1}/>)}
                </div>
            </div>
        </div>
    )
}
