import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import {ChromePicker} from "react-color";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import DraggableColorBox from "./DraggableColorBox";



const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function NewPaletteForm() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [chosenColor, setChosenColor] = useState("ffffff");
  const [colors, setColors] = useState([]);
  const [newName, setNewName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
        let unique = true;
        for (let color of colors) {
            if (color.name.toLowerCase() === value.toLowerCase()) {
                unique = false;
                break;
            }
        }
        return unique;
    });
    ValidatorForm.addValidationRule("isColorUnique", () => {
        let unique = true;
        for (let color of colors) {
            if (color.color === chosenColor) {
                unique = false;
                break;
            }
        }
        return unique;
    });
  }, [colors, chosenColor]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleColorChange = function(newColor) {
      setColor(newColor);
  }

  const handleChosenColorChange = function(newColor) {
    setChosenColor(newColor.hex);
  }

  const handleChange = function(event) {
      setNewName(event.target.value);
  }

  const addNewColor = function() {
      const newColor = {
          color: chosenColor,
          name: newName
      }
      setColors([...colors, newColor]);
      setNewName("");
      setChosenColor("ffffff");
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">
            Design Your Palette
        </Typography>
        <div>
            <Button variant="contained" color="secondary">Clear Palette</Button>
            <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <ChromePicker color={color} onChange={handleColorChange} disableAlpha onChangeComplete={handleChosenColorChange}/>
        <ValidatorForm onSubmit={addNewColor}>
            <TextValidator
                value={newName}
                onChange={handleChange}
                validators={["required", "isColorNameUnique", "isColorUnique"]}
                errorMessages={["Name is required", "Name already in use", "Color already in use"]}
            />
            <Button variant="contained" style={{backgroundColor: chosenColor}} type="submit">Add Color</Button>
        </ValidatorForm>
        
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ul style={{height: "100%"}}>
            {colors.map(color => {
                return <DraggableColorBox color={color.color} name={color.name} />
            })}
        </ul>
      </main>
    </div>
  );
}
