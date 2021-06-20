import React, { FunctionComponent } from 'react'
import { Launch } from '../types/launch';
import classNames from 'classnames';
import Moment from 'react-moment'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


interface LaunchItemProps {
    launch: Launch
}

const LaunchItem: FunctionComponent<LaunchItemProps> = ({ launch }) => {
    console.log('launch : ', { launch });
    let { flight_number, mission_name, launch_year, launch_date_local, launch_success } = launch


    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission : <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                    })}>{mission_name}</span></h4>
                    <p>Date : <Moment format='DD/MM/YYYY HH:mm'>{launch_date_local}</Moment></p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className='btn btn-primary'>Launch Details</Link>
                </div>
            </div>
        </div>
    )
}

export default LaunchItem
