import React, {useState} from 'react'
import Link from 'next/link'
import {Carousel, Button, Drawer, Calendar  } from 'antd'
import {BugTwoTone, CarTwoTone} from '@ant-design/icons'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const carouselStyle = {
    width: '800px',
	height: '400px'
}

const home = () => {
    function onPanelChange(value, mode) {
        console.log(value, mode);
    }
    return(

        <div style={{position: 'relative', height: '750px'}}>
            <link rel="stylesheet" href="css/style.css" />
            <div>
            {/* <header id="h1">
            
            </header> */}
            <div>
                <img style={{height: '100px', width: '100%'}} src="img/h1.png"/>
            </div>

            <div>
                <div style={{position: 'absolute'}}>
                    <img style={{width: '100%', height: '600px'}} src="img/b1.jpg"/>

                    <div style={{position: 'absolute', top: 40, left: 0,margin: '50px 0 0 50px',height: '400px', width: '750px', backgroundColor: 'red'}}>
                    <Carousel autoplay>
                        <div>
                            <img src="img/s1.jpg" style={carouselStyle} />
                        </div>
                        <div>
                            <img src="img/s2.jpg" style={carouselStyle} />
                        </div>
                        <div>
                            <img src="img/s3.jpg" style={carouselStyle} />
                        </div>
                        <div>
                            <img src="img/s4.jpg" style={carouselStyle} />
                        </div>
                    </Carousel>
                </div> 

                <div style={{position: 'absolute', top: 80, right: 250,margin: '50px 0 0 50px',height: '300px', width: '300px'}}>
                    <div className="site-calendar-demo-card">
                        <Calendar style={{backgroundColor: 'gray'}} fullscreen={false} onPanelChange={onPanelChange} />
                    </div>
                </div>
            </div>

                

            <div className="menubar">
                <div className="logo">
                    <h1 style={{margin: '0 0 0 20px'}}>ระบบการจัดการตรวจสอบครุภัณฑ์และวัสดุคงทนถาวร</h1>
                </div>
                <div className="dropdown" style={{ float: 'left' }}>
                    <button className="dropbtn"><a href="/home" style={{ border: 'none', color: 'white' }}>หน้าหลัก</a></button>
                </div>
                <div className="dropdown" style={{ float: 'right' }}>
                    <form>
                        <button className="dropbtn">
                            <a href="/login.html">ออกจากระบบ</a>
                        </button>
                    </form>
                </div>
                <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn"><a href="http://intra.up.ac.th/inv/eInventory/Inventory_Report.aspx?sType=place&place=ICT" style={{ color: 'white' }}>รายงาน</a></button>
                </div>
                
                <div className="dropdown" style={{ float: 'right' }}>
                    <button className="dropbtn">จัดการครุภัณฑ์</button>
                    <div className="dropdown-content" style={{ left: 0 }}>
                        <a href="/durable_articles">ค้นหาครุภัณฑ์</a>
                        <a href="./form1.html">เพิ่มครุภัณฑ์</a>
                        <a href="/addqr.html">สร้างคิวอาร์โค้ด</a>
                        {/* <a href="#">แก้ไขครุภัณฑ์</a> */}
                    </div>
                </div>
                    
                </div>
            </div>

            

            

            <div style={{position: 'absolute', width: '100%', bottom: 0}}>
                <img style={{width: '100%'}} src="img/f1.png"/>
            </div>
            {/* <section style={{ backgroundColor: 'red', width: '100%' , textAlign:'center',height:'700px'}}>
                
            </section> */}

        </div>  

        
        
        {/* <footer/>                  */}
                        
        </div>

        
        
      

    )
} 
export default home