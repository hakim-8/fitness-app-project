import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.imageUrl} alt={exercise.name} loading='lazy' />
      <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
        <Button sx={{
          p: "20px",
          color: "#fff",
          background: "#ffa9a9",
          fontSize: '14px',
          height: '20px',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}>
          {exercise.bodyPart}
        </Button>
      </Stack>
      <Typography ml="21px" color="000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px" textAlign="center">
        {exercise.name}
      </Typography>
  </Link>

  )
}

export default ExerciseCard