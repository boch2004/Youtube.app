    import React from 'react'

    function Video() {
    return (
        <div>
            <iframe width="853" height="480" style={{borderRadius:"11px"}} src="https://www.youtube.com/embed/TbHeHAyAV7Q?si=ZyFYmSZ1q3MDDCRP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <duv>
                <h5>سلسلة دروس جافا سكريبت - الدرس الأول: ما هي لغة جافا سكريبت و ما أهميتها؟</h5>
            </duv>
            <div className='dislike'>
            <div className='like'>
                <img style={{width:40}} src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?w=360' />
                <div style={{marginLeft:15}}>
                <a><h1>أكاديمية ترميز</h1></a>
                <p style={{color:"#606060"}}>101K subscribers</p>
                </div>
                
            </div>
            <div>
                <button style={{borderRadius:"40px 40px 40px 40px",border:"1px solid #d3d3d3",width:160,height:36,marginLeft:15}} type="submit"><i><div style={{display:'flex',marginLeft:5}}><img src='/bell.svg' /><h6>Subscribed</h6><img style={{width:30,marginTop:4}} src='/2163911-removebg-preview.png' /></div> </i></button>
                </div>
                <div style={{display:"flex",justifyItems:"center"}}>
                <button style={{borderRadius:"40px 40px 40px 40px",border:"1px solid #d3d3d3",width:136,height:36,marginLeft:15}} type="submit"><i><div style={{display:'flex',marginLeft:5}}><img style={{width:30}} src='/image copy.png' /><h1 style={{fontSize:15,marginTop:7,marginLeft:10,marginRight:10}}>2.3K</h1><div class="vertical-line"></div> <img style={{width:30}} src='/image.png'/></div> </i></button>
                        <button style={{borderRadius:"40px 40px 40px 40px",border:"1px solid #d3d3d3",width:105,height:36,marginLeft:15}} type="submit"><i><div style={{display:'flex',marginLeft:5}}><img style={{width:30,height:27}} src='/image copy 2.png' /><h6>Share</h6></div> </i></button>
                        <button style={{borderRadius:"40px 40px 40px 40px",border:"1px solid #d3d3d3",width:130,height:36,marginLeft:15}} type="submit"><i><div style={{display:'flex',marginLeft:5}}><img style={{width:30,height:27}} src='/image copy 3.png' /><h6>Download</h6></div> </i></button>
                        <button style={{borderRadius:"50%",border:"1px solid #d3d3d3",width:40,marginLeft:6,height:40}} type="submit"><i><img style={{width:30,height:27}} src='/image copy 4.png'/></i></button>

                </div>
                </div>
        </div>
    )
    }

    export default Video