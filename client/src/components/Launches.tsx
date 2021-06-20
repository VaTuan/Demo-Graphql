import { useQuery, gql } from '@apollo/client'
import React, { Fragment, FunctionComponent } from 'react'
import { Launch } from '../types/launch';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
query LaunchesQuery {
    launches(limit : 6){
        mission_name
        flight_number
        launch_year
        launch_date_local
        launch_success
      }
  }
`

const Launches = (): React.ReactElement => {


    const { loading, error, data } = useQuery(LAUNCHES_QUERY);
    if (error) return (<div className="alert alert-dismissible alert-danger col-3">
        {error.message}
    </div>)

    return (
        <Fragment>
            <div className="launches">
                <h2>Launches</h2>
                <MissionKey />
                {
                    loading ? (
                        <div className="alert alert-dismissible alert-primary col-3 mr-auto">
                            Loading...
                        </div>) :
                        <>

                            <div className='launches'>
                                {
                                    data.launches.map((launch: Launch, index: number) => (
                                        <LaunchItem key={index} launch={launch} />
                                    ))
                                }
                            </div>
                        </>
                }
            </div>
        </Fragment >
    )
}
export default Launches
