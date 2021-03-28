import React from "react";
import {
    Dialog,
    DialogTitle,
    Typography,
    Grid,
    Button,
} from "@material-ui/core";

function DogDialog({ dog, handleClose }) {
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
                            {dog.dogName}
                        </DialogTitle>
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
                            <Typography gutterBottom>
                                <b>Imię psa</b>: {dog.dogName}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Wiek psa</b>: {dog.dogAge}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Opis psa</b>: {dog.describeDog}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Stosunek do innych psów</b>: {dog.attitude}
                            </Typography>
                            <Typography gutterBottom>
                                <b>Rasa</b>: {dog.breed}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}

export default DogDialog;
