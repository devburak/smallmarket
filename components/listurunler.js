import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Discountlistitem from './discountlistitem';
import Urunlistitem from './urunlistitem';


const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
    grey:{
        backgroundColor:theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
  }));

const testurunler =[
    {
      _id: "5e148073e8d54c5bf1bfcaa6",
      name: "RS-15-5",
      categories: [
        "guc-kaynaklari"
      ],
      tags: [
        "kablo","güç ekipmanları",
        "asdf","deneme","çoklu etiket yapısı"
      ],
      stok: 9,
      explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      discount: false,
      Images: [
        "https://pekminimal.ams3.digitaloceanspaces.com/products/5c5ae29a44c94718300dd299.jpeg"
      ],
      price: {
        TRY: 50
      },
      stoks: [
        {
          stok: "9"
        }
      ]
    },
    {
      _id: "5e148133e8d54c5bf1bfcaa7",
      name: "RS-15-12",
      categories: [
        "guc-kaynaklari"
      ],
      tags: [
        
      ],
      stok: 27,
      explanation: "",
      discount: false,
      Images: null,
      price: {
        TRY: 200
      },
      stoks: [
        {
          stok: "27"
        }
      ]
    }]

function ListUrunler(props){

    // const {urunler} = props || []
    const urunler = testurunler || []
    
    const classes = useStyles();

    console.log(urunler)
    if(!urunler ){
        return (  <Grid item xs={12}>
            <Typography variant="h5" component="h3">
               Hiç ürün bulunamadı
            </Typography>
         </Grid> )
    }
    return(
        <Grid container spacing={2}>  
        { urunler.some(x=>x.discount) &&
             <Grid item xs={12} >
                    <Typography variant="h5" component="h3">
                       İndirimde olanlar 
                    </Typography>
            </Grid>}
        {urunler.map((item,index)=>{
            if(item.discount)
            return(
               <Discountlistitem urun={item} key={index}/>
            )
            else return(
                <Urunlistitem urun={item} key={'urun' +index} />
            )
        })}   
   
        </Grid>
    )
}

export default ListUrunler