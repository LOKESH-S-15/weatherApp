import { Box } from "@mui/system";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  CardActionArea,
  Typography,
  TextField,
  Stack,
  Avatar,
  Paper
} from "@mui/material";

export default function Card(children) {
  let location = children.children.location;
  let current = children.children.current;

  return (
    <Box
      minWidth="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography mb={3}>
        {location.name} , {location.country}
      </Typography>
      <Paper elevation={3} className="content-card">
        <Stack spacing={1} p={2}>
          <Avatar
            src={current.condition.icon}
            alt="Partly cloudy"
            className="weather-img"
          />
          <Stack className="inner-content" direction={"row"}>
            <Typography>Tempratue</Typography>
            <Typography>
              {current.temp_c}°C/<span>{current.temp_f}°f</span>
            </Typography>
          </Stack>
          <Stack className="inner-content" direction={"row"}>
            <Typography>Condition</Typography>
            <Typography>{current.condition.text}</Typography>
          </Stack>
          <Stack className="inner-content" direction={"row"}>
            <Typography>Wind Speed</Typography>
            <Typography>{current.wind_kph} km/h</Typography>
          </Stack>
          <Stack className="inner-content" direction={"row"}>
            <Typography>Humidity</Typography>
            <Typography>{current.humidity} %</Typography>
          </Stack>
          <Stack className="inner-content" direction={"row"}>
            <Typography>Cloud coverage</Typography>
            <Typography>{current.cloud} %</Typography>
          </Stack>
          <Stack className="inner-content" direction={"row"}>
            <Typography>Last Updated</Typography>
            <Typography>{current.last_updated}</Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
