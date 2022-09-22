import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import NestedGrid from "./Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    position: "relative",
    overflowX: "auto",
    maxHeight: 450,
    top:20,
    borderRadius: 5,
  },
}));

const MenuList = (props) => {
  const [size, setSize] = useState(window.innerHeight);
  const { menuData } = props;
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Paper style={{ justifyContent: "center", marginLeft: 10, height: size-175 }}>
        <List
          className={classes.root}
          style={{ justifyContent: "center", maxHeight: size - 225 }}
        >
        
          <NestedGrid menuData={menuData}/>
        </List>
      </Paper>
    </div>
  );
}

export default MenuList;
