import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/category"

function Editcategory({ category, oncancel,  onupdate }) {
    const [data, setdata] = useState({
        name: category.name,
        description: category.description,
        slug: category.slug
    })
    const handlechange=(e)=>{
        setdata({...data,[e.target.name]: e.target.value})
    }
    const handelupdate =async (e)=>{
        e.preventDefault()
        try{
             const response  = await axios.put(`${API_URL}/${category._id}`,data)
             onupdate(response.data.data)
        }
         catch(error){
       alert("data is not updated")
        }
    }
    return (
        <>

            <form >

                <h1>Updated Form</h1>
                <input type="text"
                    name="name"
                    value={data.name}
                 onChange={handlechange}
                />
                <br />
                <input type="text"
                    name="description"
                    value={data.description}
                 onChange={handlechange}
                />
                <br />
                <input type="text"
                    name="slug"
                    value={data.slug}
                 onChange={handlechange}
                />
                <br />
                <button type="submit" onClick={handelupdate}>Update data</button>
                <button type="button" onClick={oncancel}>Cancel</button>
            </form>
        </>
    );

}
export default Editcategory;