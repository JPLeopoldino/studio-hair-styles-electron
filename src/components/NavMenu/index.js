import React from 'react';
import * as SC from './styles';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 10,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  link: {
    textDecoration: 'none',
    color: '#000',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
    
const NavMenu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    return(
        <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            })}
            classes={{
            paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
            }),
            }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                    [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
            {['Home', 'Perfil', 'Buscar Clientes'].map((text, index) => (
                <Link 
                    to={index === 0 ? index === 1 ? '/professionalProfile' : '/home' : index === 1 ? '/professionalProfile' :'/searchClient' }
                    className={classes.link}
                >
                <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                </ListItem>
                </Link>
            ))}
            </List>
            <Divider />
            <List>
            {['Criar Cliente', 'Criar Profissional', 'Sair'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List>
        </Drawer>

        // <SC.MainContainer>
        //     <SC.HeaderContainer>
        //         <img src="./assets/Logo2.svg"/>
        //         <SC.Title>Studio Hair Style</SC.Title>
        //     </SC.HeaderContainer>
        //     <SC.DividerLine/>
        //     <SC.LinkContainer>
        //         <Link to="/searchClient">
        //             <SC.Button>Buscar Cliente</SC.Button>
        //         </Link>
        //         <Link to="/singupClient">
        //             <SC.Button>Cadastrar Cliente</SC.Button>
        //         </Link>
        //         <Link to="/signupProfessional">
        //             <SC.Button>Cadastrar Profissional</SC.Button>
        //         </Link>
        //         <Link to="/servicesHistory">
        //             <SC.Button>Histórico de Serviços</SC.Button>
        //         </Link>
        //         <Link to="/editClient">
        //             <SC.Button>Editar Cliente</SC.Button>
        //         </Link>
        //         <Link to="/professionalProfile">
        //             <SC.Button>Perfil</SC.Button>
        //         </Link>
        //         <Link to="/home">
        //             <SC.Button>Home</SC.Button>
        //         </Link>
        //         <Link to="/">
        //             <SC.Button>Login</SC.Button>
        //         </Link>
        //     </SC.LinkContainer>
        //     <SC.DividerLine/>
        //     <SC.LogoffContainer>
        //         <SC.Logoff>Sair</SC.Logoff>
        //     </SC.LogoffContainer>
        // </SC.MainContainer>
    );
}

export default NavMenu;