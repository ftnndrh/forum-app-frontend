import {
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import ErrorAlert from "../ErrorAlert";
import { loginUser } from "../../helpers/authHelper";

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <Container maxWidth={"xs"} sx={{ mt: 6 }}>
      <Stack alignItems="center">
        <Typography variant="h2" sx={{ mb: 6, textAlign: "center" }}>
          <Stack alignItems="center">
            <img
              src="https://codebridge.my/static/media/cb-logo.3d7cfc27.svg"
              alt="logo"
              width="100"
              height="100"
            />
            <Link href="/" underline="none">
              <b>CodeBridge Forum</b>
            </Link>
          </Stack>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Typography color="text.secondary">
          Don't have an account yet? <Link href="/signup">Sign Up</Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            autoFocus
            required
            id="email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            id="password  "
            name="password"
            onChange={handleChange}
            type="password"
          />

          <ErrorAlert error={serverError} />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            Login
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;
