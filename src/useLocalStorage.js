import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStateDialogsFromLS } from "./redux/dialogsReducer";
import { setStateProfileFromLS } from "./redux/profileReducer";

const useLocalStorage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    const localState = localStorage.getItem("state");
    console.log("localState", JSON.parse(localState));
    dispatch(setStateDialogsFromLS(JSON.parse(localState)?.dialogsReducer));
    dispatch(setStateProfileFromLS(JSON.parse(localState)?.profileReducer));
  }, []);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
};

export { useLocalStorage };
