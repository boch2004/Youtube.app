import React from 'react'


    const video = [
        {name:"https://www.youtube.com/embed/0sasRxl35_8?si=sNO5cmlvJSdskh4V", color: "ReactJS Tutorial - 18 - Lists and Keys" },
        {name:"https://www.youtube.com/embed/zLuV9Jffq04?si=Ng2D2fldPmkR1OTn", color: "2: تجهيز بيئة العمل و البدء في الجافا سكريبت" },
        {name:"https://www.youtube.com/embed/rFlY21UAwo0?si=YYYE-Db_4AP9ifht", color: "3: المتغيرات في الجافا سكريبت - variables in js" },
        {name:"https://www.youtube.com/embed/S2UTWroj2WE?si=OvC7-k2yoZlswEj9", color: "4: تسمية المتغيرات و التعامل معها" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "5: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "6: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "7: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "8: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "9: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "10: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "11: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "12: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "5: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "5: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "5: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/_Gex3HRqt0w?si=2HCs207XCFNiH-Ek", color: "5: العمليات الرياضية في متغيرات جافا سكريبت" },
        {name:"https://www.youtube.com/embed/mjMw3deQL9I?si=bDBQ7nXCnL6uqTNw", color: "" },
        {name:"https://www.youtube.com/embed/mjMw3deQL9I?si=bDBQ7nXCnL6uqTNw", color: "" },
        {name:"https://www.youtube.com/embed/mjMw3deQL9I?si=bDBQ7nXCnL6uqTNw", color: "" },
        {name:"https://www.youtube.com/embed/mjMw3deQL9I?si=bDBQ7nXCnL6uqTNw", color: "" },
        {name:"https://www.youtube.com/embed/mjMw3deQL9I?si=bDBQ7nXCnL6uqTNw", color: "" },
    ];

    
        function Groupe() {
        return (
            <div style={{border:"1px solid #ccc",borderRadius:"10px 10px 10px 10px",marginLeft:15,height:479}}>
                <div style={{display:"flex"}}>
                <div style={{width:350,height:100,display:"flex",flexDirection:"column"}}>
                    <h5 style={{fontSize:20,fontFamily:"inherit"}}>... كورس جافا سكريبت شامل | دروس </h5>
                    <p style={{fontSize:10}}>أكاديمية ترميز- 1 / 99</p>
                    <div>
                        <img style={{width:20,marginLeft:15}} src='/image copy 7.png'/>
                        <img style={{width:25,marginLeft:15}} src='/image copy 6.png'/>
                    </div>
                    </div>
                    <div style={{width:50,display:"flex",justifyContent:"space-around",flexDirection:"column"}}>
                    <img style={{width:20,height:20,marginLeft:20}} src='de-recursos-para-psc-black-x-illustration-png-clipart-thumbnail-removebg-preview.png' />
                    <div>
                        <img style={{width:20,height:20,marginLeft:20}}  src='/image copy 5.png' />
                    </div>
                </div>
                </div>
                <div style={{overflowY:"scroll",height:379}}>
            {video.map((video) => (
                <>
                <div style={{display:"flex",marginTop:5,width:300,marginLeft:15}}>
                <iframe width="100" height="56" style={{borderRadius:"11px"}} src={video.name} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <h6 style={{fontSize:"14px"}}>{video.color}</h6>
                </div>
                </>
            ))}
                </div>
        </div>
        )
        }
        
    export default Groupe