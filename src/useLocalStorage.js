import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setStateDialogsFromLS } from "./redux/dialogsReducer";
import { setStateProfileFromLS } from "./redux/profileReducer";
import { setStateUsersFromLS } from "./redux/usersReducer";

const useLocalStorage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    const localState = localStorage.getItem("state");
    if (localState) {
      dispatch(setStateDialogsFromLS(JSON.parse(localState)?.dialogsReducer));
      dispatch(setStateProfileFromLS(JSON.parse(localState)?.profileReducer));
      dispatch(setStateUsersFromLS(JSON.parse(localState)?.usersReducer));
    }
  }, []);

  useEffect(() => {
    window.onunload = function () {
      console.log(state);
      localStorage.setItem("state", JSON.stringify(state));
    };
  }, [state]);
};

export { useLocalStorage };
