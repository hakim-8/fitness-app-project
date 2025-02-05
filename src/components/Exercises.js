import { useEffect, useState, React } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";

import ExerciseCard from "./ExerciseCard";
import { allExercises } from "../utils/allexercises";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    let filteredExercises = [...allExercises];
    if (bodyPart !== "all") {
      filteredExercises = filteredExercises.filter(item => item.bodyPart.includes(bodyPart));
    }
    setExercises(filteredExercises); 
  }, [bodyPart, setExercises]); 

  return (
    <Box sx={{ mt: { lg: '70px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px" sx={{color: "whitesmoke"}}>
        Showing Results
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard exercise={exercise} setExercises={setExercises} key={index} />
        ))}
      </Stack>
      <Stack mt="50px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                color: 'white', 
              },
              '& .Mui-selected': {
                backgroundColor: '#FF2625', 
                color: 'black', 
              },
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
