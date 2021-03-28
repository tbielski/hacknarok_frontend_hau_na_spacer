import React from "react";

import { Dialog, DialogTitle, Typography, Grid } from "@material-ui/core";
import ResponsesList from "./ResponsesList";

function PostDialog({ post, dog, handleClose }) {
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
                            <Typography gutterBottom>
                                <b>Kontakt</b>: {post.contact}
                            </Typography>
                            <ResponsesList responses={post.responses} />
                        </Grid>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
}

export default PostDialog;
