import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        gap: { sm: "122px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
        height: { lg: "90px", sm: "50px" },
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "70px",
            height: "70px",
            margin: "0px 20px",
            position: 'relative',
            left: '-40px',
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-start"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#FF2625",
            borderBottom: location.pathname === "/" ? "3px solid #FF2625" : "none",
            paddingTop: '10px',
          }}
        >
          Home
        </Link>
        <Link
          to="/workout-quiz"
          style={{
            textDecoration: "none",
            color: "#FF2625",
            borderBottom: location.pathname === "/workout-quiz" ? "3px solid #FF2625" : "none",
            paddingTop: '10px',
            textTransform: "capitalize",
          }}
        >
          Personalized Workout Plan
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
