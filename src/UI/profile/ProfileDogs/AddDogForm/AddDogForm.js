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
        width: "60%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const AddDogForm = ({ user, handleClose, addDog }) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            dogName: "",
            dogAge: 0,
            breed: "",
            attitude: "",
            describeDog: "",
        },
        onSubmit: (values) => {
            addDog({ ...values, authorId: user._id });
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
                            Dodaj psa
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
                        <TextField
                            style={{ margin: "10%" }}
                            id="standard-multiline-flexible"
                            label="Imię"
                            multiline
                            name="dogName"
                            rowsMax={4}
                            value={formik.values.dogName}
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
                        <FormControl className={classes.formControl} fullWidth>
                            <InputLabel htmlFor="outlined-attitude-native-simple">
                                Stosunek do innych psów
                            </InputLabel>
                            <Select
                                native
                                value={formik.attitude}
                                onChange={formik.handleChange}
                                label="Stosunek do innych psów"
                                inputProps={{
                                    name: "attitude",
                                    id: "outlined-attitude-native-simple",
                                }}
                            >
                                <option aria-label="None" value="" />
                                <option value={"neutral"}>Neutralny</option>
                                <option value={"positive"}>Pozytywny</option>
                                <option value={"aggresive"}>Agresywny</option>
                            </Select>
                        </FormControl>
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
                        Dodaj psa!
                    </Button>
                </Grid>
            </form>
        </Dialog>
    );
};
export default connect(null, { addDog: actions.addDog })(AddDogForm);
