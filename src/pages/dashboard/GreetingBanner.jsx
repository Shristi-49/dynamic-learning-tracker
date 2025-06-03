import { Box, Typography, Avatar } from "@mui/material";

const GreetingBanner = ({ username }) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #8e44ad, #3498db)",
        color: "white",
        borderRadius: 2,
        p: 3,
        mb: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5">Hi, {username} 👋</Typography>
        <Typography variant="subtitle1">
          Welcome to the Dynamic Learning Partner Dashboard
        </Typography>
      </Box>
      <Avatar
        alt={username}
        src={`https://i.pravatar.cc/150?u=${username.toLowerCase()}`}
        sx={{ width: 60, height: 60 }}
      />
    </Box>
  );
};

export default GreetingBanner;