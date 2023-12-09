import  Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Update=()=>{
    const navigate = useNavigate()
    const {fakultasId} = useParams()
    const [fakultas, setfakultas]=useState({
        nama:""
    })
    const handleChange=(e,name)=>{
        const value = e.target.value
        setfakultas({...fakultas, [name]:value})
    }
    useEffect(()=>{
        const getFakultas=async()=>{
            try{
                await Axios.get(`https://apimi5a.vercel.app/fakultas/${fakultasId}`)
                .then((res)=>{
                    const {data}= res
                    setfakultas({
                        nama:data?.nama
                    })
                })
            }catch(error){
                alert(error)
            }
        }
        getFakultas()
    },[fakultasId])
    return(
        <>
        <h2>Halaman Update</h2>
        <form>
            <input type="text" value={fakultas.nama} onChange={(e)=>handleChange(e,"nama")} className="form-control" placeholder="Input nama"/>
            <button  className="btn btn-primary">Simpan</button>
            <button className="btn btn-sm btn-light" onClick={()=>navigate("/fakultas")}>Kembali</button>
        </form>
        </>
    )
}

export default Update