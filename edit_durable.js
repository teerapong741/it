import React from 'react'
import {Input, Button, Select} from 'antd'

const { Option } = Select;

const edit_durable = () => {
    return (
        <div style={{position: 'relative'}}>
            <label>หมายเลขครุภัณฑ์</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="xxx-xxx-xxx-xxx"/>
            <label style={{margin: '0px 0 0 0'}}>ชื่อครุภัณฑ์</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="Product name.."/>
            <label style={{margin: '10px 0 0 0'}}>จำนวน (ชิ้น)</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="0"/>
            <label style={{margin: '10px 0 0 0'}}>ต้นทุนต่อหน่วย</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="ราคา"/>
            <label style={{margin: '10px 0 0 0'}}>ยี่ห้อ</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="ยี่ห้อ"/>
            <label style={{margin: '10px 0 0 0'}}>โมเดล</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="model"/>
            <label style={{margin: '10px 0 0 0'}}>หมายเลขเครื่อง</label>
            <Input style={{margin: '0 0 20px 0'}} placeholder="s/n"/>
            <div style={{margin: '20px 0 0 0'}}>
                 <label>สถานะ : </label>
                <Select defaultValue="ใช้งาน" style={{ width: 120 }}>
                    <Option value="ใช้งาน">ใช้งาน</Option>
                    <Option value="ไม่ใช้งาน">ไม่ใช้งาน</Option>
                    <Option value="อยู่ระหว่างนำซ่อม">อยู่ระหว่างนำซ่อม</Option>
                </Select>
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                <label>ผลการตรวจสอบพัสดุ : </label>
                <Select defaultValue="ตรวจพบ" style={{ width: 120 }}>
                    <Option value="ตรวจพบ">ตรวจพบ</Option>
                    <Option value="ชำรุด">ชำรุด</Option>
                    <Option value="เสื่อมสภาพ">เสื่อมสภาพ</Option>
                    <Option value="หมดความจำเป็น">หมดความจำเป็น</Option>
                    <Option value="ตรวจไม่พบ">ตรวจไม่พบ</Option>
                </Select>
            </div>
            <div style={{margin: '20px 0 10px 0'}}>
                <label>สถานที่ใช้งาน : </label>
                <Select defaultValue="none" style={{ width: 120 }}>
                    <Option value="none">none</Option>
                    <Option value="ict1323">ict1323</Option>
                    <Option value="ict1340">ict1340</Option>
                    <Option value="ict1311">ict1311</Option>
                    <Option value="ict1203">ict1203</Option>
                    <Option value="ict1235">ict1235</Option>
                </Select>
            </div>

            <div style={{margin: '20px 0 20px 0'}}>
                <label>สถานที่ใช้งานเดิม : </label>
                <Select defaultValue="none" style={{ width: 120 }}>
                    <option value="none">none</option>
                    <option value="ict1323">ict1323</option>
                    <option value="ict1340">ict1340</option>
                    <option value="ict1311">ict1311</option>
                    <option value="ict1203">ict1203</option>
                    <option value="ict1235">ict1235</option>
                </Select>
            </div>

            <label style={{margin: '0px 0 0 0'}}>ผู้รับผิดชอบ</label>
            <Input style={{margin: '0px 0 20px 0'}} placeholder="xxx-xxx-xxx-xxx"/>
            
            <div style={{margin: '0 0 0px 0',position: 'absolute', left: 0, bottom: 0}}>
                <Button type="primary" style={{margin: '20px 10px 0 0'}}>Submit</Button>
            </div>
            <div style={{margin: '0 0 0px 0',position: 'absolute', right: 0, bottom: 0}}>
                <Button type="primary" danger style={{margin: '20px 0 0 0'}}>Reset</Button>
            </div>
            <br/><br/><br/><br/>
        </div>
    )
}

export default edit_durable
