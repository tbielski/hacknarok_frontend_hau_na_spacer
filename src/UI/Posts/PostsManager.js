import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Post from "./Post";

import { getAllPosts } from "../../ducks/posts/postsActions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function PostsManager({ getAllPosts, posts }) {
    React.useEffect(() => {
        getAllPosts();
    }, []);

    const classes = useStyles();
    const [city, setCity] = React.useState("");
    const [price, setPrice] = React.useState([10, 50]);
    const [attitude, setAttitude] = React.useState("");
    const photos = [
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
      "https://i.guim.co.uk/img/media/684c9d087dab923db1ce4057903f03293b07deac/205_132_1915_1150/master/1915.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=14a95b5026c1567b823629ba35c40aa0",
      "https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=700&quality=85&auto=format&fit=max&s=470657ebd2a0e704df88997d393aea15",
      "https://selfiedogs.files.wordpress.com/2017/04/image6.jpg",
      "https://www.doggoneseattle.org/wp-content/uploads/2014/05/DogGoneSeattle22-e1510427431363-500x500.jpg",
      "https://i.pinimg.com/originals/78/46/1b/78461bb236def12a3533c4187e5f1089.jpg"
    ]

    function search() {
        if (city) {
            return posts.filter((p) =>
                p.visible &&
                (p.adressCity === city || p.adressDistrict === city) &&
                p.dogId.attitude.includes(attitude) &&
                !isNaN(parseInt(p.price))
                    ? parseInt(p.price) >= price[0] &&
                      parseInt(p.price) <= price[1]
                    : 0 >= price[0] && 0 <= price[1]
            );
        } else {
            return posts.filter(
                (p) =>
                    p.dogId.attitude.includes(attitude) &&
                    parseInt(p.price) >= price[0] &&
                    parseInt(p.price) <= price[1]
            );
        }
    }

    const handlePriceChange = (event, newValue) => {
        setPrice(newValue);
    };

    return (
        <div style={{ marginTop: "1%", margin: "2%" }} className="Posts">
            <Grid container justify="center">
                <Grid
                    item
                    container
                    justify="center"
                    xs={12}
                    md={10}
                    spacing={2}
                >
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
                                    <option value="Gdansk">Całe miasto</option>
                                    <option value="Oliwa">Oliwa</option>
                                    <option value="Przymorze">Przymorze</option>
                                </optgroup>
                                <optgroup label="Gdynia">
                                    <option value="Gdynia">Całe miasto</option>
                                    <option value="Redlowo">Redłowo</option>
                                    <option value="Witomino">Witomino</option>
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
                                <option value={"neutralny"}>Neutralny</option>
                                <option value={"pozytywny"}>Pozytywny</option>
                                <option value={"negatywny"}>Negatywny</option>
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
                    <Grid
                        item
                        container
                        md={12}
                        xs={12}
                        style={{ marginTop: "5%" }}
                        spacing={2}
                        justify="center"
                    >
                        {search().map((p, index) => (
                            <Grid item md={3} key={p._id}>
                                <Post post={p} photo={photos[index]}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

const mapStateToProps = (state) => ({
    posts: state.posts,
});

export default connect(mapStateToProps, { getAllPosts })(PostsManager);
