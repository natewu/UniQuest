import React, { useState, useEffect } from "react";
import "./ShopSwap.css";
import 'bulma/css/bulma.css'
import ShopGlasses from "./images/shop-glasses.jpg";

export default function ShopSwap() {
  
  const [glasses, setGlasses] = useState([{}]);
  useEffect(() => {
    fetch("/eyewear")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGlasses(data);
        console.log(glasses);
        console.log(glasses[0]);
      });
  }, []);

  return (
    <div className="ShopSwap container-fluid">
      <div className="background-img">
        <h2>Shop: Shop N Swap</h2>
      </div>
      <div>
        <label className="prescription-label">
          OD
          <br />
          (Right)
        </label>{" "}
        <input className=""></input>
        <input></input>
      </div>

      <div className="prescription-group prescription-label">
        <label className="prescription-label">
          SPH
          <span className="rx-help rx-help--primary"></span>
        </label>
        <div className="cly-select">
          <label className="prescription-label">
            OD
            <br />
            (Right)
          </label>
          <select data-gtm-form-interact-field-id="0">
            <option value="-15.00">-15.00</option>
            <option value="-14.75">-14.75</option>
            <option value="-14.50">-14.50</option>
            <option value="-14.25">-14.25</option>
            <option value="-14.00">-14.00</option>
            <option value="-13.75">-13.75</option>
            <option value="-13.50">-13.50</option>
            <option value="-13.25">-13.25</option>
            <option value="-13.00">-13.00</option>
            <option value="-12.75">-12.75</option>
            <option value="-12.50">-12.50</option>
            <option value="-12.25">-12.25</option>
            <option value="-12.00">-12.00</option>
            <option value="-11.75">-11.75</option>
            <option value="-11.50">-11.50</option>
            <option value="-11.25">-11.25</option>
            <option value="-11.00">-11.00</option>
            <option value="-10.75">-10.75</option>
            <option value="-10.50">-10.50</option>
            <option value="-10.25">-10.25</option>
            <option value="-10.00">-10.00</option>
            <option value="-9.75">-9.75</option>
            <option value="-9.50">-9.50</option>
            <option value="-9.25">-9.25</option>
            <option value="-9.00">-9.00</option>
            <option value="-8.75">-8.75</option>
            <option value="-8.50">-8.50</option>
            <option value="-8.25">-8.25</option>
            <option value="-8.00">-8.00</option>
            <option value="-7.75">-7.75</option>
            <option value="-7.50">-7.50</option>
            <option value="-7.25">-7.25</option>
            <option value="-7.00">-7.00</option>
            <option value="-6.75">-6.75</option>
            <option value="-6.50">-6.50</option>
            <option value="-6.25">-6.25</option>
            <option value="-6.00">-6.00</option>
            <option value="-5.75">-5.75</option>
            <option value="-5.50">-5.50</option>
            <option value="-5.25">-5.25</option>
            <option value="-5.00">-5.00</option>
            <option value="-4.75">-4.75</option>
            <option value="-4.50">-4.50</option>
            <option value="-4.25">-4.25</option>
            <option value="-4.00">-4.00</option>
            <option value="-3.75">-3.75</option>
            <option value="-3.50">-3.50</option>
            <option value="-3.25">-3.25</option>
            <option value="-3.00">-3.00</option>
            <option value="-2.75">-2.75</option>
            <option value="-2.50">-2.50</option>
            <option value="-2.25">-2.25</option>
            <option value="-2.00">-2.00</option>
            <option value="-1.75">-1.75</option>
            <option value="-1.50">-1.50</option>
            <option value="-1.25">-1.25</option>
            <option value="-1.00">-1.00</option>
            <option value="-0.75">-0.75</option>
            <option value="-0.50">-0.50</option>
            <option value="-0.25">-0.25</option>
            <option selected>0.00</option>
            <option value="Plano/PL">Plano/PL</option>
            <option value="+0.25">+0.25</option>
            <option value="+0.50">+0.50</option>
            <option value="+0.75">+0.75</option>
            <option value="+1.00">+1.00</option>
            <option value="+1.25">+1.25</option>
            <option value="+1.50">+1.50</option>
            <option value="+1.75">+1.75</option>
            <option value="+2.00">+2.00</option>
            <option value="+2.25">+2.25</option>
            <option value="+2.50">+2.50</option>
            <option value="+2.75">+2.75</option>
            <option value="+3.00">+3.00</option>
            <option value="+3.25">+3.25</option>
            <option value="+3.50">+3.50</option>
            <option value="+3.75">+3.75</option>
            <option value="+4.00">+4.00</option>
            <option value="+4.25">+4.25</option>
            <option value="+4.50">+4.50</option>
            <option value="+4.75">+4.75</option>
            <option value="+5.00">+5.00</option>
            <option value="+5.25">+5.25</option>
            <option value="+5.50">+5.50</option>
            <option value="+5.75">+5.75</option>
            <option value="+6.00">+6.00</option>
            <option value="+6.25">+6.25</option>
            <option value="+6.50">+6.50</option>
            <option value="+6.75">+6.75</option>
            <option value="+7.00">+7.00</option>
            <option value="+7.25">+7.25</option>
            <option value="+7.50">+7.50</option>
            <option value="+7.75">+7.75</option>
            <option value="+8.00">+8.00</option>
          </select>
        </div>
      </div>
      <div className="prescription-group prescription-label">
        <div className="cly-select">
          <label className="prescription-label">
            OD
            <br />
            (Left)
          </label>
          <select data-gtm-form-interact-field-id="0">
            <option value="-15.00">-15.00</option>
            <option value="-14.75">-14.75</option>
            <option value="-14.50">-14.50</option>
            <option value="-14.25">-14.25</option>
            <option value="-14.00">-14.00</option>
            <option value="-13.75">-13.75</option>
            <option value="-13.50">-13.50</option>
            <option value="-13.25">-13.25</option>
            <option value="-13.00">-13.00</option>
            <option value="-12.75">-12.75</option>
            <option value="-12.50">-12.50</option>
            <option value="-12.25">-12.25</option>
            <option value="-12.00">-12.00</option>
            <option value="-11.75">-11.75</option>
            <option value="-11.50">-11.50</option>
            <option value="-11.25">-11.25</option>
            <option value="-11.00">-11.00</option>
            <option value="-10.75">-10.75</option>
            <option value="-10.50">-10.50</option>
            <option value="-10.25">-10.25</option>
            <option value="-10.00">-10.00</option>
            <option value="-9.75">-9.75</option>
            <option value="-9.50">-9.50</option>
            <option value="-9.25">-9.25</option>
            <option value="-9.00">-9.00</option>
            <option value="-8.75">-8.75</option>
            <option value="-8.50">-8.50</option>
            <option value="-8.25">-8.25</option>
            <option value="-8.00">-8.00</option>
            <option value="-7.75">-7.75</option>
            <option value="-7.50">-7.50</option>
            <option value="-7.25">-7.25</option>
            <option value="-7.00">-7.00</option>
            <option value="-6.75">-6.75</option>
            <option value="-6.50">-6.50</option>
            <option value="-6.25">-6.25</option>
            <option value="-6.00">-6.00</option>
            <option value="-5.75">-5.75</option>
            <option value="-5.50">-5.50</option>
            <option value="-5.25">-5.25</option>
            <option value="-5.00">-5.00</option>
            <option value="-4.75">-4.75</option>
            <option value="-4.50">-4.50</option>
            <option value="-4.25">-4.25</option>
            <option value="-4.00">-4.00</option>
            <option value="-3.75">-3.75</option>
            <option value="-3.50">-3.50</option>
            <option value="-3.25">-3.25</option>
            <option value="-3.00">-3.00</option>
            <option value="-2.75">-2.75</option>
            <option value="-2.50">-2.50</option>
            <option value="-2.25">-2.25</option>
            <option value="-2.00">-2.00</option>
            <option value="-1.75">-1.75</option>
            <option value="-1.50">-1.50</option>
            <option value="-1.25">-1.25</option>
            <option value="-1.00">-1.00</option>
            <option value="-0.75">-0.75</option>
            <option value="-0.50">-0.50</option>
            <option value="-0.25">-0.25</option>
            <option selected>0.00</option>
            <option value="Plano/PL">Plano/PL</option>
            <option value="+0.25">+0.25</option>
            <option value="+0.50">+0.50</option>
            <option value="+0.75">+0.75</option>
            <option value="+1.00">+1.00</option>
            <option value="+1.25">+1.25</option>
            <option value="+1.50">+1.50</option>
            <option value="+1.75">+1.75</option>
            <option value="+2.00">+2.00</option>
            <option value="+2.25">+2.25</option>
            <option value="+2.50">+2.50</option>
            <option value="+2.75">+2.75</option>
            <option value="+3.00">+3.00</option>
            <option value="+3.25">+3.25</option>
            <option value="+3.50">+3.50</option>
            <option value="+3.75">+3.75</option>
            <option value="+4.00">+4.00</option>
            <option value="+4.25">+4.25</option>
            <option value="+4.50">+4.50</option>
            <option value="+4.75">+4.75</option>
            <option value="+5.00">+5.00</option>
            <option value="+5.25">+5.25</option>
            <option value="+5.50">+5.50</option>
            <option value="+5.75">+5.75</option>
            <option value="+6.00">+6.00</option>
            <option value="+6.25">+6.25</option>
            <option value="+6.50">+6.50</option>
            <option value="+6.75">+6.75</option>
            <option value="+7.00">+7.00</option>
            <option value="+7.25">+7.25</option>
            <option value="+7.50">+7.50</option>
            <option value="+7.75">+7.75</option>
            <option value="+8.00">+8.00</option>
          </select>
        </div>
      </div>
      {glasses.map(function(glass, idx){
         return (
         
      <div class="card" style={{width:"80%", margin: "auto"}}>
      <div className="row shop-glasses">
        <div className="col-lg-6">
          <img src={ShopGlasses} alt="Glasses" className="img-fluid"></img>
        </div>
        <div className="col-lg-6 glasses-detail">
          <div className="row">
            <div className="col-lg-4">
              <div><b><u>Sphere</u></b></div>
              <div>Left: {glass.sphereLeft}</div>
              <div>Right: {glass.sphereRight}</div>
            </div>
            <div className="col-lg-4">
              <div><b><u>IPD</u></b></div>
              <div>Left: {glass.ipdLeft}</div>
              <div>Right: {glass.ipdRight}</div>
            </div>
            <div className="col-lg-4">
              <div><b><u>Frame</u></b></div>
              <div>Bridge: {glass.bridge}</div>
              <div>Lens: {glass.lens}</div>
              <div>Temple: {glass.temple}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div><b><u>Distance</u></b></div>
              <div>{glass.notes}</div>
            </div>
            <div className="col-lg-4">
              <div><b><u>Price</u></b></div>
              <div>{glass.price}</div>
            </div>
            <div className="col-lg-4 mt-3">
              <button>View</button>
            </div>
          </div>
        </div>
      </div>
      </div>
         )
       })}
    </div>
  );
}
