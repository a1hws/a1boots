import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

const Payment = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange
}) => {
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const checkPasswordStrength = (password) => {
    // Password strength logic goes here
    // You can implement your own password strength validation or use a library

    // Example: Simple password length check
    if (password.length < 6) {
      return "Weak";
    } else if (password.length < 8) {
      return "Moderate";
    } else {
      return "Strong";
    }
  };

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const strength = checkPasswordStrength(password);
    setPasswordStrength(strength);
    handleChange(e);

    // Compare password with verify password
    const verifyPassword = values.verifyPassword;
    setPasswordMatch(password === verifyPassword);
  };

  const handleVerifyPasswordChange = (e) => {
    const verifyPassword = e.target.value;
    handleChange(e);

    // Compare password with verify password
    const password = values.password;
    setPasswordMatch(password === verifyPassword);
  };

  return (
    <Box m="30px 0">
      {/* CONTACT INFO */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Create Account
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="text"
          label="Phone Number"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          onBlur={handleBlur}
          onChange={handlePasswordChange}
          value={values.password}
          name="password"
          error={!!touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          sx={{ gridColumn: "span 4", marginBottom: "25px" }}
        />
        <Typography>{passwordStrength}</Typography>
        <TextField
          fullWidth
          type="password"
          label="Verify Password"
          onBlur={handleBlur}
          onChange={handleVerifyPasswordChange}
          value={values.verifyPassword}
          name="verifyPassword"
          error={!!touched.verifyPassword && !!errors.verifyPassword}
          helperText={touched.verifyPassword && errors.verifyPassword}
          sx={{ gridColumn: "span 4", marginBottom: "15px" }}
        />
        {!passwordMatch && (
          <Typography color="error">
            Password and Verify Password do not match
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Payment

