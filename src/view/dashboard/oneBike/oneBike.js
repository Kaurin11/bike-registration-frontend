import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { getAllBikeUrl } from "../../../constants/routeConstants";

import { getOneBike } from "../../../services/services";

const OneBike = ({ match, history }) => {
  const [oneBike, setOneBike] = useState(null);

  useEffect(() => {
    getBike();
  }, []);

  const getBike = async () => {
    const { id } = match.params;
    const { data } = await getOneBike(id);
    const bike = data;
    console.log(bike);
    setOneBike(bike);
  };

  const backToBikesHandler = () => {
    history.push(getAllBikeUrl())
  }

  return (
    <div>
      {oneBike && (
        <div>
          <div>name :{oneBike.name}</div>
          <div>email : {oneBike.email}</div>
          <div>phone :{oneBike.phone}</div>
          <div>model : {oneBike.model}</div>
          <div>serial_number : {oneBike.serial_number}</div>
          <div>purchase_price : {oneBike.purchase_price}</div>
          <div>purchase_date : {oneBike.purchase_date}</div>
        </div>
      )}

      <button onClick={() => backToBikesHandler()}>Back</button>
    </div>
  );
};

export default withRouter(OneBike);
