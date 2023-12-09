import React, { useEffect, useState } from "react";
import Axios from "axios"
import { Await, NavLink, useNavigate } from "react-router-dom";
const List=()=>{
    const navigate = useNavigate()
    const [fakultas, setfakultas] = useState([])
    const [loading, setloading] = useState(false)

    useEffect(() => {
      Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res)=>{
            const {data}=res
            setfakultas(data)
            console.log(data)
            setloading(true)
        })

        .catch((error)=>{
            alert(error)
        })
    }, [])
    const handleDelete = async(id,nama)=>{
        if(window.confirm(`Yakin ingin hapus fakultas : ${nama} ?`)){
            try{
                await Axios.delete(`https://apimi5a.vercel.app/fakultas/${id}`)
                .then(window.location.reload())
            }
            catch(error){
                alert("Error: ",error)
            }
        }
    }

    return(
        <>
        <h2>Halaman List Fakultas</h2>
        <button className="btn btn-primary" onClick={()=>navigate('/fakultas/create')}>Tambah</button>
        {loading ?
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nama Fakultas</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {fakultas && fakultas.map((fakultas,index)=>{
                        return(<tr key={index}>
                            <td>{fakultas.nama}</td>
                            <td>
                                <NavLink to={`/fakultas/update/${fakultas._id}`} className="btn btn-sm btn-warning">Ubah</NavLink>&nbsp;
                                <button className="btn btn-sm btn-danger"  onClick={()=>handleDelete(fakultas._id, fakultas.nama)}>Hapus</button>
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
            :
                <div class="spinner-grow" role="status">
          </div>
        }
        </>
    )
}

export default List