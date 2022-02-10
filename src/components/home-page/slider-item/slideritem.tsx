import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { FC, Fragment, ReactElement } from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import { articles } from "@components/dump-data/data";

const SliderItem: FC = () => {
  return (
    <Fragment>
      <Card sx={{ maxWidth: "100%", bgcolor: "text.light" }}>
        <CardActionArea>
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="230"
              image={articles[0].image}
              alt="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                p: 1,
                width: "100%",
                pb: "8px !important",
                color: "white",
                backgroundImage:
                  "linear-gradient(to bottom,#0000001c 0%,rgb(0 0 0) 81%)",
                fontFamily: "solaimanlipi",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                sx={{
                  fontFamily: "solaimanlipi",
                  fontSize: "1.5rem",
                  lineHeight: "25px",
                }}
                component="div"
              >
                শাইখ ইউসুফ আল ক্বারাদাওয়ীকে যেমন দেখেছি
              </Typography>
              <Typography variant="caption">{articles[0].author}</Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default SliderItem;
