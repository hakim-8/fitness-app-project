import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import {allExercises} from "../utils/allexercises"

import Detail from '../components/Detail'
import SimilarExercises from '../components/similarExercises'


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [similarExercisesByTargetMuscle, setSimilarExercisesByTargetMuscle] = useState([])
  const [similarExercisesByEquipment, setSimilarExercisesByEquipment] = useState([])
  const { id } = useParams();

  useEffect (()=>{
    const selectedExercise = allExercises.find((exercise) => exercise.id === parseInt(id));

    setExerciseDetail(selectedExercise || {});

    if (selectedExercise) {
      const similarExercisesTarget = allExercises.filter(
        (exercise) => exercise.bodyPart === selectedExercise.bodyPart && exercise.id !== selectedExercise.id
      ).slice(0, 4);
      const similarExercisesEquipment = allExercises.filter(
        (exercise) => exercise.equipment === selectedExercise.equipment && exercise.id !== selectedExercise.id
      ).slice(0, 4);
      setSimilarExercisesByTargetMuscle(similarExercisesTarget);
      setSimilarExercisesByEquipment(similarExercisesEquipment)
    }

    window.scrollTo(0, 0);

  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <SimilarExercises exerciseDetail={exerciseDetail} similarExercisesByTargetMuscle={similarExercisesByTargetMuscle} similarExercisesByEquipment={similarExercisesByEquipment} />
    </Box>
  )
}

export default ExerciseDetail