import CustomLink from "@components/atoms/CustomLink";
import { Search } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import React, { FC, Fragment } from "react";
import Footer from "./footer/footer";
import {categories, engCategories} from "@components/post/post-constants";
import { useRouter } from "next/router";

const Layout: FC = ({ children }) => {
const router = useRouter();

  return (
    <Fragment>
      <AppBar
        position="sticky"
        sx={{ bgcolor: "#ffffff", borderRadius: 0, color: "text.primary" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography>Syed Mahbub</Typography>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              alignItems: "end",
              minHeight: "64px",
              minWidth: "40%",
              "& button.active": {
                borderBottom: 3,
                borderColor: "primary.main",
              },
              "& button.not-active": {
                color: "text.primary",
              },
              "& button.not-active:hover": {
                color: "primary.main",
              },
              "& button.not-active::after": {
                content: "''",
                position: "absolute",
                bottom: 0,
                width: "100%",
                display: "block",
                borderBottom: 3,
                borderColor: "primary.main",
                transform: "scaleX(0)",
                transition: "transform 250ms ease-in-out",
                transformOrigin: "50% 50%",
              },
              "& button.not-active:hover::after": {
                transform: "scaleX(1)",
              },
            }}
          >
            {categories.map((nav, index) => (
              <CustomLink href={`/categories/${engCategories[index]}`} key={index}>
                <Button
                  variant="text"
                  className={router.asPath === `/categories/${engCategories[index]}` ? "active" : "not-active"}
                  sx={{
                    p: 1,
                    fontSize: "1rem",
                    borderRadius: 0,
                    transition: "all 0.7s ease",
                  }}
                >
                  {nav}
                </Button>
              </CustomLink>
            ))}
              <CustomLink href="/add/post">
                <Button
                  variant="text"
                  className={router.asPath === "/add/post" ? "active" : "not-active"}
                  sx={{
                    p: 1,
                    fontSize: "1rem",
                    borderRadius: 0,
                    transition: "all 0.7s ease",
                  }}
                >
                  নতুন পোস্ট
                </Button>
              </CustomLink>
            <IconButton className="not-active" sx={{ borderRadius: 0 }}>
              <Search />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: "80vh" }}>{children}</Box>
      <Footer />
    </Fragment>
  );
};

export default Layout;
