import React from "react";
import "./item.css";
function Item({itemid,image,category,price,title}){
    let pr=0
    pr=price
    return(
        <div className="Cartitem" id={itemid}>
           <img src={image}  />
           <div className="details">
               <h4>{title}
               </h4>
               <h6>{category}</h6>
               <h5>{price}<p>TL</p></h5>
               <h2>{price}</h2>
               <button className="delete">SİL</button>
           </div>
           <div className="quantity"><button className="plus">+</button>
           <p className="amount">1</p>
           <button className="minus">-</button>
           </div>
        </div>
    );
}
export default Item;