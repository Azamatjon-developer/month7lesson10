import { useMutation, useQuery } from '@tanstack/react-query'
import { Button, Input } from 'antd'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddUsers() {
  const navigate = useNavigate()
  const { data: usersData = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: () => axios('http://localhost:3000/users'),
  })

  const { mutate } = useMutation({
    mutationFn: (body) => axios.post('http://localhost:3000/users', body),
    onSuccess: () => {
      refetch()
    },
  })


  function handleFormSubmit(e) {
    e.preventDefault()

    const formData = {
      id: String(usersData.data?.length ? Number(usersData.data[usersData.data?.length - 1].id + 1) : "1"),
      name: e.target.user?.value,
      lastName: e.target.userLastName?.value,
      age: e.target.userAge?.value,
    }
    mutate(formData)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-600 via-blue-900 to-green-800 p-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl bg-gradient-to-r from-green-600 via-blue-900 to-green-800">
        <h2 className="text-3xl font-bold text-center mb-6 text-white">Add New User</h2>

        <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 ">
          <Input
            name="user"
            size="large"
            placeholder="Enter your userName..."
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <Input
            name="userLastName"
            size="large"
            placeholder="Enter your lastName..."
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <Input
            name="userAge"
            size="large"
            placeholder="Enter your age..."
            className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition"
          />

          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="w-[200px] float-end ml-auto bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 text-white font-semibold rounded-lg p-4 transition"
          >
            Add User
          </Button>
        </form>
      </div>
    </div>
  )
}

export default AddUsers
