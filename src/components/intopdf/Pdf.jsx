import React from 'react'
import "./pdf.css"
import { render } from "react-dom";

import { Col, Divider, Row, Table } from 'antd';



// export default function Pdf() {
    const current = new Date();
     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`; 
    

     const ref = React.createRef();

     const Pdf = (props) => {
     
        
  return (
    <div className='pdf'>
      
    <div className="mainhead"  style={{ padding: 20 }}>
        <Row>
          <Col>
            <Divider>Payment Receipt</Divider>
          </Col>
        </Row>
    
        <Row gutter={24} style={{ marginTop: 32 }}>
          <Col span={8}>
            <h3>SomeShop Name</h3>
            <div>SomePlaceName</div>
            <div>NearTo SomePlace</div>
            <div>Bhubaneswar</div>
            <div>Odisha - 984765</div>
          </Col>
          <Col span={8} offset={8}>
            <table>
              <tr>
                <th>Invoice # :</th>
                <td>{parseInt(Math.random() * 100)}</td>
              </tr>
              <tr>
                <th>Invoice Date :</th>
                <td>{date}</td>
              </tr>
              <tr>
                <th>Due Date :</th>
                <td>{date}</td>
              </tr>
            </table>
          </Col>
        </Row>
    
        <Row style={{ marginTop: 48 }}>
          <div>Bill To: <strong>{props.title}</strong></div>
          <div>{props.adrs}</div>
          <div>{props.pin}</div>
        </Row>
    
    
        <Row style={{ marginTop: 48 }}>
          <Table dataSource={[{
              id: 1,
              name: null ,
              description: 'Garments',
              price: null,
              quantity: 1
          }]}
          pagination={false}
          >
            <Table.Column title="Items" dataIndex='name' />
            <Table.Column title="Description" dataIndex='description' />
            <Table.Column title="Quantity" dataIndex='quantity' />
            <Table.Column title="Price" dataIndex='price' />
            <Table.Column title="Line Total" />
          </Table>
        </Row>
    
        <Row style={{ marginTop: 48 }}>
          <Col span={8} offset={16}>
            <table>
              <tr>
                <th>Gross Total :</th>
                <td>₹ {props.price}</td>
              </tr>
              <tr>
                <th> Including GST </th>
                <td>@12%</td>
              </tr>
              <tr>
                <th>Nett Total :</th>
                <td>₹ {props.price}</td>
              </tr>
            </table>
          </Col>
        </Row>
    
        <Row style={{ marginTop: 48, textAlign: 'center', alignItems: 'center' }}>
          Thank You, For SHopping With Us
        </Row>
    
        <Row style={{ marginTop: 48, textAlign: 'center' }}>
           Please, Visit Again.
        </Row>
      </div>
    
    
    
    </div>
  )
}

export default Pdf;