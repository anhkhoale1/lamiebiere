import { TextField } from '@mui/material'

interface MessageProps {
  changeMessage: (message: string) => void;
}

function Question(props: MessageProps) {
  const { changeMessage } = props;

  return (
    <>
      <TextField label="Question" multiline required onChange={(e) => changeMessage(e.target.value)} />
    </>
  )
}

export default Question