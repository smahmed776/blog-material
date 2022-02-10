import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { FC, Fragment, ReactElement, useRef } from "react";
import { VisibilityOutlined } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import ShowMoreText from "react-show-more-text";
import CustomLink from "@components/atoms/CustomLink";

type postItemProps = {
  data: {
    slug: string;
    image: string;
    author: string;
    title: string;
    sanitizedHtml: string;
  };
  background?: String;
};

const PostItem: FC<postItemProps> = ({ data, background }) => {
  const cardBgcolor: String = background ? background as string : "text.light"
  return (
    <Fragment>
      <Card
        sx={{
          maxWidth: "100%",
          bgcolor: cardBgcolor as string,
        }}
      >
        <CustomLink href={`/articles/${data.slug}`}>
          <CardActionArea>
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="170"
                image={data.image}
                alt="green iguana"
              />
              <Typography
                variant="caption"
                color="primary"
                sx={{
                  p: 1,
                  position: "absolute",
                  bottom: 0,
                  left: "15px",
                  bgcolor: "text.light",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                {data.author}
              </Typography>
            </Box>
            <CardContent>
              <Box sx={{ fontSize: "2rem", fontFamily: "solaimanlipi" }}>
                <ShowMoreText
                  lines={2}
                  more="."
                  less="."
                  expanded={false}
                  width={700}
                  truncatedEndingComponent={".."}
                >
                  {data.title}
                </ShowMoreText>
              </Box>
              <Box sx={{ color: "text.muted" }}>
                <ShowMoreText
                  lines={2}
                  more="."
                  less="."
                  expanded={false}
                  width={700}
                  truncatedEndingComponent={".."}
                >
                  {data.sanitizedHtml}
                </ShowMoreText>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <ListItem sx={{ alignSelf: "flex-end", width: "fit-content" }}>
                <ListItemIcon sx={{ p: 1 }}>
                  <VisibilityOutlined />
                </ListItemIcon>
                Total read
              </ListItem>
            </CardActions>
          </CardActionArea>
        </CustomLink>
      </Card>
    </Fragment>
  );
};

export default PostItem;
