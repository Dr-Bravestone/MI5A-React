import React, { useEffect, useState } from "react";
import Axios from "axios"
const List=()=>{
    const [prodi, setprodi] = useState([])

    useEffect(() => {
      Axios.get("https://apimi5a.vercel.app/prodi")
        .then((res)=>{
            setprodi(res.data)
            console.log(res.data);
        })

        .catch((error)=>{
            alert(error)
        })
    }, [])
    

    return(
        <>
        <h2>Halaman List prodi</h2>
            <table className="table table-strip">
                <thead>
                    <tr>
                        <th>Nama prodi</th>
                        <th>Nama fakultas</th>
                    </tr>
                </thead>
                <tbody>
                    {prodi && prodi.map((prodi,index)=>{
                        return(<tr>
                            <td>{prodi.nama}</td>
                            <td>{prodi.fakultas.nama}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default List