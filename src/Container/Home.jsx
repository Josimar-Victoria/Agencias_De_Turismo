import React, { useState } from "react";
import { Slinder } from "../components/Slinder";
import { ComentariCard } from "../components/ComentariCard";
import { ComentariForm } from "../components/ComentariForm";
import { ViajesGrid } from "../components/ViajesGrid";


export const Home = () =>{
    const [ListaTarea, setListaTarea] = useState([])

    const nuevaTarea = (tarea) => {
        setListaTarea([tarea, ...ListaTarea])
        console.log(ListaTarea);
    }
    const borrar = (id) => {
        const ListaFiltradas = ListaTarea.filter((e, index) => index !== id)
        setListaTarea(ListaFiltradas)
    }
    const atualuazarTareas = ( id, tarea) => {
        const ListaAtulizada = ListaTarea.map((e,index) => {
            if(index === id){
                e = tarea
            }
            return e;
        })
        setListaTarea(ListaAtulizada)
    }
    return (
    <>
        <Slinder/>
        <ViajesGrid/>
        <ComentariForm nuevaTarea={nuevaTarea}/>
        <div>
            {
                ListaTarea.map((e, index) => <ComentariCard
                                        tarea={e}
                                        borrar={borrar}
                                        id={index}
                                        atualuazarTareas={atualuazarTareas}
                                        />)
            }
        </div>
        
    </>
)
}