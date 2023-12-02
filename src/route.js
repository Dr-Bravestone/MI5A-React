import React from "react";

const Home=React.lazy(()=>import('./Home'))
const List=React.lazy(()=>import('./Fakultas/List'))
const Detail=React.lazy(()=>import('./Fakultas/Detail'))
const Create=React.lazy(()=>import('./Fakultas/Create'))
const Update=React.lazy(()=>import('./Fakultas/Update'))

const routes=[
    {path:'/',Component:Home},
    {path:'/fakultas',Component:List},
    {path:'/fakultas/detail/:fakultasId',Component:Detail},
    {path:'/fakultas/create',Component:Create},
    {path:'/fakultas/update/:fakultasId',Component:Update},
]

export default routes;