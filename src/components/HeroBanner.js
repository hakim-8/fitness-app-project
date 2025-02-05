import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '150px', xs: '70px' },
        paddingBottom: {lg: '250px'},
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        alignItems: { lg: 'flex-start', xs: 'center' },
        gap: { lg: '20px', xs: '30px' }, // Adds spacing between items
      }}
      position="relative"
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { lg: 'flex-start', xs: 'center' },
          textAlign: { xs: 'center', lg: 'left' }, // Center text on smaller screens
          maxWidth: { lg: '50%', xs: '100%' }, // Limit width on larger screens
        }}
      >
        <Typography color="#FF2625" fontWeight="26px" fontSize="30px" sx={{position:{lg:'relative'},left:{lg:'100px'}}}>
          Fitness Club
        </Typography>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: '40px', xs: '35px' },
            color: 'whitesmoke',
            textTransform: 'capitalize',
          }}
          mb="23px"
          mt="30px"
          textAlign="center"
        >
          Strength in every step <br /> power in every rep
        </Typography>
        <Typography 
        fontSize="22px" 
        lineHeight="35px" 
        mb={4} 
        sx={{ 
            color: 'whitesmoke', 
            position: {lg:'relative'},
            left: {lg:'20px'} 
        }}>
          Check out the most effective exercises
        </Typography>
        <Button
          component={Link}
          to="/workout-quiz"
          variant="contained"
          color="error"
          sx={{
            backgroundColor: '#ff2625',
            padding: '15px',
            position: {lg:'relative'},
            left: {lg:'50px'}
          }}
        >
          Get a personalized workout plan
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: { lg: 'flex-end', xs: 'center' },
        }}
      >
        <Typography
          fontWeight={600}
          color="#ff2625"
          sx={{
            opacity: 0.1,
            display: { lg: 'block', xs: 'none' },
            color: 'whitesmoke',
            position: {lg: 'relative'},
            top: {lg:'350px'},
            left: {lg: '-200px'}
          }}
          fontSize="200px"
          textTransform="uppercase"
        >
          Exercise
        </Typography>
        <img
            src={HeroBannerImage}
            alt="banner"
            className="hero-banner-img"
            sx={{
                display: { xs: 'none', lg: 'block' }, // Hides on small screens, shows on large screens
            }}
        />

      </Box>
    </Box>
  );
};

export default HeroBanner;
