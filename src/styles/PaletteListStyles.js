export default {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    nav: {
        display: 'flex',
        width: '100%',
        height: '8vh',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
        '& a' : {
            color: "#fff",
            textDecoration: 'none',
            display: 'inline-block',
            padding: ' 0 1.5rem',
            height: '30px',
            lineHeight: '30px',
            backgroundColor: 'rgba(255, 255, 255, .5)',
            borderRadius: '50px'
        }
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'
    }
}