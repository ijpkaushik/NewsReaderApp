import { Grid, Grow, Typography } from '@material-ui/core'
import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import LoginCard from '../LoginCard/LoginCard'
import useStyles from './styles'
import alanLogo from '../../images/alanLogo.jpg'

const NewsCards = ({ articles, activeArticle }) => {

    const classes = useStyles();

    if (!articles.length) {
        return (
            <LoginCard />
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>

                <div className={classes.logoContainer}>
                    {articles.length ? (
                        <div className={classes.infoContainer}>
                            <div className={classes.card}><Typography variant="h6" component="h2"><strong> Try saying: </strong><br /><br />Open article number [7]</Typography></div>
                            <div className={classes.card}><Typography variant="h6" component="h2"><strong> Try saying: </strong><br /><br />Go back</Typography></div>
                        </div>
                    ) : null}
                    <img src={alanLogo} className={classes.alanLogo} alt="logo" />
                </div>

                {articles.map((article, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} i={i} activeArticle={activeArticle} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
