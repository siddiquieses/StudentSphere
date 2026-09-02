import { useState } from "react";
import axios from "axios"
function Category() {
  const [form, setform] = useState({
    name: "",
    description: "",
    slug: ""
  })
  const [message, setmessage] = useState("")

  const handlechange = (e) => {
    const { name, value } = e.target
     setform((prev)=>({
      ...prev,
      [name]:value
     }))
  };

  const handlesubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        "http://localhost:5000/api/category/create", form
      );
      console.log("Category Added", response.data)
    setform({name:"",description:"",slug:""})
    }

    catch (error) {
      setmessage("category not added")
    }
  }

  return (

    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h1>Category Page</h1>
      <h1>{message}</h1>
      <form onSubmit={handlesubmit} >
        <div style={{ marginBottom: 16 }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handlechange}
            value={form.name}
            placeholder="e.g. Electronics"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label>Description</label>
          <textarea
            name="description"
            onChange={handlechange}
            value={form.description}
            placeholder="Short description of this category"
            style={{ width: "100%", padding: 8, minHeight: 80 }}
          />
        </div>

        {/* <div style={{ marginBottom: 16 }}>
          <label>Slug</label>
          <input
            type="text"
            name="slug"
            onChange={handlechange}
            value={form.slug}
            placeholder="e.g. electronics"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div> */}

        <button type="submit">Save category</button>
      </form>
    </div>
  );
}

export default Category;