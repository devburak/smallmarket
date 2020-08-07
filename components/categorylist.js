import React, { useState,useEffect } from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import getConfig from 'next/config';
import Paper from '@material-ui/core/Paper';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
import fetch from 'isomorphic-unfetch'
import { GetServerSideProps } from 'next'

import Avatar from '@material-ui/core/Avatar';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    griditem : {
        display: 'flex'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        width: '-webkit-fill-available'
      },
    grey: {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: 151,
      },
      controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
    
}));


function Categorylist(props) {

    const {categories} = props || []
    // const [categories, setCategories] = useState([])
    const classes = useStyles();

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(publicRuntimeConfig.appURL + 'allcategories');
    //         const data = await res.json();
    //         console.log(data)

    //     }
    //     fetchData();
    //     setCategories(props.categories)
    // }, []);


    console.log(categories)

    return (
        <Grid container spacing={2}>

            {categories.map((cate, index) => {

                return (
                    <Grid item sm={6} key={'grid'+index}   className={classes.griditem} >
                        <Card className={classes.root} key={index}>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h5" variant="h5">
                                        {cate.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {cate.exp}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Link href={"/list/" + cate.slug}>
                                    <Button size="small" color="primary">Ürünleri Gör</Button>
                                </Link>
                                </CardActions>
                            </div>
                         {cate.image &&
                            <CardMedia
                                className={classes.cover}
                                image={cate.image}
                                title={cate.name}
                            />
                            }
                        </Card>
                    </Grid>
                )
            })}

        </Grid>
    )

}



export default Categorylist