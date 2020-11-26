import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import PhotoIcon from '@material-ui/icons/Photo';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ScheduleIcon from '@material-ui/icons/Schedule';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import BuildIcon from '@material-ui/icons/Build';
import React from 'react'

import title from './SideMenu'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#DB1801',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Items = (valor) => {
  const classes = useStyles();
  //estado de los collapsibles
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  //estado de los collapsibles
  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
          </ListSubheader>
        }
        className={classes.root}
      >
        <ListItem button className={classes.nested} >
          <ListItemIcon>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText primary="Pañol" />
        </ListItem>
        <ListItem button onClick={handleClick}>
          <ListItemIcon >
            <HomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary="Sala 1" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PhotoIcon />
              </ListItemIcon>
              <ListItemText primary="Foto Laboratorio" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <ListItemText primary="Plano Ubicación" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ScheduleIcon />
              </ListItemIcon>
              <ListItemText primary="Horario Semestral" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <BusinessCenterIcon />
              </ListItemIcon>
              <ListItemText primary="Insumos" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DesktopWindowsIcon />
              </ListItemIcon>
              <ListItemText primary="Software Instalado" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DevicesOtherIcon />
              </ListItemIcon>
              <ListItemText primary="Equipo Area" />
            </ListItem>
          </List>
          <ListItem button onClick={handleClick2}>
            <ListItemIcon>
              <RateReviewIcon />
            </ListItemIcon>
            <ListItemText primary="Plan Didactica de Control" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open2} timeout="auto" >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PhotoIcon />
              </ListItemIcon>
              <ListItemText primary="Foto Maqueta" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary="Datasheet del producto" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DesktopWindowsIcon />
              </ListItemIcon>
              <ListItemText primary="Programas" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DesktopWindowsIcon />
              </ListItemIcon>
              <ListItemText primary="Software" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <ListItemText primary="Planos" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <ListItemText primary="Capacitación" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <ListItemText primary="Recepción Sede" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <FeaturedPlayListIcon />
              </ListItemIcon>
              <ListItemText primary="Ficha Técnica" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <WallpaperIcon />
              </ListItemIcon>
              <ListItemText primary="Capacitación" />
            </ListItem>
          </Collapse >
        </Collapse>
      </List>
    </>
  );
}