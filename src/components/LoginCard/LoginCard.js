import { Grid, Grow, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'
import alanLogo from '../../images/alanLogo.jpg'

const infoCards = [
    { id: 1, color: '#00838f', title: 'Latest News', text: 'Show me some latest NEWS' },
    { id: 2, color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { id: 3, color: '#4527a0', title: 'News by Terms', info: 'PlayStation 5, Smartphones, Narendra Modi...', text: 'What\'s up with PlayStation 5' },
    { id: 4, color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Provide me the news from Buzzfeed' },
];

const LoginCard = () => {

    const classes = useStyles();

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>

                <div className={classes.logoContainer}>
                    <img src={alanLogo} className={classes.alanLogo} alt="logo" />
                </div>
                {
                    infoCards.map((infoCard) => (
                        <Grid key={infoCard.id} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                                <Typography variant='h5' >
                                    {infoCard.title}
                                    <br />
                                    <br />
                                </Typography>
                                {
                                    infoCard.info
                                        ? <Typography variant='body1'>
                                            <strong>{infoCard.title.split(' ')[2]}</strong>:
                                            <br />
                                            {infoCard.info}
                                            <br />
                                            <br />
                                        </Typography>
                                        : null
                                }

                                <Typography variant="body2" component="h6">
                                    Try Saying: <br />
                                    <i>{infoCard.text}</i>
                                </Typography>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Grow>
    )
}

export default LoginCard
