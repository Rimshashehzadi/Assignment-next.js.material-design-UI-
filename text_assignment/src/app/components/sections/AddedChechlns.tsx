import React from 'react'
import Wrapper from '../shared/Wrapper'
import { IconButton, Typography } from '@mui/material'
import ListIcon from '@mui/icons-material/List';
const AddedChechlns = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex justify-between 
     py-4  items-center   mt-2'>
          <Typography variant='h5' flexGrow={1}>
AddedChecklns
          </Typography>
          <IconButton><ListIcon/></IconButton>
            </div>
        </Wrapper>
    </section>
   
  )
}

export default AddedChechlns
