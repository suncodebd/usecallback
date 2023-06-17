import { useState } from "react";

function UseRef() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic using formData
    console.log(formData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <label className="font-bold text-xl cursor-pointer" htmlFor="UserName">
          UserName
        </label>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          id="UserName"
          value={formData.username}
          className="outline-none border p-2 rounded"
        />
        <label className="font-bold text-xl cursor-pointer" htmlFor="password">
          Password
        </label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          id="password"
          value={formData.password}
          className="outline-none border p-2 rounded"
        />
        <button
          type="submit"
          className="border mt-2 border-blue-500 py-2 duration-200 hover:bg-slate-300 rounded"
        >
          Resister
        </button>
      </form>
    </div>
  );
}

export default UseRef;
