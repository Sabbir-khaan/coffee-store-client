import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, category, price, photo } = coffee;
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter(cof => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm p-8">
      <div className="flex items-center gap-24">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div>
          <h2>Name: {name}</h2>
          <h2 className="mt-2">Category: {category}</h2>
          <h2 className="mt-2">Price: {price}$</h2>
        </div>
        <div>
          <div className="join join-vertical space-y-4">
            <Link to={`/coffeeDetails/${_id}`}>
              <button className="btn  text-3xl">
                <FaEye />
              </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn text-3xl">
                <FaPen />
              </button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn text-3xl">
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
