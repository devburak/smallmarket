import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
    grey: {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));



function Discountlistitem(props) {
    const { urun } = props
    const classes = useStyles();

    if (!urun) {
        return (<Grid item xs={12}>
            <Typography variant="h5" component="h3">
                Hiç ürün bulunamadı
            </Typography>
        </Grid>)
    }
    return (
        <Grid item xs={6} >
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    <Grid container spacing={2}>
    <Grid item >{urun.Images ? <Avatar alt={urun.name} src={urun.Images[0]} className={classes.large} /> :  <Avatar alt={urun.name} className={classes.large} > {urun.name.charAt(0).toUpperCase()}</Avatar>}
                        </Grid>
                        <Grid item>
                            {urun.name}
                        </Grid>
                    </Grid>

                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        {urun.tags.map((e, i) => {
                            if (i === urun.tags.length - 1)
                                return <Link variant="body2" href={`etiket/${e}`} key={i + 'tags_'  + e}>{'#' + e}</Link>

                            return (<span key={i}><Link variant="body2" href={`etiket/${e}`} key={i + 'tags_'  + e}>{'#' + e}</Link> {' | '}</span>)
                        })}
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Chip label={urun.price.TRY.toFixed(2) + ' \u20BA'} component="a" href={`urun/${urun._id}`} clickable color="primary" variant="outlined" />
                    </Grid>
                </Grid>
                <Divider style={{margin:11}}/>
                <Typography component="p">
                    {urun.explanation}
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Discountlistitem