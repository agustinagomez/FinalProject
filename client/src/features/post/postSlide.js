import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postList: [],
  possListAll: [],
  isLoading: true,
};

const userSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPosts: (state, action)=> {
     state.postList.push(action.payload)
    },
    deletePosts: (state) => {
     return {
       ...state,
     }
    },
    updatePosts: (state)=> {
     return {
       ...state
     }
    },
    getPostStart(state){
      return {
      ...state,
      isLoading: true,
      error: null,
      }
    },
    getPostSuccess(state, action) {
       return {
         ...state,
         isLoading: false,
         error: null,
         possListAll: action.payload,
         postList: action.payload,
       };
    },
    getPostError(state, action){
      return{
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },  
  }});
//obtener los users
export const getPost = ()  => {
  return async (dispatch) => {
    dispatch(getPostStart());
    try {
      const response = await axios.get("/posts" );
      dispatch(getPostSuccess(response.data));
    } catch (error) {
      dispatch(getPostError(error));
    };
  };
};

//crear users
export const createdPost = (body) => {
  return async(dispatch) => {
    let response = await axios.post("/post", body);
    dispatch(addPosts(response.data));
  
  };
};

//actualizar user
export const updatePost = (id, body) => {
return async(dispatch) => {
  try {
    const response = await axios.put(`/post/${id}`, body)
    if(response){
      dispatch(updatePosts())
      dispatch(getPost())
    }
  } catch (error) {
    console.log(error);
  };
};
};

//eliminar user
export const deletePost = (id) => {
return async (dispatch) =>{
  try {
    await axios.put(`/post/${id}`);
    dispatch(deletePosts());
    dispatch(getPost())
  } catch (error) {
    console.log(error);
  }
}
};

 export const {addPosts, deletePosts,updatePosts, getPostStart, getPostError, getPostSuccess } = userSlice.actions;

export default userSlice.reducer;