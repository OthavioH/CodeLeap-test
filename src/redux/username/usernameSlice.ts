import { createSlice } from "@reduxjs/toolkit";
import {
  resetUsernameAction,
  setUsernameAction,
} from "../../actions/usernameActions";

export interface UsernameState {
  value: string;
}

const initialState = {
  value: "",
};

const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setGlobalUsername: setUsernameAction,
    resetGlobalUsername: resetUsernameAction,
  },
});

export const { setGlobalUsername, resetGlobalUsername } = usernameSlice.actions;

export default usernameSlice.reducer;
