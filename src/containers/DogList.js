import React, {useEffect} from 'react';
import axios from "axios";
import DogComponent from './DogComponent';
import {setDogs} from '../redux/actions/dogActions';
import { useDispatch, useSelector } from "react-redux";
import "../index.css"
const DogList = () =>{
    const dogs = useSelector((state => state.allDogs.dogs)); //access the redux store's state
    const dispatch = useDispatch();
    const fetchDogs = async () => {
        const response = await axios
        .get("https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json?fbclid=IwAR0rEz9hOOs0EoyNwLTUF_2evajFZhhYMbaZoPCEw6O_6IDQ6TsEmZjqcTk")
        .catch( (err) => {
            console.log("err", err);
        });
        dispatch(setDogs(response.data));
    };
    useEffect( () => {
        fetchDogs();
    }, []);
    return (
        <div className="custom-class">
        <div className="ui grid container">
            {dogs.map( item => 
            <DogComponent 
            key={item.id} 
            dog = {item} />
            )}
        </div>
        </div>

    )
}
export default DogList;