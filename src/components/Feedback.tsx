import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Commentaire, Question, UserInfo } from './';

function Feedback() {
  const [feedBackType, setFeedbackType] = useState("commentaire");
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const changeFirstName = (firstName: string): void => {
    if (firstName)
      setFirstName(firstName);
  }

  const changeName = (name: string): void => {
    if (name)
      setName(name);
  }

  const changeEmail = (email: string): void => {
    if (email)
      setEmail(email);
  }

  const changeMessage = (message: string): void => {
    if (message)
      setMessage(message);
  }

  const handleSubmit = () => {
    console.log(firstName, name, email, message);
  }

  return (
    <div>
      <UserInfo changeFirstName={changeFirstName} changeName={changeName} changeEmail={changeEmail}/>
      <FormControl sx={{ margin: '1rem 0' }}>
        <FormLabel>
          Type d'avis
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={(e) => setFeedbackType(e.target.value)}
          defaultValue="commentaire"
        >
          <FormControlLabel
            value="commentaire"
            control={<Radio />}
            label="Commentaire"
          />
          <FormControlLabel
            value="question"
            control={<Radio />}
            label="Question"
          />
        </RadioGroup>
      </FormControl>
      <Box>
        {feedBackType === "commentaire" ? <Commentaire changeMessage={changeMessage} /> : <Question changeMessage={changeMessage} />}
      </Box>
      <Button sx={{marginTop: '1rem'}} variant="contained" onClick={handleSubmit}>Envoyer</Button>
    </div>
  );
}

export default Feedback;
