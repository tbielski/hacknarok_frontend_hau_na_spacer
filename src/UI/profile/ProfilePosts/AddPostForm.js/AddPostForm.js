import React from "react";
import {
    Dialog,
    DialogTitle,
    Grid,
    Button,
    TextField,
    Select,
    InputLabel,
    FormControl,
    makeStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { useFormik } from "formik";
import actions from "../../../../ducks/users/usersActions";
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        maxWidth: "60%",
        minWidth: "40%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const AddPostForm = ({ user, handleClose, addPost }) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            describePost: "",
            contact: "",
            adressCity: "",
            adressDistrict: "",
            adressDetails: "",
            time: "",
            price: "",
            authorId: user._id,
            dogId: "",
        },
        onSubmit: (values) => {
            addPost(values);
            handleClose(false);
        },
    });
    return (
        <Dialog
            open={true}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <form onSubmit={formik.handleSubmit}>
                <Grid container justify="center" spacing={0}>
                    <Grid item>
                        <DialogTitle id="simple-dialog-title">
                            Dodaj ogłoszenie
                        </DialogTitle>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="outlined-attitude-native-simple">
                                Pies
                            </InputLabel>
                            <Select
                                native
                                name="dogId"
                                value={formik.values.dogId}
                                onChange={formik.handleChange}
                                label="Pies"
                                inputProps={{
                                    name: "dogId",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                <option aria-label="None" value="" />
                                {user.dogsArray.map((dog) => (
                                    <option key={dog._id} value={dog._id}>
                                        {dog.dogName}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl
                            className={classes.formControl}
                            fullWidth
                        ></FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="outlined-attitude-native-simple">
                                Miasto
                            </InputLabel>
                            <Select
                                native
                                value={formik.values.adressCity}
                                onChange={formik.handleChange}
                                label="Miasto"
                                name="adressCity"
                                inputProps={{
                                    name: "adressCity",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                {" "}
                                <option aria-label="None" value="" />
                                <option aria-label="None" value="Gdynia">
                                    Gdynia
                                </option>
                                <option aria-label="None" value="Gdańsk">
                                    Gdańsk
                                </option>
                            </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="outlined-attitude-native-simple">
                                Dzielnica
                            </InputLabel>
                            <Select
                                native
                                value={formik.values.adressDistrict}
                                onChange={formik.handleChange}
                                label="Pies"
                                name="adressDistrict"
                                inputProps={{
                                    name: "adressDistrict",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                {" "}
                                <option aria-label="None" value="" />
                                {formik.values.adressCity === "Gdańsk" ? (
                                    <>
                                        <option aria-label="None" value="Oliwa">
                                            Oliwa
                                        </option>
                                        <option
                                            aria-label="None"
                                            value="Przymorze"
                                        >
                                            Przymorze
                                        </option>
                                    </>
                                ) : (
                                    <>
                                        <option aria-label="None" value="Redło">
                                            Redłowo
                                        </option>
                                        <option
                                            aria-label="None"
                                            value="Witomino"
                                        >
                                            Witomino
                                        </option>
                                    </>
                                )}
                            </Select>
                        </FormControl>
                        <TextField
                            style={{ margin: "3%" }}
                            id="standard-multiline-flexible"
                            label="Adres szczegółowy"
                            multiline
                            name="adressDetails"
                            rowsMax={4}
                            value={formik.values.adressDetails}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: "3%" }}
                            id="standard-multiline-flexible"
                            label="Czas"
                            multiline
                            name="time"
                            rowsMax={4}
                            value={formik.values.time}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: "3%" }}
                            id="standard-multiline-flexible"
                            label="Cena"
                            multiline
                            name="price"
                            rowsMax={4}
                            value={formik.values.price}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: "3%" }}
                            id="standard-multiline-flexible"
                            label="Numer Telefonu"
                            multiline
                            name="contact"
                            rowsMax={4}
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: "3%" }}
                            id="standard-multiline-flexible"
                            label="Opis"
                            multiline
                            name="describePost"
                            rowsMax={4}
                            value={formik.values.describePost}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Button
                        variant="outlined"
                        color="primary"
                        style={{ width: "80%", marginBottom: "5%" }}
                        type="submit"
                    >
                        Dodaj ogłoszenie!
                    </Button>
                </Grid>
            </form>
        </Dialog>
    );
};
export default connect(null, { addPost: actions.addPost })(AddPostForm);
