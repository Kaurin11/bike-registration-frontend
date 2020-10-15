import React from "react";

import { useFormik } from "formik";
import { setBike } from "../../../services/services";
import { withRouter } from "react-router";
import { getAllBikeUrl } from "../../../constants/routeConstants";

const CreateBike = ({ history }) => {
  // const initialValue = { id: null, name:'', email:'', phone:'', model:'', };
  // const [value, setValue] = useState(initialValue);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      model: "",
      serial_number: "",
      purchase_price: "",
      purchase_date: "",
      contact: "",
    },
  });

  const addBikeHandler = (e) => {
    e.preventDefault();
    console.log(formik.values);
    setBike(formik.values);
  };

  const backToBikeHandler = () => {
    history.push(getAllBikeUrl());
  };

  //   const allBike = () => {
  //     history.push(getAllBikeUrl);
  //   };

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />

        <label htmlFor="model">Model</label>
        <input
          id="model"
          name="model"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.model}
        />

        <label htmlFor="serial_number">Serial Num</label>
        <input
          id="serial_number"
          name="serial_number"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.serial_number}
        />

        <label htmlFor="purchase_price">Price</label>
        <input
          id="purchase_price"
          name="purchase_price"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.purchase_price}
        />

        <label htmlFor="purchase_date">Purch daata</label>
        <input
          id="purchase_date"
          name="purchase_date"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.purchase_date}
        />

        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.contact}
        />

        <button onClick={addBikeHandler}>Add Bike</button>
        <button onClick={backToBikeHandler}>Back</button>
        {/* <button onClick={() => allBike()}>All Bike</button> */}
      </form>
    </div>
  );
};

export default withRouter(CreateBike);
