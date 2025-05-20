import React, {memo} from 'react'

function Footer() {
  return (
    <div className="card-footer text-muted text-center font-weight-bolder p-5 m-2" style={{backgroundColor: "green", width: "100%", bottom: "0", border: '0', margin: '0px 0px 0px 0px', marginLeft: '0px', position: 'relative'}}>
      Made with ❤️ By <span style={{color: "purple"}}>Himanshu</span>
    </div>
  )
}
export default memo(Footer)


