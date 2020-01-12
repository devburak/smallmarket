import React, { useState } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

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


function Urunlistitem(props){

    const { urun } = props
    const classes = useStyles();
    const [open,setOpen] = useState(false);

    if (!urun) {
        return (<Grid item xs={12}>
            <Typography variant="h5" component="h3">
                Hiç ürün bulunamadı
            </Typography>
        </Grid>)
    }

    return(
        <Grid item xs={12} >
             <Paper className={classes.root}>
             <Grid container spacing={2}>
                         <Grid item xs={1}>{urun.Images ? <Avatar alt={urun.name} src={urun.Images[0]} className={classes.large} /> :  <Avatar alt={urun.name} className={classes.large} > {urun.name.charAt(0).toUpperCase()}</Avatar>}
                        </Grid>
                        <Grid item xs={8}>
                        <Grid item xs={12}>
                        {urun.name}
                        </Grid>
                        <Grid item xs={12}>
                        {urun.tags.map((e, i) => {
                            if (i === urun.tags.length - 1)
                                return <Link variant="body2" href={`etiket/${e}`} key={i + 'tags_'  + e}>{'#' + e}</Link>

                            return (<span key={i}><Link variant="body2" href={`etiket/${e}`} key={i + 'tags_'  + e}>{'#' + e}</Link> {' | '}</span>)
                        })}
                        </Grid>
                       {open && <Grid item xs={12}>
                        {urun.explanation}
                        </Grid>}
                         
                        </Grid>
                        <Grid item xs={2}>
                        <Chip label={urun.price.TRY.toFixed(2) + ' \u20BA'} component="a" href={`urun/${urun._id}`} clickable color="primary" variant="outlined" />
                        </Grid>
                    <Grid item xs={1}>
                        <Grid item xs={12}>
                            {'ürüne git'}
                        </Grid>
                        <Grid item xs={12}>
                        <IconButton aria-label="genişlet" onClick={() => setOpen(!open)} >
                            {open ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
                        </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
             </Paper>

        </Grid>
    )

}

export default Urunlistitem;