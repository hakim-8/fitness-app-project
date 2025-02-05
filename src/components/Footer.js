import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundColor: "rgb(40, 40, 60)",
        color: "#fff",
        py: 4,
        px: 2,
        position: "relative",
        left: "-20px",
        top: "60px",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          fontSize: "12px",
          color: "gray",
          mt: 2,
        }}
      >
        Disclaimer: This website is a portfolio project and is not intended for
        real-world use. All content including contact details is fictional. The
        social media links direct to placeholder pages, and the map location
        displayed is not real.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        {/* Contact Section */}
        <Box>
          <Typography variant="h6" mb={2}>
            Contact Us
          </Typography>
          <Typography>123 Gym Street</Typography>
          <Typography>Fitness Town, FT 12345</Typography>
          <Typography>Email: contact@gymapp.com</Typography>
          <Typography>Phone: +1 (123) 456-7890</Typography>
        </Box>

        {/* Social Media Section */}
        <Box>
          <Typography variant="h6" mb={2}>
            Follow Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton
              color="inherit"
              href="https://facebook.com"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://instagram.com"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>

        {/* Google Maps Embed */}
        <Box sx={{ width: { xs: "100%", md: "300px" }, height: "200px" }}>
          <Typography variant="h6" mb={2}>
            Visit Us
          </Typography>
          <iframe
            title="Google maps image"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577626.730165231!2d23.31458829998712!3d25.284266376768493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE3JzAzLjQiTiAyM8KwMTgnNTUuNiJF!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Box>
      </Stack>

      <Typography variant="body2" textAlign="center" mt={4}>
        © {new Date().getFullYear()} Gym App. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
