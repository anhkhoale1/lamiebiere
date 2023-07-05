import { Typography, TextField, Box } from "@mui/material";
import React, { useState, ChangeEvent } from "react";
import { validateEmail } from "../utils/validateEmail";

interface UserInfoProps {
  changeFirstName: (firstName: string) => void;
  changeName: (name: string) => void;
  changeEmail: (email: string) => void;
}

function UserInfo(props: UserInfoProps) {
  const { changeFirstName, changeName, changeEmail } = props;
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    changeEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>Information personnelle</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: "1rem",
          }}
        >
          <TextField
            label="Nom"
            variant="outlined"
            required
            onChange={(e) => changeName(e.target.value)}
            sx={{ flex: 1 }}
          />
          <TextField
            label="Prénom"
            variant="outlined"
            onChange={(e) => changeFirstName(e.target.value)}
            sx={{ flex: 1 }}
            required
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <TextField
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
            error={email !== "" && !isEmailValid}
            required
            sx={{ flex: 1 }}
          />
        </Box>
      </Box>
    </>
  );
}

export default UserInfo;
