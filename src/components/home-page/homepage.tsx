import React from "react";
import Layout from "@components/layout/layout";
import Slider from "react-slick";
import SliderItem from "./slider-item/slideritem";
import Box from "@mui/material/Box";
import { H3 } from "@components/atoms/CustomTypography";
import { Button, Grid } from "@mui/material";
import { articles } from "@components/dump-data/data";
import PostItem from "@components/post/PostItem";

const HomePage = () => {
  return (
    <div>
      <Box sx={{ py: 1.5, overflow:"hidden" }}>
        <Slider
          autoplay
          slidesToShow={4}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 576,
              settings: {
                slidesToScroll: 2,
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 405,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2,
              },
            },
          ]}
        >
          <Box sx={{ px: 1 }}>
            <SliderItem />
          </Box>
          <Box sx={{ px: 1 }}>
            <SliderItem />
          </Box>
          <Box sx={{ px: 1 }}>
            <SliderItem />
          </Box>
          <Box sx={{ px: 1 }}>
            <SliderItem />
          </Box>
          <Box sx={{ px: 1 }}>
            <SliderItem />
          </Box>
        </Slider>
        <Box sx={{ p: 5, }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: 3,
              borderColor: "primary.main",
              p: 1,
              my: 2,
            }}
          >
            <H3>সাম্প্রতিক প্রবন্ধ</H3>
            <Button>আরো পড়ুন</Button>
          </Box>

          <Grid container spacing={2} sx={{ mt: 1, px: { xs: 0, md: 4 } }}>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} />
            </Grid>
          </Grid>
        </Box>


        <Box sx={{ p:5, bgcolor: "text.light",  }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: 3,
              borderColor: "primary.main",
              p: 1,
              my: 2,
            }}
          >
            <H3>সমসাময়িক</H3>
            <Button>আরো পড়ুন</Button>
          </Box>

          <Grid container spacing={2} sx={{ mt: 1, px: { xs: 0, md: 4 } }}>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} background={"white"} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} background={"white"} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={articles[0]} background={"white"} />
            </Grid>

          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;

HomePage.Layout = Layout;
