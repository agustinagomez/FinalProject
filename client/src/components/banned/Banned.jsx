import { Box, Button } from '@mui/material'
import React from 'react'
import { Arrow } from '../componentsIcons'
import style from "./banned.module.css"
import { useNavigate } from 'react-router-dom'


const Banned = ({user}) => {
  const navigate = useNavigate()
  
  return (
    <Box className={style.banned}>
      <Button onClick={()=> navigate("/")} className={style.arrow}><Arrow /></Button>

        <Box className={style.titleContainer}>
        <h1>You account are banned</h1>
        </Box>

        <Box>
        <h2>Reason:</h2><h3 style={{color:"white"}}>{user?.reasonBan}</h3>
        </Box>

    </Box>
  )
}

export default Banned