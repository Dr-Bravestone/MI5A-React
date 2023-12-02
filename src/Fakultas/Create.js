import React, { useState } from "react";
import Axios from "axios"
import { useNavigate } from "react-router-dom";
const Create=()=>{
    const navigate = useNavigate()
    const [fakultas, setfakultas] = useState({
        nama:""
    })

    const handleChange=(e,name)=>{
        const value = e.target.value
        setfakultas({...fakultas, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventdefault()

        try {
            Axios.post("https://apimi5a.vercel.app/fakultas", fakultas)
            .then((res)=>{
                alert('fakultas berhasil disimpan')
                navigate("/fakultas")
            })
        } catch (error) {
            alert(error)
            
        }
    }

    return(
        <>
        <h2>Halaman Create</h2>
        <form>
            <input type="text" value={fakultas.nama} onChange={(e)=>handleChange(e,"nama")} className="form-control" placeholder="Input nama"/>
            <button onClick={handleSubmit} className="btn btn-primary">Simpan</button>
        </form>
        </>
    )
}

export default Create