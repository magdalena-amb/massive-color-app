
import chroma from 'chroma-js';

export default {
    ColorBox: {
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button': {
            opacity: 1,
            transition: '.5s',
        }
    },
    copyText: {
        color: props => chroma(props.background).luminance()>= 0.6 ? '#000' : '#fff',
    },
    colorName: {
        color: props => chroma(props.background).luminance()<= 0.09 ? '#fff' : '#000'
    },
    seeMore: {
        background: 'rgba(255, 255, 255, .3)',
        position: 'absolute',
        border: 'none',
        borderRadius: '20px 0 0 0',
        right: '0px',
        bottom: '0px',
        color: props => chroma(props.background).luminance() >= 0.6 ? '#000' : '#fff',
        width: '80px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton: {
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, .3)',
        fontSize: '1rem',
        lineHeight: '30px',
        color: props => chroma(props.background).luminance() >= 0.6 ? '#000' : '#fff',
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '50px',
        textDecoration: 'none',
        opacity: 0
    },
    boxContent : {
        position: 'absolute',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontSize: '12px',
    },
    copyOverlay : {
        opacity: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        transition: 'transform .7s ease-in-out',
        transform: 'scale(.1)'
    },
    showOverlay : {
        opacity: 1,
        transform: 'scale(50)',
        zIndex: 10,
        position: 'absolute'
    },
    copyMsg : {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        fontSize: '4rem',
        transform: 'scale(.1)',
        opacity: 0,
        color: '#fff',
        '& h1' : {
            fontWeight: 400,
            textShadow: '1px 2px black',
            background: 'rgba(255, 255, 255, .2)',
            width: '100%',
            textAlign: 'center',
            marginBottom: 0,
            padding: '1rem',
            textTransform: 'uppercase',
        },
        '& p' : {
            fontSize: '2rem',
            fontWeight: 100,
        } 
    },
    showMsg : {
        opacity: 1,
        transform: 'scale(1)',
        zIndex: 25,
        transition: 'all .4s ease-in-out',
        transitionDelay: '.3s',
    }
} 