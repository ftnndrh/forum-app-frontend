import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import "react-router-dom";
import { useNavigate } from "react-router-dom";

const PostContentBox = (props) => {
  const { clickable, post, editing } = props;
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      {clickable && !editing ? (
        <Box
          sx={{
            padding: theme.spacing(1),
            width: "100%",
            "&:hover": { backgroundColor: "grey.50", cursor: "pointer" },
          }}
          onClick={() => navigate("/posts/" + post._id)}
        >
          {props.children}
        </Box>
      ) : (
        <Box sx={{ padding: theme.spacing(1), width: "1000%" }}>
          {props.children}
        </Box>
      )}
    </>
  );
};

export default PostContentBox;
