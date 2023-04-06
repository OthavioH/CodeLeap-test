import { PayloadAction } from "@reduxjs/toolkit";
import { UsernameState } from "../redux/username/usernameSlice";

export function setUsernameAction(
  state: UsernameState,
  action: PayloadAction<string>
) {
  state.value = action.payload;
}

export function resetUsernameAction(state: UsernameState) {
  state.value = "";
}
