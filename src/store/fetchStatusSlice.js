import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: 'fetchStatus',
  initialState: {
    fetchDone: false, // flase: 'PENDING' and trie: 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (store, action) => {
      return store;
    },
    markFetchingStarted: (store, action) => {
      return store;
    },
    markFetchingFinished: (store, action) => {
      return store;
    },
  }
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice