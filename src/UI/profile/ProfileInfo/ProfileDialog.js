import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";
import actions from "../../../ducks/users/usersActions";

function ProfileDialog({ handleClose, user, editUserDesc }) {
  const [desc, setDesc] = React.useState("");
  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Grid container justify="center">
          <Grid item>
            <DialogTitle id="simple-dialog-title">{"Ustaw opis"}</DialogTitle>
          </Grid>
          <Grid item xs={12} style={{ margin: "2%" }}>
            <TextField
              fullWidth
              id="outlined-textarea"
              label="Opis"
              placeholder="Co chcesz o sobie powiedzieć?"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              multiline
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} style={{ margin: "2%" }}>
            <Button size="small" color="primary" onClick={() =>{editUserDesc(user._id, desc); handleClose()}}>
              Zatwierdź
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => ({
    user: state.user,
  });

export default connect(mapStateToProps, { editUserDesc: actions.editUserDesc })(ProfileDialog);
