import React, {FC} from 'react';
import {Box, Grid} from "@mui/material";
import {H2} from "@components/atoms/CustomTypography"
import PostItem from "@components/post/PostItem"

type categoryProps = {
  articles : object[],
  data: object
}

const CategoryPage : FC<categoryProps> = ({articles, data}) => {
  return (
      <Box sx={{bgcolor:'text.light'}}>
      <Box sx={{p:5, bgcolor:"primary.main", color:"white"}}>
      <H2 fontSize="2rem" fontWeight="normal">{data.name}</H2>
      </Box>
      <Box sx={{p:8}}>
      
      <Grid container spacing={2} >
      {articles.length > 0 && articles.map((article, index)=> (
      <Grid item xs={12} sm={4}>
      <PostItem data={article} background={"white"} />
      </Grid>

      ))}
      </Grid>
      </Box>
      </Box>
  );
};

export default CategoryPage;
