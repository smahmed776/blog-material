import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import React, { FC, Fragment, ReactElement, useEffect, useRef } from "react";
import CustomImage from "@components/atoms/CustomImage";
import { H3, H1, H5, H6, Small } from "@components/atoms/CustomTypography";
import ShowMoreText from "react-show-more-text";
import Divider from "@mui/material/Divider";
import PostItem from "./PostItem";
import Layout from "@components/layout/layout";
import { articles } from "@components/dump-data/data";
import { categories, engCategories } from "@components/post/post-constants";
import CustomLink from "@components/atoms/CustomLink";

type postPageProps = {
  article: {
    title: string;
    image: string;
    cat: string[] | [];
    author: string;
    sanitizedHtml: string;
    created: string | Date | number;
  };
};

const finalEnlishToBanglaNumber: any = {
  "0": "০",
  "1": "১",
  "2": "২",
  "3": "৩",
  "4": "৪",
  "5": "৫",
  "6": "৬",
  "7": "৭",
  "8": "৮",
  "9": "৯",
};
String.prototype.getDigitBanglaFromEnglish = function () {
  let retStr = this;
  for (let x in finalEnlishToBanglaNumber) {
    retStr = retStr.replace(new RegExp(x, "g"), finalEnlishToBanglaNumber[x]);
  }
  return retStr;
};

const PostPage: FC<postPageProps> = ({ article }): ReactElement => {
  const indexOfCategory = categories.indexOf(article.cat[0]);
  const categoryHref = engCategories[indexOfCategory];
  const textRef = useRef();
  useEffect(() => {
    const selectBox: any = textRef.current;
    if (selectBox) {
      selectBox.innerHTML = article.sanitizedHtml;
    }
  }, []);
  const data = articles[0];
  const dayNames = [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার",
    "শুক্রবার",
    "শনিবার",
  ];
  const monthNames = [
    "জানুয়ারি",
    "ফেব্রুয়ারী",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর",
  ];

  const bangla_date = (created: string | Date | number) => {
    const getAppendZero = (value: string | number) => {
      if (value < 10) {
        return `0${value.toString()}`;
      }
      return value.toString();
    };
    const date = new Date(created);
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear().toString();
    const day = getAppendZero(date.getDay());
    const hour = getAppendZero(date.getHours());
    const minute = getAppendZero(date.getMinutes());

    const banglaFinal: string =
      day + " " + month + " " + year + ", " + hour + " : " + minute;

    return banglaFinal.getDigitBanglaFromEnglish();
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            position: "relative",
            background: "black",
            minHeight: { xs: "100px", sm: "315px" },
            display: "flex",
            alignItems: "end",
            overflow: "hidden",
            px: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              display: "flex",
              justifyContent: "center",
              height: "100%",
              width: "100%",
            }}
          >
            <img
              src={article.image}
              style={{
                maxHeight: "100%",
                minWidth: "50%",
                maxWidth: "90%",
                opacity: "0.7",
              }}
            />
          </Box>
          <Box
            sx={{
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              pl: 4,
            }}
          >
            <Box
              sx={{
                color: "white",
                padding: "1rem",
                width: "100%",
                position: "relative",
                fontFamily: "solaimanlipi",
              }}
            >
              <CustomLink href={`/categories/${categoryHref}`}>
                <H5
                  fontSize="1.3rem"
                  sx={{
                    p: 1,
                    width: "fit-content",
                    position: "relative",
                    opacity: "1",
                    bgcolor: "white",
                    color: "black",
                  }}
                >
                  {article.cat[0]}
                </H5>
              </CustomLink>
              <H1
                fontSize="2.5rem"
                sx={{
                  position: "relative",
                  p: 1.5,
                  bgcolor: "white",
                  color: "black",
                  fontFamily: "solaimanlipi",
                }}
              >
                {article.title}
              </H1>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={0.5} sx={{ p: 2, height: "fit-content" }}>
          <Grid item xs={12} md={8}>
            <Stack
              sx={{
                borderBottom: 1,
                borderColor: "text.disabled",
                p: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: {
                  xs: "column-reverse",
                  sm: "row",
                },
              }}
            >
              <Stack
                direction="row"
                sx={{ p: 1, alignItems: "center", alignSelf: "flex-start" }}
              >
                <img
                  src="/assets/4.jpg"
                  alt="img"
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Stack
                  sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    p: 1,
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      p: { xs: 0, sm: 1.5 },
                      mr: 1,
                      borderRight: { xs: 0, sm: 1 },
                      borderColor: { sm: "text.disabled" },
                    }}
                  >
                    {article.author}
                  </Typography>
                  <Typography variant="body1" sx={{ p: 1 }}>
                    {bangla_date(article.created)}
                  </Typography>
                </Stack>
              </Stack>
              <Button sx={{ width: { xs: "100%", sm: "auto" } }}>
                Download
              </Button>
            </Stack>
            <Box
              sx={{
                py: 2,
                px: 1.5,
                fontSize: "1.5rem",
                fontFamily: "solaimanlipi, roboto",
                lineHeight: "31px",
                textAlign: "justify",
                overflow: "hidden",
                "& blockquote": {
                  ml: 0,
                  pl: 5,
                  borderLeft: 3,
                  borderColor: "primary.dark",
                },
              }}
              ref={textRef}
            >
              {/* <ShowMoreText
                lines={1200}
                more="Show more"
                less="Show less"
                expanded={false}
                width={700}
                truncatedEndingComponent={"..."}
              >
            {article.sanitizedHtml}
            </ShowMoreText> */}
            </Box>
            <Stack
              direction="row"
              spacing={1}
              divider={<Divider orientation="vertical" flexItem />}
              sx={{
                width: "100%",
                justifyContent: "space-around",
                p: 3,
                borderTop: 1,
                borderColor: "text.disabled",
                mt: 1,
              }}
            >
              <Typography sx={{ p: 1 }}>11021 total read</Typography>
              <Typography sx={{ p: 1 }}>11021 total read</Typography>
            </Stack>
            <Box sx={{ bgcolor: "text.light", pl: 0.5, mx: { xs: 0, sm: 2 } }}>
              <Stack direction="row" spacing={1.5} sx={{ p: 1 }}>
                <img
                  src="/assets/4.jpg"
                  style={{
                    height: "70px",
                    width: "70px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />

                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  deleniti tenetur atque, velit unde animi nemo magnam quo,
                  expedita quibusdam hic alias quam dolores, accusantium
                  voluptatibus commodi molestiae quidem saepe. Odit esse
                  praesentium saepe quasi consequatur assumenda tempora!
                  Laudantium minus saepe, odit eveniet architecto, maxime est
                  nobis, tenetur obcaecati recusandae quia. Neque nulla eum
                  voluptate, amet at repudiandae iure ipsum!
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ px: { xs: 2, md: 3 } }}>
              <H3
                sx={{ borderLeft: 3, borderColor: "primary.main", p: 1, my: 2 }}
              >
                এ মাসের সর্বাধিক পঠিত
              </H3>

              <Grid container spacing={2} sx={{ mt: 1, px: 0 }}>
                <Grid item xs={12} sm={4} md={12}>
                  <PostItem data={data} />
                </Grid>
                <Grid item xs={12} sm={4} md={12}>
                  <PostItem data={data} />
                </Grid>
                <Grid item xs={12} sm={4} md={12}>
                  <PostItem data={data} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ px: { xs: 2, sm: 3, md: 10 } }}>
          <H3 sx={{ borderLeft: 3, borderColor: "primary.main", p: 1, my: 2 }}>
            এই বিভাগের অন্যান্য প্রবন্ধ
          </H3>

          <Grid container spacing={2} sx={{ mt: 1, px: { xs: 0, md: 4 } }}>
            <Grid item xs={12} sm={4}>
              <PostItem data={data} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={data} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostItem data={data} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default PostPage;
