
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  usersList: [],
  usersListAll: [],
  isLoading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action)=> {
     state.usersList.push(action.payload)
    },
    deleteUsers: (state) => {
     return {
       ...state,
     }
    },
    updateUsers: (state)=> {
     return {
       ...state
     }
    },
    getUserStart(state){
      return {
      ...state,
      isLoading: true,
      error: null,
      }
    },
    getUserSuccess(state, action) {
       return {
         ...state,
         isLoading: false,
         error: null,
         usersListAll: action.payload,
         usersList: action.payload,
       };
    },
    getUserError(state, action){
      return{
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },  
  }});
//obtener los users
export const getUser = ()  => {
  return async (dispatch) => {
    dispatch(getUserStart());
    try {
      const response = await axios.get("/users");
      dispatch(getUserSuccess(response.data));
    } catch (error) {
      dispatch(getUserError(error));
    };
  };
};

//crear users
export const createdUser = (user) => {
  return async(dispatch) => {
    let response = await axios.post("/users", user);
    dispatch(addUsers(response.data));
  
  };
};

//actualizar user
export const updateUser = (nickname, body) => {
return async(dispatch) => {
  try {
    const response = await axios.put(`/users/${nickname}`, body)
    if(response){
      dispatch(updateUser())
      dispatch(getUser())
    }
  } catch (error) {
    console.log(error);
  };
};
};

//eliminar user
export const deleteUser = (id) => {
return async (dispatch) =>{
  try {
    await axios.put(`/users/${id}`);
    dispatch(deleteUser());
    dispatch(getUser())
  } catch (error) {
    console.log(error);
  }
}
};

 export const {addUsers, deleteUsers,updateUsers, getUserStart, getUserError, getUserSuccess } = userSlice.actions;

export default userSlice.reducer;
