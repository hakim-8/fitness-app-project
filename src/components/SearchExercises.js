import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';

import { allExercises } from '../utils/allexercises';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const bodyPartList = ['core', 'back', 'biceps', 'chest', 'calves', 'cardio', 'glutes', 'hamstring', 'quads', 'shoulders', 'triceps'];

  useEffect(() => {
    setBodyParts(['all', ...bodyPartList]); 
    setExercises([...allExercises])
  }, []);

  const handleSearch = () => {
    if (search) {
      const searchedExercises = allExercises.filter(
        (item) => {
        return (
          (item.name && item.name.toLowerCase().includes(search)) ||
          (item.bodyPart && item.bodyPart.toLowerCase().includes(search)) ||
          (item.equipment && item.equipment.toLowerCase().includes(search))
        )
        });

      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="5px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, color:'whitesmoke' }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
