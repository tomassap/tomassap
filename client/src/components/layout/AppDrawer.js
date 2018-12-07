import React, { Component } from "react";
import { PropTypes } from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {
  clearCurrentProfile,
  getCurrentProfile
} from "../../actions/profileActions";
import {
  Hidden,
  Tab,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import StarIcon from "@material-ui/icons/Star";
import SendIcon from "@material-ui/icons/Send";
import MailIcon from "@material-ui/icons/Mail";
import DeleteIcon from "@material-ui/icons/Delete";
import ReportIcon from "@material-ui/icons/Report";
import CodeIcon from "@material-ui/icons/Code";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VideocamIcon from "@material-ui/icons/Videocam";
import BrushIcon from "@material-ui/icons/Brush";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EjectIcon from "@material-ui/icons/Eject";
import InfoIcon from "@material-ui/icons/Info";
import logo from "../../img/tomassapAppBar.png";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#000000"
  },
  appBar: {
    position: "fixed"
  },
  toolbar: {
    backgroundColor: "#696969",
    height: 64,
    width: "100vw"
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  },
  logo: {
    height: 40,
    [theme.breakpoints.down("xs")]: {
      height: 25
    }
  },
  hamburger: {
    color: "#ff0000"
  }
});

class AppDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      open: false
    };

    this.onLogoutClick = this.onLogoutClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  componentDidMount() {}

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, children } = this.props;
    const { isAuthenticated, user } = this.props.auth;
    const { mobileOpen } = this.state;
    const mailFolderListItems = (
      <div>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/about">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText inset primary="Services" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/services/development">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText inset primary="Development" />
              </ListItem>
            </Link>
            <Link to="/services/design">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <BrushIcon />
                </ListItemIcon>
                <ListItemText inset primary="Design" />
              </ListItem>
            </Link>
            <Link to="/services/photography">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PhotoCameraIcon />
                </ListItemIcon>
                <ListItemText inset primary="Photography" />
              </ListItem>
            </Link>
            <Link to="/services/cinematography">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <VideocamIcon />
                </ListItemIcon>
                <ListItemText inset primary="Cinematography" />
              </ListItem>
            </Link>
            <Link to="/services/music">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <QueueMusicIcon />
                </ListItemIcon>
                <ListItemText inset primary="Music" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Link to="/contact">
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </div>
    );

    const authListItems = (
      <div>
        <Link to="/dashboard">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <Link to="/thoughts">
          <ListItem button>
            <ListItemIcon>
              <BubbleChartIcon />
            </ListItemIcon>
            <ListItemText primary="Thoughts" />
          </ListItem>
        </Link>
        <Link to={`/profiles`}>
          <ListItem button>
            <ListItemIcon>
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: "25px" }}
                title="Connect a gravatar to your email to display an image"
              />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link>
        <ListItem button onClick={this.onLogoutClick}>
          <ListItemIcon>
            <EjectIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </div>
    );

    const guestListItems = (
      <div>
        <Link to="/register">
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </Link>
        <Link to="/login">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Log In" />
          </ListItem>
        </Link>
      </div>
    );

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{isAuthenticated ? authListItems : guestListItems}</List>
      </div>
    );
    return (
      <div className={classes.root}>
        <AppBar
          className={classes.appBar}
          style={{
            background: "transparent",
            boxShadow: "none"
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.hamburger}
            >
              <MenuIcon />
            </IconButton>
            <img className={classes.logo} src={logo} height="64" />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={this.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

AppDrawer.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default withStyles(styles, { withTheme: true })(
  withRouter(
    connect(
      mapStateToProps,
      { logoutUser, clearCurrentProfile, getCurrentProfile }
    )(AppDrawer)
  )
);
