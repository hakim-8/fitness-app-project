import React from 'react'
import { Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'


const SimilarExercises = ({ similarExercisesByTargetMuscle, similarExercisesByEquipment }) => {
    console.log(similarExercisesByEquipment)
  return (
    <Stack
        sx={{
            direction:'column'
        }}
    >
        <Typography sx={{color: 'whitesmoke'}} paddingTop="30px" textTransform="capitalize" fontSize="30px">Exercises that target the same muscle group</Typography>
        <div style={{ width: '100%', height: '4px', backgroundColor: 'whitesmoke', marginBottom: "40px", marginTop: '10px' }}></div>
        <Stack sx={{ flexDirection: 'row' }}>
            {similarExercisesByTargetMuscle.length ? (
                similarExercisesByTargetMuscle.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))
                
            ) : (
                <Typography>We cannot find any other exercises that target the same muscle</Typography>
            )}
        </Stack>
        <Typography sx={{color: 'whitesmoke'}} paddingBottom="30px" paddingTop="30px" textTransform="capitalize" fontSize="30px">Exercises that use the same equipment</Typography>
        <div style={{ width: '100%', height: '4px', backgroundColor: 'white', marginBottom: "40px", marginTop: '10px' }}></div>
        <Stack sx={{ flexDirection: 'row' }}>
            {similarExercisesByEquipment.length ? (
                similarExercisesByEquipment.map((exercise) => (
                    <ExerciseCard key={exercise.id} exercise={exercise} />
                ))
                
            ) : (
                <Typography sx={{color: 'whitesmoke'}}>We cannot find any other exercises that include the same equipment</Typography>
            )}
        </Stack>
    </Stack>
  )
}

export default SimilarExercises;