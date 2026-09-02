import { useEffect, useState } from "react";
import axios from "axios";
import Editcategory from "./Editcategory";
function Categorylist() {
    const [categories, setcategories] = useState([])  //for setcategories
    const [loading, setloading] = useState(true);  //if category  data load
    const [errors, seterror] = useState("") //if error occur in frontend 
    const [editcategory,seteditcategory] =useState(null)

    const API_URL = "http://localhost:5000/api/category/getcategories"

    const fetchcategories = async () => {
        try {
            const response = await axios.get(API_URL)
            setcategories(response.data.data)
            console.log(response.data.data)
        }
        catch (error) {
            seterror("Catgories does not loaded")
        }
    }

    useEffect(() => {
        fetchcategories()
    }, []);

    function handeldata() {
        fetchcategories()
    }

 function handelupdatedata(){
    alert("dataupdate")
 }
    function handeledit(cat) {
        console.log(cat)
        seteditcategory(cat)
    }
    //print
    let finalcategories = categories.map((cat) => {
        return (
    
            <div key={cat._id}>
                <p>{cat.name}</p>
                <p>{cat.description}</p>
                <button onClick={() => handeledit(cat)}>Edit</button>
            </div>
        )
    })
    return (
        <>
            <button onClick={handeldata}>Get data</button>
            <p>{finalcategories}</p>

            {
                editcategory &&(
                    <Editcategory  category={editcategory} 
                    oncancel={()=>seteditcategory(null)}
                         onupdate={handelupdatedata}
                    // onupdate={handelupdated}
                    />
                )
            }
            {/* <table border="1px">
        <thead>
            <tr>
                <th>NAME</th>
                <th>DECRIPTION</th>
                <th>SLUG</th>
            </tr>
        </thead>
        <tbody>
            <tr>
               <td>{categories.name}</td>
            </tr>
        </tbody>
    </table> */}




        </>
    )
}


export default Categorylist;