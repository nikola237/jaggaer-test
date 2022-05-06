import React from "react";

import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const AddToCart = () => {
  return (
    <Box>
      <TextField
        type="number"
        ariant="filled"
        size="small"
        defaultValue="1"
        sx={{
          width: 80,
          mr: 1
        }}
      />
      <Typography
        variant="body2"
        component="span"
        sx={{
          mr: 2
        }}
      >
        PCE
      </Typography>
      <Button variant="contained">Add to cart</Button>
    </Box>
  );
};
