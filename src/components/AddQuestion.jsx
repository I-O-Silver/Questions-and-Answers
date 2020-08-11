import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

//  * Ask a Question Modal Form Elements/Details *
//  Access: Ask a question Modal should pop up when button is clicked

//  1. User Question (required) -
//    a. textarea
//    b. Max 1000 characters

//  2. User nickname (required)
//    a. input
//    b. Max 60 characters
//    c. placeholder = "Example: jackson11!"
//    d. text under = “For privacy reasons, do not use your full name or email address”

//  3. User email (required)
//    a. input (email)
//    c. placeholder = "Example: jack@email.com"
//    b. Max 60 characters
//    d. text under = “For authentication reasons, you will not be emailed”

//  4. Submit Button
//    a. button, should validate inputs when clicked
//    b. placeholder = “Why did you like the product or not?”
//    c. if any fields are invalid
//      i.  prevent submission
//      ii. give warning message = “You must enter the following: {...} ”
//    d. field is invalid if any required field is blank or email is not in correct format

const AddQuestion = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        onClick={handleClickOpen}
        endIcon={<AddIcon />}
      >
        ADD A QUESTION
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a Question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add a question for this product please enter a nickname and email
            address along with your question.
          </DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            required
            inputProps={{ maxLength: 60 }}
            placeholder="Example: jackson11!"
            helperText="For privacy reasons, do not use your full name or email address"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            required
            inputProps={{ maxLength: 60 }}
            placeholder="Example: jack@email.com"
            helperText="For authentication reasons, you will not be emailed"
          />
          <TextField
            id="standard-textarea"
            label="Question"
            rows={2}
            fullWidth
            multiline
            required
            inputProps={{ maxLength: 1000 }}
            placeholder="What is your question about the product?"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="inherit">
            Submit Question
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddQuestion;
