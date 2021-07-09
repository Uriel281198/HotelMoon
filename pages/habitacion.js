import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
import { api } from '../services/api';
import styled from 'styled-components';
export default function habitacion() {


  const router = useRouter();
const [dataHabitacion, setDataHabitacion] = useState({})
  useEffect(() => {
    console.log(router)

   if(router.query.id === undefined){
       
   }else{
    api.get(`classes/Habitaciones/${router.query.id}`)
    .then((res) => setDataHabitacion(res.data))
    .catch((err) => console.log(err))
   }
  },[router])

  
  return (
    <div>
      <p>{dataHabitacion.name} </p>
    </div>
  )
}

const Container = styled.div`
  
`;