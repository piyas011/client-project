"use client";

import { redirect } from "next/navigation";

const AddUser = () => {
  const handelUpdateUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    const res = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log("after submission", result);

    if (result.success) {
      redirect("/users");
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handelUpdateUser} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1 block">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-md border p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-md border p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-white"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
