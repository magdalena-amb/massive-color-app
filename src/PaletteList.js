import React from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';
import { Link } from 'react-router-dom';

 function PaletteList (props) {
   
    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`);
    }

    const { palettes, classes } = props;
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create Palette</Link>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map(palette => (
                    <MiniPalette {...palette} handleClick={() => goToPalette(palette.id)}/>
                    ))}
                </div>
            </div> 
        </div>
    );
}


export default withStyles(styles)(PaletteList);
