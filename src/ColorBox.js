import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';
   

function ColorBox(props) {

    const [copied, setCopied] = useState(false);

    const changeCopyState = () => {
        setCopied(true); 
        setTimeout(()=> setCopied(false), 1500);    
    }

    
    const {name, background, paletteId, id, showingFullPalette, classes} = props;
         
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{background}} className={classes.ColorBox}>
            <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}></div>
            <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}> 
                <h1> Copied! </h1>
                <p className={classes.copyText}> {props.background} </p>
             </div>    
                <div className='copy-container'>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton }>Copy</button>
                </div>
                {showingFullPalette && (
                <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                  <span className={classes.seeMore}>MORE</span> 
                </Link>
                )}
                
                 
            </div>
            </CopyToClipboard>
        )
    }


export default withStyles(styles)(ColorBox);
