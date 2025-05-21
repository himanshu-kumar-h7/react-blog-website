import React, {memo} from 'react'
import ProfileImage from '../../Images/Profile4.jpeg'

function AuthorCard({author}) {
  return (
    <div className="cardProfile" style={{backgroundImage: `url(${ProfileImage})`}} >
      {/* <img
        // src={`https://joeschmoe.io/api/v1/${
        //   author.firstName + ' ' + author.lastName
        // }`}
        // alt="John"
        // style={{width: '100%'}}
      /> */}
      <h1>{author.firstName + ' ' + author.lastName}</h1>
      <p className="title text-secondary"> <span style={{color: "white"}}>Call : {author.phone}</span></p>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around'}}>
        <p>📸 : {author.numPosts}</p>
      <p>❤️ : {author.numLikes}</p>
      <p>💬 : {author.numComments}</p>
      </div>
      
    </div>
  )
}

export default memo(AuthorCard)
