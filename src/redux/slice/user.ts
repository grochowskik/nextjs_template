import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  loggedIn: boolean;
  lifetime: number | null;
  timestamp: number | null;
}

const initialState: UserState = {
  loggedIn: false,
  lifetime: null,
  timestamp: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action: PayloadAction<{ isLoggedIn: boolean }>) {
      state.loggedIn = action.payload.isLoggedIn;
    },
    setLifetime(state, action: PayloadAction<{ lifetime: number }>) {
      state.lifetime = action.payload.lifetime;
    },
    setTimestamp(state) {
      state.timestamp = Date.now();
    },
  },
});

export const { setLoggedIn, setLifetime, setTimestamp } = userSlice.actions;

export default userSlice.reducer;
