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
            addressCity: "",
            addressDistrict: "",
            addressDetails: "",
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
                                value={formik.values.dogId}
                                onChange={formik.handleChange}
                                label="Pies"
                                inputProps={{
                                    name: "attitude",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                <option aria-label="None" value="" />
                                {user.dogsArray.map((dog) => (
                                    <option value={dog._id}>
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
                                Pies
                            </InputLabel>
                            <Select
                                native
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                label="Miasto"
                                inputProps={{
                                    name: "attitude",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
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
                                Pies
                            </InputLabel>
                            <Select
                                native
                                value={formik.dogId}
                                onChange={formik.handleChange}
                                label="Pies"
                                inputProps={{
                                    name: "attitude",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                {formik.values.city == "Gdańsk"}
                                <option aria-label="None" value="Gdynia">
                                    Gdynia
                                </option>
                                <option aria-label="None" value="Gdańsk">
                                    Gdańsk
                                </option>
                            </Select>
                        </FormControl>

                        <TextField
                            style={{ margin: "10%" }}
                            id="standard-multiline-flexible"
                            label="Kontakt"
                            multiline
                            name="contact"
                            rowsMax={4}
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            type="number"
                            style={{ margin: "10%" }}
                            id="standard-multiline-flexible"
                            label="Wiek"
                            name="dogAge"
                            value={formik.values.dogAge}
                            onChange={formik.handleChange}
                        />
                        <TextField
                            style={{ margin: "10%" }}
                            id="standard-multiline-flexible"
                            label="Rasa"
                            multiline
                            name="breed"
                            rowsMax={4}
                            value={formik.values.breed}
                            onChange={formik.handleChange}
                        />

                        <TextField
                            style={{ margin: "10%" }}
                            id="standard-multiline-flexible"
                            label="opis"
                            multiline
                            name="describeDog"
                            rowsMax={4}
                            value={formik.values.describeDog}
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
