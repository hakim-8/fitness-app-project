import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from "../assets/icons/body-part.png"
import EquipmentImage from "../assets/icons/equipment.png"

const Detail = ({ exerciseDetail }) => {
  const embedUrl = exerciseDetail.videoUrl ? exerciseDetail.videoUrl.replace("watch?v=", "embed/") : '';
  return (
    <>
      <Stack
        gap="100px"
        sx={{
          flexDirection: { lg: 'row', xs: 'column' }, // Stacked on small screens, row on large
          p: '20px',
          width: '100%', // Ensure container takes full width
        }}
      >
        <Stack
          sx={{
            width: { lg: '45%', xs: '100%' }, // Full width on small screens
            flexDirection: "column",
            p: '20px',
          }}
        >
          <iframe
            width="100%" // Responsive width
            height="400px" // Allow height to adjust based on width
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: '10px',
              maxWidth: '100%' // Ensure iframe doesn't overflow container
            }}
          ></iframe>
        </Stack>

        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "20px",
            width: { lg: '45%', xs: '100%' }, // Full width on small screens
          }}
        >
          <Typography
            sx={{
              color: 'whitesmoke',
              width: '100%',
            }}
            textTransform="uppercase"
            fontSize="35px"
            fontWeight="800"
            textAlign="center"
          >
            {exerciseDetail.name}
          </Typography>

          <Typography
            fontSize="15px"
            textAlign="center"
            width="100%" // Ensure description takes full width on small screens
            paddingTop="10px"
            paddingBottom="30px"
            sx={{ color: 'whitesmoke' }}
          >
            If you would like to target your {exerciseDetail.bodyPart}, try out the {exerciseDetail.name}, 
            {exerciseDetail.equipment === "bodyweight" 
              ? " this exercise requires no equipment." 
              : exerciseDetail.equipment === "dumbbells" 
              ? " this exercise requires a pair of dumbbells." 
              : ` this exercise requires a ${exerciseDetail.equipment}.`} 
            The {exerciseDetail.name} in addition to the {exerciseDetail.bodyPart} also targets {' '}
            {exerciseDetail.secondaryTarget && Array.isArray(exerciseDetail.secondaryTarget) && exerciseDetail.secondaryTarget.length > 1
              ? `${exerciseDetail.secondaryTarget.slice(0, -1).join(", ")} and ${exerciseDetail.secondaryTarget.slice(-1)}`
              : exerciseDetail.secondaryTarget && exerciseDetail.secondaryTarget.length === 1
              ? exerciseDetail.secondaryTarget[0]
              : "other muscle groups"}. Regular exercise boosts your physical health, strengthens muscles, and improves flexibility while enhancing mental well-being by reducing stress and boosting your mood. It's a powerful way to stay energized, build confidence, and improve your quality of life. Start moving today, your body and mind will thank you
          </Typography>

          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            alignItems="center"
            sx={{ 
              mt: 0.5,
              gap: { lg: '50px', xs: '30px' }, // Adjust gap between items for small screens
              width: '100%', // Ensure button container takes full width
              flexWrap: 'wrap', // Allow buttons to wrap if necessary on small screens
              justifyContent: 'center', // Center items on small screens
            }}
          >
            <Stack spacing={2} alignItems="center">
              <img
                style={{
                  borderRadius: "10px",
                  backgroundColor: "whitesmoke",
                }}
                height="40px" // Reduced size on small screens
                width="40px"  // Reduced size on small screens
                src={EquipmentImage}
                alt="Equipment"
              />
              <Button
                sx={{
                  backgroundColor: "#ff2625",
                  borderRadius: "20px",
                  height: "30px",
                  minWidth: "100px", // Minimum width for buttons
                  "&:hover": {
                    backgroundColor: "#ff2625",
                    boxShadow: "none",
                    cursor: "default",
                  },
                }}
              >
                <Typography sx={{ color: 'whitesmoke' }} textTransform="capitalize" fontWeight="500" fontSize="16px">
                  {exerciseDetail.equipment}
                </Typography>
              </Button>
            </Stack>

            <Stack spacing={2} alignItems="center">
              <img
                style={{
                  borderRadius: "10px",
                  backgroundColor: "whitesmoke",
                }}
                height="40px" // Reduced size on small screens
                width="40px"  // Reduced size on small screens
                src={BodyPartImage}
                alt="Target muscles:"
              />
              <Button
                sx={{
                  backgroundColor: "#ff2625",
                  borderRadius: "20px",
                  height: "30px",
                  minWidth: "100px", // Minimum width for buttons
                  "&:hover": {
                    backgroundColor: "#ff2625",
                    boxShadow: "none",
                    cursor: "default",
                  },
                }}
              >
                <Typography sx={{ color: 'whitesmoke' }} textTransform="capitalize" fontWeight="500" fontSize="16px">
                  {exerciseDetail.bodyPart}
                </Typography>
              </Button>
            </Stack>
          </Stack>

          {/* If secondary targets exist, display them in a row */}
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 2 }}>
            {exerciseDetail.secondaryTarget &&
              Array.isArray(exerciseDetail.secondaryTarget)
                ? exerciseDetail.secondaryTarget.map((target, index) => (
                    <Button
                      key={index}
                      sx={{
                        fontSize: "18px",
                        backgroundColor: "navajowhite",
                        height: '25px',
                        color: "black",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "navajowhite",
                        },
                      }}
                    >
                      {target}
                    </Button>
                  ))
                : ""}
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Detail
