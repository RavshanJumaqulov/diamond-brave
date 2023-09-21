import { Box, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import moment from "moment";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../Context";

export default function BlogItemSM({index, item}) {
  const navigate = useNavigate()
  const { lan } = useContext(Context)
  return (
    <Grid2 xs={12} sm={6}>
      <Box
      onClick={()=>navigate(`/news/page_1/${item.id}`)}
        sx={{
          width: "100%",
          pl: {xs: 0, sm: index%2 == 0 ? 1.5 : 0},
          pr: {xs: 0, sm: index%2 == 0 ? 1.5 : 0},
          mb: 3,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Box
          component={"img"}
          src={item.img}
          sx={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: 3,
            mr: 2,
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography
            sx={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: "600",
              fontSize: { xs: 17, sm: 18 },
              width: "auto",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              cursor: 'pointer',
            }}
          >
            {item[`title_${lan}`]}
          </Typography>
          <Stack
            direction={"row"}
            sx={{
              opacity: 0.72,
              alignItems: "center",
              fontSize: 12,
              fontFamily: "Nunito, sans-serif",
              fontWeight: "700",
              cursor: 'default',
            }}
          >
            {moment(item.created_at).fromNow()}
            <Box
              sx={{
                mx: 2,
                width: 4,
                height: 4,
                borderRadius: "50%",
                backgroundColor: "currentColor",
                textTransform: 'lowercase'
              }}
            ></Box>
            {lan == 'uz' ? `${item.views} marta o'qildi` : lan == 'en' ? `Read ${item.views} times` : `Прочтите ${item.views} раз`}
          </Stack>
        </Box>
      </Box>
    </Grid2>
  );
}
