import React , {useEffect,useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useRouter } from 'next/router';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import getConfig from 'next/config'
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'


const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    
  },
  itemCategory: {
    backgroundColor: '#eaeff1',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  itemActiveItem: {
    color: '#4fc3f7',
  },
  itemPrimary: {
    fontSize: 'inherit',
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
});



function Navigator(props) {
  const { classes,  sitename, ...other } = props;
  const [categories, setCategories] = useState([])

  
useEffect(() => {
  async function fetchData() {
  const res = await fetch(publicRuntimeConfig.appURL+'allcategories');
  const data = await res.json();
  setCategories(data)
  
}
  fetchData();
},[]);

  const router = useRouter()

  return (
    <Drawer variant="permanent" {...other} > 
      <List disablePadding >
        <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)} style={{ justifyContent: 'center' }}>

        <Link color="inherit" href='/'>
        <Tooltip title={sitename}>
          <Avatar src="/Logo.png" alt="my image" style={{ height: 90, width:90 }} />
        </Tooltip>
          </Link>
        </ListItem>
        {categories && categories.map(({ id, name, slug }, index) => {
          let active = router.query.slug === slug

          return (
            <React.Fragment key={index}>
              <ListItem
                key={slug}
                button
                className={clsx(classes.item, active && classes.itemActiveItem)}
              >

                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                  }}
                >
                  {name}
                </ListItemText>
              </ListItem>
            </React.Fragment>
          )
        })}
      </List>
    </Drawer>
  );
}



Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navigator);