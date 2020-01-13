import React from 'react';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import axios from "axios";


function App() {

  getToJson =()=>{

    axios.get('/jsonId').then(res=>{
      console.log("res",res);
      
    })
  }
  
  return (
    
    
    <div>
    <center>
      <Card>
        <CardImg top width="10%" src="https://cdn.onecklace.com/products/1468/product_1468_1_730.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example t</CardText>
          <Button on onClick={this.getToJson}>Button</Button>
        </CardBody>
      </Card>
      </center>
    </div>
  );
};

export default App;
