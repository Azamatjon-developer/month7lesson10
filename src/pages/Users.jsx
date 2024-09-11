import { useMutation, useQuery } from '@tanstack/react-query';
import { Button } from 'antd';
import axios from 'axios';
import React from 'react';

function Users() {
  const { data: usersData = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios('http://localhost:3000/users'),
  });

  const { mutate: deleteUser } = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3000/users/${id}`),
    onSuccess: () => {
      refetch();
    },
  });

  const { mutate: updateUser } = useMutation({
    mutationFn: (data) =>
      axios.put(`http://localhost:3000/users/${data.id}`, data),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-r pb-[100px] from-green-500 via-blue-700 to-green-800 p-10">
      <h2 className="text-[20px] font-bold text-center mt-[30px] text-white mb-12">
        Users List
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {usersData.data?.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-green-400 to-black p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-black mb-4">
              {item.name}
            </h2>
            <p className="text-lg text-gray-200 mb-2">
              Last Name: {item.lastName}
            </p>
            <p className="text-lg text-gray-200 mb-6">Age: {item.age}</p>

            <div className="flex space-x-4">
              <Button
                type="primary"
                className="!bg-red-600 text-white hover:bg-red-700"
                onClick={() => deleteUser(item.id)}
              >
                Delete
              </Button>

              <Button
                type="primary"
                className="!bg-blue-600 text-white hover:bg-blue-700"
                onClick={() => {
                  const newNameValue = prompt("Enter new Name", item.name);
                  const newLastNameValue = prompt(
                    "Enter new Last Name",
                    item.lastName
                  );
                  const newAge = prompt("Enter new Age", item.age);
                  const updatedData = {
                    id: item.id,
                    name: newNameValue,
                    lastName: newLastNameValue,
                    age: newAge,
                  };
                  updateUser(updatedData);
                }}
              >
                Update
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
