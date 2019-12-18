import {useState,useContext} from 'react'

import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { SepetContext } from '../sepetStore'

const styles = theme => ({
    root: {
        
        display: 'flex',
        alignItems: 'center',
        maxWidth: 400,
        marginTop:5,
        marginBottom:5
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
        marginLeft : theme.spacing(2)
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    inputbase:{
        maxWidth:30,
        textAlign:'center',
        color:"primary"
        
    }
});

const AddsepetButton = (props) => {
    const { classes ,urunid } = props;
    const [piece,setPiece] = useState(1)

    const up = () => {
        setPiece(piece+1);
      };
      
    const down =()=>{
        if(piece>1 )
        setPiece(piece-1);
    }

    const { state,dispatch } = useContext(SepetContext)
    const item = {_id:urunid,piece:piece}
    const addItem = () => ({ type: 'addItem' , item })

    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="up" onClick={up}>
                <AddIcon fontSize="small" />
            </IconButton>
            <InputBase
                className={classes.inputbase}
               
                value={piece}
                disabled
                inputProps={{ 
                    'aria-label': 'Adet',
                    style:{
                        textAlign:'center',
                        color:'black' 
                    }
             }}
            />
            <IconButton className={classes.iconButton} aria-label="down" onClick={down}>
                <RemoveIcon fontSize="small" />
            </IconButton>
            <Button variant="contained" color="primary" className={classes.addUser} disabled={!urunid}
                onClick={()=>dispatch(addItem())}
            >
                sepete ekle
      </Button>
        </Paper>
    )

}

AddsepetButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddsepetButton);