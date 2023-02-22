import React, { useState } from "react";
import "./Tabledata.css";

export default function Tabledata(props) {
  console.log(props);
  const [val,sval] = useState("");
  let filter_names=props.data.filter((data) =>
  data.first_name.includes(val) || data.last_name.includes(val) )
  return (
    
    <div className="Table">
      <input type="text" onChange={(eve) => sval(eve.target.value)}/>
      <table>
        <tr>
          <th>id</th>
          <th>First_name</th>
          <th>Last_name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>IP_address</th>
          <th>image</th>
        </tr>
        <tbody>
          {filter_names.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.ip_address}</td>
              <td>
                <img src={item.image} alt="" /> image
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
