import { Box } from "@mui/system";
import { useEffect, useState } from "react";
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
import "./weather.css";
import Card from "./Card";
import axios from "axios";

export default function Weather(props) {
  const [location, setLocation] = useState("");
  const [data, setData] = useState("");
  const [counter, setCounter] = useState("");

  function handleInput(e) {
    setLocation(e.target.value);
  }
  useEffect(() => {
    if (location !== "") {
      console.log(location);
      debouncing();
    } else {
      console.log(location);
      setData("");
    }
  }, [location]);

  async function performApi() {
    let url = `https://api.weatherapi.com/v1/current.json?key=ddd7f7deec694ff28cc180734232908&q=${location}`;
    try {
      let response = await axios.get(url);

      setData({
        location: response.data.location,
        current: response.data.current
      });
    } catch (error) {
      if (error.response.status === 400) {
        setData("no");
      }
    }
  }

  function debouncing() {
    clearInterval(counter);

    const newTimer = setTimeout(() => {
      performApi();
    }, 500);
    setCounter(newTimer);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Box className="header" fullWidth>
        <Typography>Weather App</Typography>
      </Box>
      <Stack
        spacing={3}
        mt={3}
        className="content"
        sm={{ "min-width": "60vw" }}
        md={{ "min-width": "50vw" }}
      >
        <TextField
          variant="outlined"
          id="location"
          label="Loaction"
          name="location 
        "
          title="loaction"
          fullWidth
          placeholder="Enter Location"
          value={location}
          onChange={(e) => {
            handleInput(e);
          }}
        ></TextField>
        {data === "" ? (
          <></>
        ) : data === "no" ? (
          <Typography className="error-msg">
            No matching location found
          </Typography>
        ) : (
          <Card children={data} />
        )}
      </Stack>
    </Box>
  );
}
