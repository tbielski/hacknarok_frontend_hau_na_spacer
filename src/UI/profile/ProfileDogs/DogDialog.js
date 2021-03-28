import React from "react";
import {
  Dialog,
  DialogTitle,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import EditDog from "./EditDog";

function Info(dog) {
  return (
    <>
      <Typography gutterBottom>
        <b>Imię psa</b>: {dog.dog.dogName}
      </Typography>
      <Typography gutterBottom>
        <b>Wiek psa</b>: {dog.dog.dogAge}
      </Typography>
      <Typography gutterBottom>
        <b>Opis psa</b>: {dog.dog.describeDog}
      </Typography>
      <Typography gutterBottom>
        <b>Stosunek do innych psów</b>: {dog.dog.attitude}
      </Typography>
      <Typography gutterBottom>
        <b>Rasa</b>: {dog.dog.breed}
      </Typography>
    </>
  );
}


function DogDialog({ dog, handleClose }) {
  const [edit, setEdit] = React.useState(false);

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
            <DialogTitle id="simple-dialog-title">{dog.dogName}</DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={`https://dummyimage.com/640x4:3&text=${dog.dogName}`}
                alt={dog.dogId}
                height={300}
                width={300}
              />
            </Grid>
            <Grid item xs={12} style={{ margin: "2%" }}>
              {edit ? <EditDog dog={dog} handleClose={handleClose} /> : <Info dog={dog} />}
            </Grid>
            <Grid item xs={12} style={{ margin: "2%" }}>
              {!edit ? <Button size="small" color="primary" onClick={() => setEdit(prev => !prev)}>
                Edytuj
              </Button> : null}
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default DogDialog;
