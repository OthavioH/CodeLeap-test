import { PayloadAction } from "@reduxjs/toolkit";
import { NextURLParametersState } from "../redux/nextURLParameter/nextURLParameter";
import INextParameters from "../shared/types/NextParameters";

export function setNextURLParametersAction(
  state: NextURLParametersState,
  action: PayloadAction<INextParameters>
) {
  state.limit = action.payload.limit;
  state.offset = action.payload.offset;
}
