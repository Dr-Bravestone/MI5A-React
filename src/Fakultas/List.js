import React, { useEffect, useState } from "react";
import Axios from "axios"
const List=()=>{
    const [fakultas, setfakultas] = useState([])

    useEffect(() => {
      Axios.get("https://apimi5a.vercel.app/fakultas")
        .then((res)=>{
            setfakultas(res.data)
            console.log(res.data);
        })

        .catch((error)=>{
            alert(error)
        })
    }, [])
    

    return(
        <>
        <h2>Halaman List Fakultas</h2>
            <table className="table table-strip">
                <thead>
                    <tr>
                        <th>Nama Fakultas</th>
                    </tr>
                </thead>
                <tbody>
                    {fakultas && fakultas.map((fakultas,index)=>{
                        return(<tr>
                            <td>{fakultas.nama}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </>
    )
}

export default List