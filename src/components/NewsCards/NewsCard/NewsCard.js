import React, { useState, useEffect, createRef } from 'react';
import classNames from 'classnames';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles'
import newsImage from '../../../images/newsImage.jpg'

const NewsCard = ({ article: {description, publishedAt, source, title, url, urlToImage }, i, activeArticle }) => {
    const [elRefs, setElRefs] = useState([]); 
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);
    const classes = useStyles();


    useEffect(() => {
        window.scroll(0, 0);
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);

    useEffect(() => {
        if (i === activeArticle && elRefs[activeArticle]) {
            scrollToRef(elRefs[activeArticle]);
        }
    }, [i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image={urlToImage || newsImage} />
                <div className={classes.details}>
                    <Typography variant='body2' color='textSecondary' component='h2'>{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant='body2' color='textSecondary' component='h2'>{source.name}</Typography>
                </div>
                <Typography className={classes.title} variant='body1' gutterBottom>{title}</Typography>
                <CardContent>
                    <Typography variant='subtitle2' color='textSecondary' component='p'>{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary'>LEARN MORE...</Button>
                <Typography variant='h5' color='textSecondary'>{i + 1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard
