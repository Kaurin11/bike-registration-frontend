import React from "react";
import { withRouter } from "react-router";
import { getOneBikeUrl, getUpdateBikeUrl } from "../../constants/routeConstants";
import { deleteBike } from "../../services/services";

const Bike = ({
  id,
  name,
  email,
  phone,
  model,
  serial_number,
  purchase_price,
  purchase_date,
  contact,
  history,
}) => {
  const bikeHandler = () => {
    history.push(getOneBikeUrl(id));
    console.log(getOneBikeUrl(id));
  };

  const updateBikeHandler = () => {
    history.push(getUpdateBikeUrl(id));
  }

  // const deleteBikeHandler = async (id) => {
  //   await deleteBike(id);
  // };

  return (
    <div>
      <div>id:{id}</div>
      <div>name:{name}</div>
      <div>email:{email}</div>
      <div>phone:{phone}</div>
      <div>model:{model}</div>
      <div>serial number:{serial_number}</div>
      <div>price:{purchase_price}</div>
      <div>date of purchase:{purchase_date}</div>

      <button onClick={() => bikeHandler()}>See Bike</button>
      <button onClick={() => updateBikeHandler()}>Update Bike</button>
      {/* <button onClick={deleteBikeHandler(id)}>Delete Bike</button> */}
    </div>
  );
};

export default withRouter(Bike);
