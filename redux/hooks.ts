import {
  useSelector,
  type TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

import type { AppDispatch, RootState } from "./store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
