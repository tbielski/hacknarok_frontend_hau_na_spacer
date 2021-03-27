import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PostsManager() {
  const classes = useStyles();
  const [city, setCity] = React.useState("");
  const [price, setPrice] = React.useState([10, 50]);
  const [attitude, setAttitude] = React.useState("");

  const postLizard = {
    postId: 0,
    text: "Hejka! Mój Ciapek potrzebuje opiekuna spacerów!",
    applicationUsers: [1],
    contact: "123456789",
    adressCity: "Gdynia",
    adressDistrict: "Dabrowa",
    adressDetails: "Truskawkowa 12/3",
    time: "2h",
    authorId: 'Hela',
    dog: {
      name: "Lizard",
      photo:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      age: 2,
      describe: 'Biedronka jest wesołym pieskiem, lubi długie spacery. Jej hobby jest gonienie gołębi.',
      attitude: 'pozytywny',
      breed: 'kundelek'
    },
    price: "bezplatnie",
  };

  const postLadyBug = {
    postId: 1,
    text: "Hejka! Moja Biedronka potrzebuje opiekuna spacerów!",
    applicationUsers: [1],
    contact: "123456789",
    adressCity: "Gdynia",
    adressDistrict: "Dabrowa",
    adressDetails: "Truskawkowa 12/3",
    time: "2h",
    authorId: 'Marcin',
    dog: {
      name: "Biedronka",
      photo:
        "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-mobileMasterAt3x-v2.jpg",
        age: 2,
        describe: 'Biedronka jest wesołym pieskiem, lubi długie spacery. Jej hobby jest gonienie gołębi.',
        attitude: 'pozytywny',
        breed: 'kundelek'
    },
    price: "bezplatnie",
  };

  const posts = [postLizard, postLadyBug];

  const handlePriceChange = (event, newValue) => {
    setPrice(newValue);
  };

  return (
    <div style={{ marginTop: "1%", margin: "2%" }} className="Posts">
      <Grid container justify="center">
        <Grid item container justify="center" xs={12} md={10} spacing={2}>
          <Grid item xs={12} md={2}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel htmlFor="outlined-age-native-simple">
                Miasto
              </InputLabel>
              <Select
                native
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="miasto"
                inputProps={{
                  name: "city",
                  id: "outlined-city-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <optgroup label="Gdańsk">
                  <option value="all">Całe miasto</option>
                  <option value="oliwa">Oliwa</option>
                  <option value="przymorze">Przymorze</option>
                </optgroup>
                <optgroup label="Gdynia">
                  <option value="all">Całe miasto</option>
                  <option value="redlowo">Redłowo</option>
                  <option value="witomino">Witomino</option>
                </optgroup>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} xs={12}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel htmlFor="outlined-attitude-native-simple">
                Stosunek do innych psów
              </InputLabel>
              <Select
                native
                value={attitude}
                onChange={(e) => setAttitude(e.target.value)}
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
          </Grid>
          <Grid item md={2} xs={12}>
            <FormControl fullWidth>
              <Typography id="range-slider" gutterBottom>
                Zapłata
              </Typography>
              <Slider
                value={price}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
              />
            </FormControl>
          </Grid>
          <Grid item md={1} style={{ marginLeft: "2%", alignSelf: "center" }}>
            <Button variant="outlined" color="primary">
              Szukaj
            </Button>
          </Grid>
          <Grid item container md={12} xs={12} style={{ marginTop: "5%" }} spacing={2} justify='center'>
            {posts.map((p) => (
              <Grid item md = {3} key={p.postId}>
                <Post post={p} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
