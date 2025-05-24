import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router";
import Swal from "sweetalert2";

// form theke event handler er maddome data pailam

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    // onkgula form jokhon thakbe tokhon ei method ta apply kore data onkgula data aksathe pawa jabe khub kom code likhe
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // sending coffee data to the db

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    // form banailam akta

    <section>
      <Link to={"/"}>
        <div className="flex items-center gap-2 my-[3.1rem]">
          <FiArrowLeft />
          <h3 className="font-rancho text-4xl">Back to Home</h3>
        </div>
      </Link>
      <div className="bg-[#F4F3F0] rounded-lg mt-[3.1rem]">
      <div className="text-center py-[4.3rem] px-[7rem] rounded-lg">
        <h1 className="font-rancho text-[2.8rem] text-[#374151]">
          Add New Coffee
        </h1>
        <p className="font-raleway mt-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset p-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Coffee Name"
            />
          </fieldset>
          <fieldset className="fieldset p-4">
            <label className="label">Quantity</label>
            <input
              type="text"
              name="quantity"
              className="input w-full"
              placeholder="Enter Quantity Name"
            />
          </fieldset>
          <fieldset className="fieldset p-4">
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input w-full"
              placeholder="Enter Price Name"
            />
          </fieldset>
          <fieldset className="fieldset p-4">
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Enter Taste Name"
            />
          </fieldset>
          <fieldset className="fieldset p-4">
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter Category Name"
            />
          </fieldset>
          <fieldset className="fieldset p-4">
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter Details Name"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset p-4">
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </fieldset>
        <div className="text-center mt-6 p-4">
          <button
            type="submit"
            className="font-rancho py-2 w-full border-2 border-[#331A15] bg-[#D2B48C] rounded-lg"
          >
            Add Coffee
          </button>
        </div>
      </form>
    </div>
    </section>
  );
};

export default AddCoffee;
