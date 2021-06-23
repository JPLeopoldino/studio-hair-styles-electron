import React from 'react';
import * as SC from './styles';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import AssignmentIndRoundedIcon from '@material-ui/icons/AssignmentIndRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

import { useNavigationBar } from '../../hooks/NavigationBarProvider';

import colors from '../../styles/colors';

const drawerWidth = 260;

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
    marginRight: 6,
    marginLeft: 200,
    color: '#FFF',
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
    backgroundColor: colors.pink,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor: colors.pink,
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
    backgroundColor: colors.pink,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    color: '#FFF',
    transition: '0.2s',
  },
  iconOpen: {
    minWidth: 45,
    // transition: '0.2s',
  },
  iconClose: {
    marginLeft: 5,
    // transition: '0.2s',
  },
}));
    
const NavMenu = () => {
    const classes = useStyles();
    const theme = useTheme();
    const {open, setOpen} = useNavigationBar()
  
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
                <IconButton onClick={handleDrawerClose} className={clsx(classes.menuButton)}>
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
            {/* {['Home', 'Perfil', 'Buscar Clientes'].map((text, index) => (
                <Link 
                    to={index === 0 ? index === 1 ? '/professionalProfile' : '/home' : index === 1 ? '/professionalProfile' :'/searchClient' }
                    className={classes.link}
                >
                <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                </ListItem>
                </Link>
            ))} */}
            
              <Link to="/home" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>

            </List>
            <Divider />
            <List>
              
              <Link to="/professionalProfile" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <AssignmentIndRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Perfil" />
                </ListItem>
              </Link>
              
              <Link to="/servicesHistory" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <HistoryRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Histórico de Serviços" />
                </ListItem>
              </Link>

              <Link to="/searchClient" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <SearchRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Buscar Cliente" />
                </ListItem>
              </Link>

            </List>
            <Divider />
            <List>

              <Link to="/singupClient" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <GroupAddRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Cliente" />
                </ListItem>
              </Link>

              <Link to="/signupProfessional" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <PersonAddRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Cadastrar Profissional" />
                </ListItem>
              </Link>

            </List>
            <Divider />
            <List>

              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={clsx(classes.icon, {
                      [classes.iconOpen]: open,
                      [classes.iconClose]: !open,
                    })} 
                  >
                    <ExitToAppRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logoff" />
                </ListItem>
              </Link>

            </List>

            {/* <Divider />
            <List>
            {['Criar Cliente', 'Criar Profissional', 'Sair'].map((text, index) => (
                <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
            ))}
            </List> */}
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