import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import WeekendIcon from "@material-ui/icons/Weekend";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { Menu } from "./Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  /*  hr: {
    backgroundColor: "blue",
  }, */
  listItem: {
    "&:hover": {
      backgroundColor: "gray",
    },
  },
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: "none",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function LeftDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <List>
          {Menu.map((text, index) => (
            <ListItem button key={index} className={classes.listItem}>
              <ListItemIcon>
                {index % 2 === 0 ? <WeekendIcon /> : <EventSeatIcon />}
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
        <hr style={{ backgroundColor: "orange" }} />
      </Drawer>
    </div>
  );
}
