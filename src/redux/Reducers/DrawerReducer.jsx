import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open:true,
    ContentComponent: <p>Default content</p>,
    onOkay: (e) => {
        alert('ok redux')
    }
}

const DrawerReducer = createSlice({
  name: 'DrawerReducer',
  initialState,
  reducers: {
    handleDrawerAction: (state,action) => {
        state.open = action.payload
    },
    updateContentDrawerAction: (state,action) => {
        state.open = true
        state.ContentComponent = action.payload
    },
    updateOnOkayAction: (state,action) => {
        state.onOkay = action.payload
        
    }
  }
});

export const {handleDrawerAction,updateContentDrawerAction,updateOnOkayAction} = DrawerReducer.actions

export default DrawerReducer.reducer