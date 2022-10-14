import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { FormControlLabel, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useHistory } from "react-router-dom";
const useStyle = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
export default function Create() {
  const classes = useStyle();
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailsError(false);
    setTitleError(false);
    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        create a new note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Text note"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel>note caterogy</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Remindedr"
            />
          </RadioGroup>
        </FormControl>
        <Button
          // className={classes.btn}
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
          onClick={handleSubmit}
        >
          submit
        </Button>
      </form>
      {/* <Button type="submit">submit</Button>
      <Button type="submit" color="secondary" variant="outlined">
        submit
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup> */}
      <br />
      {/* <AcUnitOutlinedIcon />
      <AcUnitOutlinedIcon color="secondary" fontSize="large" />
      <AcUnitOutlinedIcon color="secondary" fontSize="small" />
      <AcUnitOutlinedIcon color="action" fontSize="small" />
      <AcUnitOutlinedIcon color="error" />
      <AcUnitOutlinedIcon color="disable" /> */}
    </Container>
  );
}