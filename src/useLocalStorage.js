import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setStateFromLocalStorage} from "./redux/dialogsReducer";

const useLocalStorage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state);
    useEffect(() => {
        const localState = localStorage.getItem('state');
        dispatch(setStateFromLocalStorage(JSON.parse(localState)));
    }, []);

    //useEffect(() => {
    //    localStorage.setItem('state', JSON.stringify(state))
    //}, [state])
}

export {useLocalStorage}