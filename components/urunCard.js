import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import LabelIcon from '@material-ui/icons/Label';
import RefreshIcon from '@material-ui/icons/Refresh';
import ImageShow from './imageShow'
import AddsepetButton from './addsepetButton';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing(1),
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
});

function UrunCard(props) {
  const { classes,urun } = props;
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <LabelIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
            {urun && urun.name }
            </Grid>
            <Grid item>
            <AddsepetButton urunid={urun && urun._id}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
      <Grid container spacing={2} alignItems="center">
      <Grid item  xs={12} sm={8} md={8}>
      {urun && urun.Images &&  <ImageShow images={urun.Images}/>}
        <Typography color="textSecondary" >
          {urun ? urun.explanation:'Henüz Hiçbir Ürün verisi gelmedi'}
        </Typography>
        </Grid>
        <Grid item  xs={12} sm={4} md={4}>
        <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                     $ {urun && urun.price && urun.price.USD}
                    </Typography>
                    
                  </div>
        </Grid>
        
        </Grid>
      </div>
    </Paper>
  );
}

UrunCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UrunCard);