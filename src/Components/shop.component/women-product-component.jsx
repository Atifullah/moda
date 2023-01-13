import { useContext } from 'react';
import { ProductsContext } from '../../context/productProvider';
import { useState,useEffect } from 'react';
import WomenProductCard from './shop-product/women-product-card';


import './shopx.styles.scss';

const WomenProductComponent = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('http://localhost:8080/getapi'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.women);
       
        setData(myJson.women)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div class="grid-products grid--view-items">
    <div class="row">
      {
        
      data.length>0 && data.map((item) => (
 
        <WomenProductCard key={item.id} item={item}/>
        
      ))
      
      }
    </div>
    </div>
  );
};

export default WomenProductComponent;