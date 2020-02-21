import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';


function Palette(props) {
    
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

        const { colors, paletteName, emoji, id} = props.palette;
        const { classes } =props;
        const colorBoxes = colors[level].map(color => (
            < ColorBox 
                background={color[format]} 
                name={color.name} 
                key={color.id}
                id={color.id}
                paletteId={id}
                showingFullPalette ={true}
            />
        
        ));
        return (
            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={(level)=> setLevel(level)} handleChange={(val)=>setFormat(val)} showingAllColors={true}/>
                 <div className={classes.PaletteColors}>
                     { colorBoxes }
                 </div>
                 <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }

export default withStyles(styles)(Palette);
