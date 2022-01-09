import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'center',
        width: '100%',
        height: '50vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
    },
    container: {
        padding: '0 5%', width: '100%', margin: 0,
    },
    logoContainer: {
        padding: '0 5%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            textAlign: 'center',
        },
    },
    alanLogo: {
        height: '27vmin',
        borderRadius: '10%',
        width: 'auto',
        maxWidth:'100%',
        padding: '0 5%',
        margin: '3% 0',
        [theme.breakpoints.down('sm')]: {
            height: '35vmin',
        },
    }
}));
