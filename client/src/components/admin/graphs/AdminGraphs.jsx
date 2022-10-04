import React, { useEffect, useState } from "react";
import style from "./graphs.module.css";
import { Box } from "@mui/system";
import PieComponent from "../pieGraph/Pie";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/features/users/usersGetSlice";
import { getPost } from "../../../redux/features/post/postGetSlice";
import { arrayToDataGraphsPosts, arrayToDataGraphsUser } from "../utils";
import AreaComponent from "../areaGraphs/Area";

const AdminGraphs = () => {
  const dispatch = useDispatch();
  const userDataGraphs = useSelector((state) => arrayToDataGraphsUser(state.users.usersListAll));
  const postDataGraphs = useSelector((state) => arrayToDataGraphsPosts(state.posts.possListAll));
  useEffect(() => {
    dispatch(getPost());
    dispatch(getUser());

  }, [dispatch]);

  return (
    <Box className={style.backgroundContainer}>
      <Box className={style.containerGraphs}>
        <PieComponent data={userDataGraphs} />
      </Box>
      <Box className={style.containerGraphs}></Box>
      <AreaComponent data={postDataGraphs}/>
    </Box>
  );
};

export default AdminGraphs;