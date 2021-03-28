import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography,
} from "@material-ui/core";
import React from "react";

// import PostDialog from "./PostDialog";

const useStyles = makeStyles({
    root: {
        minWidth: "100%",
    },
    media: {
        height: 300,
    },
});
const Post = ({ post }) => {
    const classes = useStyles();
    const [openPost, setOpenPost] = React.useState(false);

    return (
        <Grid
            item
            xs={12}
            md={10}
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
            }}
        >
            <Card className={classes.root} onClick={() => setOpenPost(true)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://dummyimage.com/640x4:3&text=${post.dogName}`}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {post.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Edytuj
                    </Button>
                </CardActions>
            </Card>
            {/* {openPost ? (
                <DogDialog post={post} handleClose={() => setOpenPost(false)} />
            ) : null} */}
        </Grid>
    );
};

export default Post;
