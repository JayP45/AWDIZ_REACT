import React from 'react'

const MapObject = ({ myStudentsData }) => {
    return (
        <>
            <div>
                <h1>I am map object</h1>
                {
                    myStudentsData.map((x)=>(
                        <div>
                            <img src={x.image} style={{height:'200px',width:'200px'}} alt="" />
                            <h2>{x.name}</h2>
                            <h2>{x.marks}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default MapObject