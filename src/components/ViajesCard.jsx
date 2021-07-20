import { makeStyles, IconButton } from '@material-ui/core'
import { useHistory } from 'react-router';

export const ViajesCard = ({viajes}) => {
    const history = useHistory()
    const classes = useStyles();


    return(
        <div className={classes.container}>
                <img className={classes.viajes_img} src={viajes.image} alt={viajes.pais}/>
                <strong className={classes.viajes_pais} >{viajes.pais}</strong>
                <p className="viajes_description">{viajes.description}</p>
                <IconButton className={classes.button_card}  onClick={()=> history.push("/informacion") }>Viajar</IconButton>
        </div>
    )
}

const useStyles = makeStyles (() => ({
    container: {
        width: '300px',
        height: 'auto',
    },
    viajes_img:{
        width: '300px',
        maxWidth: '100%',
        marginTop: '1rem',
    },
    viajes_pais:{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
    },
    button_card:{
        border: 'none',
        padding: '3px',
        borderRadius: '7px',
        backgroundColor: '#fff',
        color: '#000'
    },
}))