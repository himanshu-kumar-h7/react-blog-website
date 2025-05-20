import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import CloudsImage from '../../Images/Clouds2.jpeg';
function Card(props) {
  return (
    <div
      className="card specialCard mx-auto"
      
      style={{
        width: '18rem',
        padding: '20px',
        backgroundImage: `url(${CloudsImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '190px',
        border: 'none',
        margin: '15px',
      }}
    >
      <img
        
        className="card-img-top"
        alt="Error loading Image"
        style={{color: "red", fontSize: '0.6rem'}}
      />
      <div className="card-body text-center">
        <h5 className="abc" style={{color: 'white', fontWeight: "bolder", fontFamily: "cursive", backgroundColor: 'brown'}}><b>{props.name}</b></h5>
        <Link
          className="btn btn-primary text-white font-weight-bold"
          to={`/Profile/${props.id}`}
          id={props.id}
          style={{backgroundColor: "#66a3ff" }}
        >
          View Profile
        </Link>
      </div>
    </div>
  )
}
export default memo(Card)
