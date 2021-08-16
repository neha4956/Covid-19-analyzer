import React, { useEffect, useState } from "react";
import "./statewise.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Statewise=()=>{

     const[data , setData]=useState([]);

const getCovidData=async()=>{
     const res= await fetch("https://api.covid19india.org/data.json");
     const actualData=await res.json();
     console.log(actualData.statewise);
     setData(actualData.statewise);

}


     useEffect(()=>{
       getCovidData();
      },[])

     return(
          <>
          <div className="container-fluid mt-5">
          <div className="main-heading">
          <div className="mb-5 text-center"><span className="font-weight-bold">INDIA</span>COVID-19 
          DASHBOARD

          </div>
          <div className="table-responsive">
          <table className="table table-hover">
          <thead className="thead-dark">
               <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>
                    <th>Active</th>
                    <th> Updated</th>
               </tr>
          </thead>
          <tbody>{

          
          data.map((currVal,index)=>{
              
              return( <tr Key={index}>
                    <th>{currVal.state}</th>
                    <td>{currVal.confirmed}</td>
                    <td>{currVal.recovered}</td>
                    <td>{currVal.deaths}</td>
                    <td>{currVal.active}</td>
                    <td> {currVal.lastupdatedtime}</td>
               </tr>
              )
          })
          }
              
          </tbody>

          </table>

          </div>

          </div>

          </div>
          </>
     )
}


export default Statewise;