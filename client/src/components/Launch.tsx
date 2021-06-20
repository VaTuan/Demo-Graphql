import React from 'react'
import { gql, useQuery } from '@apollo/client'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
const LAUNCH_QUERY = gql`
query LaunchQuery($flight_number :Int!){
    launch (flight_number : $flight_number){
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket{
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`
export default function Launch(props) {
    // console.log('props of Launch :', { props });
    // console.log(parseInt(props.match.params.flight_number));
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number)

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number }
    });

    if (loading) return (
        <div className="alert alert-dismissible alert-primary col-3 mr-auto">
            Loading...
        </div>
    )
    if (error) return (<span className="badge badge-pill badge-danger px-5 py-2 col-3">{error.message}</span>)

    let { mission_name, launch_year, launch_date_local, launch_success, rocket } = data.launch
    const { rocket_id, rocket_name, rocket_type } = rocket


    return (
        <div className='launch'>
            <h3 className='display-4 my-3'>
                <span className="text-primary">Mission :</span>{mission_name}
            </h3>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Fight Number: {flight_number}</li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">Launch Year: {launch_year}</li>
            </ul>
            <ul className="list-group">
                <li className="list-group-item">Launch Successful: <span className={classNames({
                    'text-danger': !launch_success,
                    'text-success': launch_success,
                    ' font-weight-bold': true
                })}>{launch_success ? 'Yes' : 'No'}</span></li>
            </ul>

            <h3 className="mb-3">Rocket Details</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    Rocket ID : {rocket_id}
                </li>
                <li className="list-group-item">
                    Rocket Name : {rocket_name}
                </li>
                <li className="list-group-item">
                    Rocket Type : {rocket_type}
                </li>
            </ul>
            <hr />
            <Link to='/' className='btn btn-secondary' >Back</Link>
        </div>
    )
}
