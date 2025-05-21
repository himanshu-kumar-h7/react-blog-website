import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import db from '../../utils/db.json'
import { useState } from 'react'
import { useEffect } from 'react'
function Pagination(props) {


const [count, setCount] = useState(0)

// useEffect( () => {
  
//   const data = db.authors.id;
//   console.log(data)
  
  
  

// },[])

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center pagination-lg p-4">

        <li className="page-item">
          <Link
            className="page-link"
            to={`/${
              1
            }`}
          >
            Reset to min
          </Link>
          
        </li>
        
        <li
          className={`page-item ${
            props.pageNo === 1 || props.pageNo === 1 || isNaN(props.pageNo)
              ? 'disabled'
              : ''
          }`}
        >
          <Link className="page-link" to={`/${props.pageNo - 1}`}>
            Previous
          </Link>
        </li>

        <li className="page-item">
          <p
            className="page-link"
            style={{backgroundColor: 'black', color: 'white'}}
          >
            {isNaN(props.pageNo) || props.pageNo === 0 ? '1' : props.pageNo}
          </p>
        </li>

        <li className="page-item">
          <Link
            className="page-link"
            to={`/${
              isNaN(props.pageNo) || props.pageNo === 0 ? '2' : props.pageNo + 1
            }`}
          >
            next
          </Link>
          
        </li>
        <li className="page-item">
          <Link
            className="page-link"
            to={`/${
             9
            }`}
          >
            {}
          </Link>
          
        </li>
      </ul>
    </nav>
  )
}

export default memo(Pagination)
