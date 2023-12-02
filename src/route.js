import React from "react";

const Home=React.lazy(()=>import('./Home'))
const List=React.lazy(()=>import('./Fakultas/List'))
const Detail=React.lazy(()=>import('./Fakultas/Detail'))
const Create=React.lazy(()=>import('./Fakultas/Create'))
const Update=React.lazy(()=>import('./Fakultas/Update'))

const prodiList=React.lazy(()=>import('./Prodi/List'))
const prodiDetail=React.lazy(()=>import('./Prodi/Detail'))
const prodiCreate=React.lazy(()=>import('./Prodi/Create'))
const prodiUpdate=React.lazy(()=>import('./Prodi/Update'))

const routes=[
    {path:'/',Component:Home},
    {path:'/fakultas',Component:List},
    {path:'/fakultas/detail/:fakultasId',Component:Detail},
    {path:'/fakultas/create',Component:Create},
    {path:'/fakultas/update/:fakultasId',Component:Update},

    // prodi
    {path:'/prodi',Component:prodiList},
    {path:'/prodi/detail/:prodiId',Component:prodiDetail},
    {path:'/prodi/create',Component:prodiCreate},
    {path:'/prodi/update/:prodiId',Component:prodiUpdate},
]

export default routes;