import React from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

import { AddToCart } from "../AddToCart/AddToCart";
import Package from "../../assets/icons/package.svg";

import IconZoomIn from "../../assets/icons/zoom-in.svg";

export const ProductDetails = ({ product }) => {
  return (
    <Box
      className="page-section"
      sx={{
        py: 4
      }}
    >
      <Container
        sx={{
          ml: 0
        }}
      >

        <Grid
          container
          spacing={2}>

          {/* COL: LEFT  */}

          <Grid
            item
            md={6}
            sx={{
              display: "flex",
            }}
          >

            {/* thumbs */}
            <Box
              sx={{
                width: "35%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start-item",
                alignItems: "center",
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  border: "1px solid rgba(0,0,0,0.2)",
                  marginBottom: 4,
                }}
              >
                <Package style={{ width: 50, height: 50 }} />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 80,
                  height: 80,
                  border: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <Package style={{ width: 50, height: 50 }} />
              </Box>

            </Box>

            {/* Main image  */}
            <Box
              sx={{
                position: "relative",
                width: "65%",
                height: "350px",
                border: "1px solid rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Package style={{ flex: 1, width: 200, height: 200 }} />
              </Box>


              <IconButton
                sx={{
                  position: 'absolute',
                  right: '5px',
                  bottom: '5px'
                }}
              >
                <SvgIcon>
                  <IconZoomIn />
                </SvgIcon>
              </IconButton>


            </Box>
          </Grid>

          {/* COL: RIGHT  */}

          <Grid
            item
            md={6}
          >

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >

              <Typography
                variant="h6"
                component="div"
                gutterBottom>
                {product.title}
              </Typography>


              <Box
                sx={{
                  mt: 'auto'
                }}
              >
              <AddToCart />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
