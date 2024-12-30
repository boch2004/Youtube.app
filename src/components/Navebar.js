import React from 'react'

function Navebar() {
  return (
    <div className='nave' href="#" style={{height:56}}>
        <img  src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500' className='imge' />
        <div className='navemid'>
        <input className='serch'  style={{width:536,height:40,borderRadius:"40px 0 0 40px",border:"1px solid #d3d3d3",marginLeft:40}} type="text" placeholder="    Search.."></input>
        <button style={{borderRadius:"0 40px 40px 0",border:"1px solid #d3d3d3",width:64,height:40}} type="submit"><i className="fa fa-search"></i></button>
        <button style={{borderRadius:"50%",border:"1px solid #d3d3d3",width:40,height:40,marginLeft:15}} type="submit"><i className="fa fa-microphone"></i></button>
        </div>
        <div className='last' >
        <button style={{borderRadius:"40px 40px 40px 40px",border:"1px solid #d3d3d3",width:100,height:36,marginLeft:15}} type="submit"><i><div style={{display:'flex',marginLeft:5}}><img src='/plus-3107.svg' /><h6>Create</h6></div> </i></button>
        <button style={{borderRadius:"50%",border:"none",background:"none"}} type="submit"><i><img src='/bell.svg' /></i></button>
        <button style={{borderRadius:"50%",border:"none",background:"none"}} type="submit"><i><img style={{width:32}} src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360' /></i></button>


        </div>
    </div>
  )
}

export default Navebar