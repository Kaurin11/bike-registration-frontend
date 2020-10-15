import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Bike from "../../../components/bikes/bikes";
import { getCreateBikeUrl } from "../../../constants/routeConstants";

import { getAllBike } from "../../../services/services";

const AllBike = ({ history }) => {
  const [allBike, setAllBike] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await getAllBike();
    const allBikes = data;
    setAllBike(allBikes);
  };

  const createBikeHandler = () => {
    history.push(getCreateBikeUrl());
  };

  return (
    <div>
      {allBike.map((bike) => {
        return (
          <Bike
            key={bike.id}
            id={bike.id}
            name={bike.name}
            email={bike.email}
            phone={bike.phone}
            model={bike.model}
            serial_number={bike.serial_number}
            purchase_price={bike.purchase_price}
            purchase_date={bike.purchase_date}
            contact={bike.contact}
          />
        );
      })}
      <button onClick={createBikeHandler}>Create Bike</button>
    </div>
  );
};

export default withRouter(AllBike);
