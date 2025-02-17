import React, { useDebugValue, useEffect } from 'react'
import { useAuth } from '../context/AuthContext';



const Iterneries_2 = (props) => {
    const {
        authUser,

        userPlaceName,
        userWithinRadius,
        userFromTime,
        userToTime,
        setUserPlaceName,
        setUserWithinRadius,
        setUserFromTime,
        setUserToTime,

        response1,
        response2,
        response3,
    } = useAuth();

    useEffect(() => {
        if (response2)
            console.log(JSON.stringify(response2))
    }, [response2])

    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
        <h2 className="mb-5 text-center">Here is another iternery plan</h2>
        <div className="container py-5">
        <div className="main-timeline-4 text-white" style={{content:null}}>
                        {
                            response2 !== null ?
                            response2.plan.map((place, index) => (
                                <div className={`timeline-4 ${index % 2 === 0 ? 'left-4' : 'right-4'}`} key={index}>
                                    <div className="card">
                                        <div className="card-body p-4 gradient-custom">
                                            <h4>Place: <span>{place === null ? "NULL" : capitalizeFirstLetter(place.location)}</span></h4>
                                            Timings: <span className="badge badge-dark mt-3 p-2">{place === null ? "NULL" : place.time}</span>
                                            <p className="mt-3">Activity: <span>{place === null ? "NULL" : capitalizeFirstLetter(place.activity)}</span></p>
                                            <p>Distance: <span>{place === null ? "NULL" : place.distance}</span></p>
                                            <p>Travel-Time: <span>{place === null ? "NULL" : place["travel time"]}</span></p>
                                            <a className="btn" style={{ backgroundColor: "white", color: "black" }} href="#" role="button">Open in Maps</a>
                                        </div>
                                    </div>
                                </div>
                            )): <h2 style={{color:"black",textAlign:"center"}}>Generating plan...</h2>
                        }
        </div>
        </div>
        </>
    )
}






export default Iterneries_2

