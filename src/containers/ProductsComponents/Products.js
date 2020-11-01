import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import saree from '../../assets/Images/cards/sarees.jpg';
import image from '../../assets/Images/cards/images.jpg';
import Styles from './Products.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '0.5rem'
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();
    const [sareeState, setSareeState] = useState({
        sarees: [
            { Image: saree, Title: 'Dry Clean', Description: 'may add the glamour to the sarees with rolling', Price: 200 },
            { Image: image, Title: 'Rolling', Description: 'may add the glamour to the sarees with rolling', Price: 300 }
        ]
    })

    return (
        <div className={Styles.Sarees}>
            {sareeState.sarees.map((saree, index) => {
                return <Card className={classes.root} key={index}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Sarees"
                            height="140"
                            image={saree.Image}
                            title="Sarees"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                <div className={Styles.Typos}>
                                    <p>{saree.Title}</p>
                                    <p>{saree.Price}</p>
                                </div>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {saree.Description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
        </Button>
                        <Button size="small" color="primary">
                            Learn More
        </Button>
                    </CardActions>
                </Card>
            })}
        </div>
    );
}
