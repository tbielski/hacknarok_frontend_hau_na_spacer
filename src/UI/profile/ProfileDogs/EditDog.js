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
import actions from "../../../ducks/users/usersActions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: "60%",
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const EditDog = ({ dog, editDog, handleClose }) => {
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
            dogName: dog.dogName,
            dogAge: dog.dogAge,
            breed: dog.breed,
            attitude: dog.attitude,
            describeDog: dog.describeDog,
        },
        onSubmit: (values) => {
            editDog(dog._id, values);
            handleClose();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container justify="center" spacing={0}>
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
                        style={{ margin: "1%" }}
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
                        style={{ margin: "1%" }}
                        id="standard-multiline-flexible"
                        label="Wiek"
                        name="dogAge"
                        value={formik.values.dogAge}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        style={{ margin: "1%" }}
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
                            <option value={"neutralny"}>Neutralny</option>
                            <option value={"pozytywny"}>Pozytywny</option>
                            <option value={"agresywny"}>Agresywny</option>
                        </Select>
                    </FormControl>
                    <TextField
                        style={{ margin: "1%" }}
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
                    style={{ width: "50%", marginBottom: "5%" }}
                    type="submit"
                >
                    Zapisz
                </Button>
            </Grid>
        </form>
    );
};
export default connect(null, { editDog: actions.editDog })(EditDog);
