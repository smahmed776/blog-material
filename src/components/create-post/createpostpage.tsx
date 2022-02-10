import React, { useState } from "react";
import {
  Typography,
  TextField,
  Stack,
  Grid,
  Button,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { H3 } from "@components/atoms/CustomTypography";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import API from "@api/API";
import { categories, allTags } from "@components/post/post-constants";
import { useRouter } from "next/router";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

type articleDataObject = {
  title: String;
  author: String;
  translator?: String;
  image: String | null;
  eng_title: String;
  markdown: String;
};

const CreatePostPage = () => {
  const [articleData, setArticleData] = useState<articleDataObject>({
    title: "",
    eng_title: "",
    image: "",
    author: "",
    translator: "",
    markdown: "",
  });
  const theme = useTheme();
  const router = useRouter();
  const handleArticleData = (props: any) => (event: any) => {
    setArticleData((prev) => ({
      ...prev,
      [props]: event.target.value,
    }));
  };
  const [tags, setTags] = useState<string[]>([]);
  const [cat, setCat] = useState<string[]>([]);

  const handleTagsChange = (event: SelectChangeEvent<typeof tags>) => {
    const {
      target: { value },
    } = event;
    setTags(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleCatChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const {
      target: { value },
    } = event;
    setCat([value as string]);
  };

  const handleArticleForm = async (event: any) => {
    event.preventDefault();
    const data = {
      title: articleData.title,
      author: articleData.author,
      eng_title: articleData.eng_title,
      image: articleData.image,
      translator: articleData.translator,
      markdown: articleData.markdown,
      tags,
      cat,
    };
    try {
      const res = await API.post("/new-article", data, {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.redirect) {
        router.push(`/articles/${res.data.redirect}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Box sx={{ p: 3, bgcolor: "primary.dark", color: "white" }}>
        <H3>নতুন পোস্ট লিখুন</H3>
      </Box>
      <Box
        sx={{ p: { xs: 3, sm: 10 } }}
        component={"form"}
        onSubmit={handleArticleForm}
      >
        <Grid container spacing={2} sx={{ px: { xs: 0, sm: 6 } }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label=" ইংরেজিতে শিরোনাম (অনুর্ধ্ব ১০০ শব্দে লিংকে সংযোগ করার জন্য)"
              type="text"
              value={articleData.eng_title}
              onChange={handleArticleData("eng_title")}
              inputProps={{ maxLength: 100 }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label=" প্রবন্ধের শিরোনাম বাংলায় (অনুর্ধ্ব ১০০ শব্দে)"
              type="text"
              value={articleData.title}
              onChange={handleArticleData("title")}
              inputProps={{ maxLength: 100 }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label=" প্রবন্ধে একটি ছবি সংযুক্ত করুন (ছবির লিংক দিন)"
              type="url"
              value={articleData.image}
              onChange={handleArticleData("image")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label=" মূল লেখকের নাম (আপনি সংকলক অথবা অনুবাদক হলে প্রযোজ্য)"
              value={articleData.author}
              onChange={handleArticleData("author")}
              type="text"
              inputProps={{
                maxLength: 100,
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Stack direction="row" spacing={3}>
              <TextField
                id="demo-multiple-chip"
                select
                label="ক্যাটাগরি সিলেক্ট করুন"
                sx={{ minWidth: 200 }}
                value={cat}
                onChange={(event) => handleCatChange(event)}
              >
                {categories.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="column" sx={{ minWidth: 200 }}>
              <InputLabel id="demo-multiple-chip-label" sx={{ my: 1 }}>
                প্রবন্ধের সংশ্লিষ্ট ট্যাগসমূহ সিলেক্ট করুন
              </InputLabel>
              <Select
                label="প্রবন্ধের সংশ্লিষ্ট ট্যাগসমূহ সিলেক্ট করুন"
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                fullWidth
                value={tags}
                onChange={handleTagsChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {allTags.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={tags.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label=" প্রবন্ধ"
              type="text"
              value={articleData.markdown}
              onChange={handleArticleData("markdown")}
              multiline
              rows={10}
              inputProps={{
                minLength: 350,
              }}
              helperText="Must be at least 350 character long."
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth>
              সাবমিট করুন
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CreatePostPage;
