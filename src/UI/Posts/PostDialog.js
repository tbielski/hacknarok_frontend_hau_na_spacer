import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";

function PostDialog({ post, handleClose }) {
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
            <DialogTitle id="simple-dialog-title">{post.dog.name}</DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={post.dog.photo}
                alt={post.postId}
                height={300}
                width={300}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "2%" }}>
              <Typography gutterBottom>
                <b>Imię</b>: {post.dog.name}
              </Typography>
              <Typography gutterBottom>
                <b>Wiek</b>: {post.dog.age}
              </Typography>
              <Typography gutterBottom>
                <b>Opis</b>: {post.dog.describe}
              </Typography>
              <Typography gutterBottom>
                <b>Stosunek do innych psów</b>: {post.dog.attitude}
              </Typography>
              <Typography gutterBottom>
                <b>Rasa</b>: {post.dog.breed}
              </Typography>
              <Typography gutterBottom>
                <b>Ogłoszenie</b>: {post.text}
              </Typography>
              <Button size="small" color="primary">
                Zgłoś się!
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default PostDialog;
