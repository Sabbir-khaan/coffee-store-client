import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {

                // data delete from ui
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);

              Swal.fire({
                title: "Deleted!",
                text: "Your Profile has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  console.log(initialUsers);
  return (
    <div className="overflow-x-auto mt-20">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th>Photo</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={user.photo} alt="users Image" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{user.Name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <th>
                <h2>{user.phone}</h2>
              </th>
              <th>
                <div className="flex gap-2 text-xl">
                  <button>
                    <FaEye />
                  </button>
                  <button>
                    <GoPencil />
                  </button>
                  <button onClick={() => handleDelete(user._id)}>
                    <MdDelete />
                  </button>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
