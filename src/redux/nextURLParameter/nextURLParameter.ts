import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import INextParameters from "../../shared/types/NextParameters";
import { setNextURLParametersAction } from "../../actions/nextURLActions";

export interface NextURLParametersState {
  limit: number;
  offset: number;
}

export const nextURLParametersSlice = createSlice({
  name: "nextURLParameters",
  initialState: {
    limit: 10,
    offset: 0,
  } as NextURLParametersState,
  reducers: {
    setNextURLParameters: setNextURLParametersAction,
  },
});

export const { setNextURLParameters } = nextURLParametersSlice.actions;

export default nextURLParametersSlice.reducer;
