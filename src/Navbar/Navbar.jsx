import React, { Component } from 'react';
import './Navbar.css';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Card from '../Card/Card'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));



class Navbar extends Component {

    render() {
        return (
            <div>
                <header>
                    <h3>TruckPin</h3>
                    <PopupState variant="popper" popupId="demo-popup-popper">
                        {(popupState) => (
                            <div>
                                <Stack direction="row" spacing={10} className="userImg">
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Nazirullayev Kamoliddin" src="/static/images/avatar/1.jpg" />
                                    </StyledBadge>
                                </Stack>

                                <Button variant="contained" {...bindToggle(popupState)}>
                                    Kamoliddin Nazrullayev
                                </Button>
                                <Popper {...bindPopper(popupState)} transition>
                                    {({ TransitionProps }) => (

                                        <Fade {...TransitionProps} timeout={550}>
                                            <Paper>
                                                <Typography sx={{ p: 0 }}><Card /></Typography>
                                            </Paper>
                                        </Fade>
                                    )}
                                </Popper>
                            </div>
                        )}
                    </PopupState>
                </header>
            </div>
        )
    }

}

export default Navbar