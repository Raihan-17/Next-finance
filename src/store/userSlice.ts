import { createSlice } from "@reduxjs/toolkit";
import {userData} from "@/data/users";
import { UserProfile } from "@/types/finance";

const initialState: UserProfile = userData;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export default userSlice.reducer;
