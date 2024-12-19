import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Grid,
} from "@mui/material";

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url("https://via.placeholder.com/1920x1080")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        color: "white",
      }}
    >
      {/* Semi-transparent overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      />
      {/* Hero Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Main Headline */}
        <Typography
          variant="h2"
          className="font-bold mb-4"
          sx={{ fontWeight: 700 }}
        >
          Find the Perfect Product for You
        </Typography>
        {/* Subheading */}
        <Typography
          variant="h6"
          className="font-light mb-6"
          sx={{ maxWidth: "600px", margin: "0 auto" }}
        >
          Discover top deals, trending products, and more. Shop the best deals
          today!
        </Typography>
        {/* Search Bar and Button */}
        <Box
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          sx={{ marginTop: 4 }}
        >
          <TextField
            variant="outlined"
            placeholder="Search for products..."
            fullWidth
            className="bg-white rounded-md"
            InputProps={{
              style: { backgroundColor: "#fff", borderRadius: "8px" },
            }}
            sx={{
              width: { xs: "100%", md: "50%" },
            }}
          />
          <Button
            variant="contained"
            className="rounded-md"
            sx={{
              backgroundColor: "#ff5722",
              "&:hover": { backgroundColor: "#e64a19" },
              padding: "10px 20px",
            }}
          >
            Search
          </Button>
        </Box>
        {/* Promotional Highlights */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 6,
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <Grid item xs={12} sm={4}>
            <Box
              className="flex flex-col items-center"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Free Shipping
              </Typography>
              <Typography
                variant="body2"
                className="text-center mt-2"
                sx={{ maxWidth: "200px" }}
              >
                Enjoy free shipping on all orders above $50.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className="flex flex-col items-center"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Seasonal Sale
              </Typography>
              <Typography
                variant="body2"
                className="text-center mt-2"
                sx={{ maxWidth: "200px" }}
              >
                Up to 50% off on select categories.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              className="flex flex-col items-center"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                24/7 Support
              </Typography>
              <Typography
                variant="body2"
                className="text-center mt-2"
                sx={{ maxWidth: "200px" }}
              >
                We're here to help, anytime you need us.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
