import { Box, TextField } from "@mui/material";

interface MessageProps {
  changeMessage: (message: string) => void;
}

function Commentaire(props: MessageProps) {
  const { changeMessage } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <TextField sx={{ flex: 1 }} label="Commentaire" multiline required onChange={(e) => changeMessage(e.target.value)}/>
    </Box>
  );
}

export default Commentaire;
