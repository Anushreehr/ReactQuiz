import React from "react";
import { Button, Typography } from "@mui/material";
import "./index.css";
import { useNavigate } from "react-router-dom";

const data1 = [
 {
  id:1,
 name: "Java"
 },
 {
  id:2,
 name: "React"
 },
 {
  id:3,
 name: "Javascript"
 },
 {
  id:4,
 name: "Redux"
 }
];
const data2 = ["NextJs", "Supabase", "Express"];
const data3 = ["HTML", "CSS", "MUI", "Typescript"];
const data4 = ["Retool", "Nodejs", "Others"];
function Screen1(props) {
  const navigate = useNavigate();
  const { sx, ...other } = props;
  return (
    <div>
      <div className='main'>
        <div>
          <Typography variant='h3'>
            Select one of your skills to give assessments
          </Typography>
        </div>
        <div className='sub-main'>
          <div>
            {data1.map((data) => (
              <Button
                sx={{
                  p: 1,
                  m: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  width: "200px",
                  fontWeight: "700",
                  ...sx,
                }}
                onClick={() => navigate(`/screen2/${data.id}`)}
              >
                {data.name}
              </Button>
            ))}
          </div>
          <div className='sub-heading_heading'>
            {data2.map((data) => (
              <Button
                sx={{
                  p: 1,
                  m: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  width: "200px",
                  fontWeight: "700",
                  ...sx,
                }}
              >
                {data}
              </Button>
            ))}
          </div>
          <div>
            {data3.map((data) => (
              <Button
                sx={{
                  p: 1,
                  m: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  width: "200px",
                  fontWeight: "700",
                  ...sx,
                }}
              >
                {data}
              </Button>
            ))}
          </div>
          <div className='sub-heading_heading'>
            {data4.map((data) => (
              <Button
                sx={{
                  p: 1,
                  m: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "grey.100",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: "1rem",
                  fontSize: "0.875rem",
                  width: "200px",
                  fontWeight: "700",
                  ...sx,
                }}
              >
                {data}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Screen1;
