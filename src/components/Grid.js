import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuCard from './MenuCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10
  }
}));

const NestedGrid = (props) => {
  const classes = useStyles(); 
  const {menuData} = props;

  const displayMenuCard = (menu) => {
       return(
           <Grid key={menu.id}>
                <MenuCard
                    image={menu.img}
                    name={menu.name}
                    discription={menu.dsc}
                    price={menu.price}
                />
           </Grid>
       )
  }

  return (
    <div className={classes.root}>
        <Grid lg={12} item container  spacing={5} style={{justifyContent:'center',}}>
            {menuData && menuData.map((menu) => {
                return displayMenuCard(menu)
            })}
        </Grid>
    </div>
  );
}

export default NestedGrid;