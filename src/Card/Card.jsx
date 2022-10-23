import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Program from '../image/programmer.jfif'
import Driver from '../image/taxi driver.jfif';
import Doctor from '../image/doctor.jfif';

class MediaCard extends Component {
    constructor(props) {
        super(props)

        // Set initial state
        this.state = { msg: 'Hi, There!' }
        // Binding this keyword
        this.handleProgram = this.handleProgram.bind(this)
        this.handleDoc = this.handleDoc.bind(this)
        this.handleDriv = this.handleDriv.bind(this)
    }

    handleProgram() {

        // Changing state
        this.setState({ msg: 'I am  programmer' })
        this.setState({p: 'My name is Kamoliddin, I am Full Stack Developer'})
        this.setState({img: Program})
    }

    handleDoc() {

        // Changing state
        this.setState({ msg: 'I am  doctor' })
        this.setState({p: "My name is John Doe, I am Doctor "})
        this.setState({img: Doctor})
    }

    handleDriv() {

        // Changing state
        this.setState({ msg: 'I am  driver' })
        this.setState({p:'My name is Pifagor, I am Taxi Driver'})
        this.setState({img: Driver})
    }
    


    render() {
        return (
            <>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={this.state.img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <p>{this.state.msg}</p>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>{this.state.p}</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.handleProgram}>Programmer</Button>
                        <Button size="small" onClick={this.handleDoc}>Doctor</Button>
                        <Button size="small" onClick={this.handleDriv}>Driver</Button>
                    </CardActions>
                </Card>
            </>
        )
    }

}


export default MediaCard;