
import getConfig from 'next/config'

import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

import Paperbase from '../components/paperbase'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

const Underconstruction = (props) => {
    const classes = useStyles();
    const { categories, sitename, ...other } = props;

    return (
        
        <Paperbase categories={props.categories}
            siteinformation={props.siteinformation}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Link color="inherit" href='/'>

                        <Avatar src="/Logo.png" alt="my image" style={{ height: 90, width: 90 ,margin:'auto'}} />

                    </Link>
                </Grid>
                <Grid item xs={12} sm={12}><Paper className={classes.root}>
                    <Typography variant="h5" component="h3">
                        Bu sitenin bazı bölümleri yapım aşamasındadır! </Typography>
                    <Typography component="p">
                        Anlayışınız için teşekkür ederiz.</Typography>
                    <Link color="inherit" href='/'>
                        Ana Sayfa</Link>
                </Paper>
                </Grid>
            </Grid>
        </Paperbase>
       
    )
}

export default Underconstruction;