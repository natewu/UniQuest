import "./Account.css";
import 'bulma/css/bulma.css'

import React, { useEffect, useState } from "react";

export default function Account(){
    //🐒
    const [data, setData] = useState([{}]);
    useEffect(() => {
        fetch("/user")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
            console.log(data);
          });
      }, []);
    return(
        <div className="Account">
            <div class="content">
                <h1>Account Information</h1>
                <h2>{data.username}</h2>
                <div class="card" style={{width:"50%", margin: "auto"}}>
                    <div class="card-content" style={{textAlign: "left"}}>
                        <h2>{data.firstName} {data.lastName}</h2>
                        <div class="content">
                            <p>Email : {data.email}</p>
                            <p>Password : {data.password}</p>
                            <p>{data.description}</p>

                        </div>
                    </div>
            </div>
          </div>
        </div>
    )
}