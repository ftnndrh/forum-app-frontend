import { Link, Typography } from "@mui/material";
import React from "react";

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2 }}>
      <Link href="/">BACK TO POSTS</Link>
    </Typography>
  );
};

export default GoBack;
