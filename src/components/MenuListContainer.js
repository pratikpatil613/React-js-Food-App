import React, { useEffect, useState } from "react";
import axios from "axios";
import MenuList from "./MenuList";
import Options from "./Options";
import TextInput from "./Input";

const MenuListContainer = () => {
    const [menuData, setMenuData] = useState(null);
    const [menuDataCopy, setMenuDataCopy] = useState(null);
    const [Item, setItem] = useState('BURGER');
    const [url, setUrl] = useState('https://ig-food-menus.herokuapp.com/burgers');
    
    useEffect(() => {
        axios.get(url)
        .then((res)=>{
            if(res.status === 200){
                setMenuData(res.data);
                setMenuDataCopy(res.data);
            }
        })
        .catch((err)=>{
            console.log('api error', err)
        })
        
    }, [url])

    const onChange = (value) => {
       let url = `https://ig-food-menus.herokuapp.com/${value}`
       setUrl(url)
       setItem(value.toUpperCase())
    }

    const onSearch = (event) => {
        let value = event.target.value;
        let filterMenuData = [];
        if(value.trim() === ''){
            setMenuData(menuDataCopy)
        }else{
            let isNumber = Number(value)
            filterMenuData = !Number.isNaN(isNumber) ?
            menuData.filter((menu)=> {return menu.price === isNumber}) :
            menuData.filter((menu)=> {return menu.name.toLowerCase().includes(value.toLowerCase())});
            console.log(filterMenuData)
            if(filterMenuData.length){
                setMenuData(filterMenuData)
            }
        }
    }

    return(
        <div style={{top:'5%'}}>
            <div style={{display:'flex', flexDirection:'row', marginTop:65}}>
                <Options onChange={onChange}/>
                <TextInput onSearch={onSearch}/>
            </div>
            <p style={{textAlign:'center',margin:8, fontFamily:'sans-serif', fontSize:22}}>{Item}</p>
            <MenuList menuData={menuData}/>
        </div>
    )
}

export default MenuListContainer;
