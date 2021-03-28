import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogTitle,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { volunteer } from '../../ducks/posts/postsActions';

function PostDialog({ post, handleClose, user, photo }) {
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
            <DialogTitle id="simple-dialog-title">
              {post.dogId.dogName}
            </DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={photo}
                alt={post.postId}
                height={300}
                width={300}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "2%" }}>
              <Typography gutterBottom>
                <b>Ogłoszenie</b>: {post.describePost}
              </Typography>
              <Typography gutterBottom>
                <b>Miasto</b>: {post.adressCity}
              </Typography>
              <Typography gutterBottom>
                <b>Dzielnica</b>: {post.adressDistrict}
              </Typography>
              <Typography gutterBottom>
                <b>Zapłata</b>: {post.price}
              </Typography>
              <Typography gutterBottom>
                <b>Czas wyjścia</b>: {post.time}
              </Typography>
              <Typography gutterBottom>
                <b>Imię psa</b>: {post.dogId.dogName}
              </Typography>
              <Typography gutterBottom>
                <b>Wiek psa</b>: {post.dogId.dogAge}
              </Typography>
              <Typography gutterBottom>
                <b>Opis psa</b>: {post.dogId.describeDog}
              </Typography>
              <Typography gutterBottom>
                <b>Stosunek do innych psów</b>: {post.dogId.attitude}
              </Typography>
              <Typography gutterBottom>
                <b>Rasa</b>: {post.dogId.breed}
              </Typography>
              <Typography gutterBottom>
                <b>Kontakt</b>: {post.contact}
              </Typography>
              {Object.keys(user).length !== 0 ? 
              <Button size="small" color="primary" onClick={() => volunteer(user._id, post._id)}>
                Zgłoś się!
              </Button>
              : null}
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}


const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(PostDialog);
