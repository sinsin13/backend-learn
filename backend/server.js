import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

// get a list of 5 jokes with id, title, and punchline
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
    {
      id: 2,
      title: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 3,
      title: "Why did the bicycle fall over?",
      punchline: "Because it was two-tired!",
    },

    {
      id: 4,
      title: "Why did the math book look sad?",
      punchline: "Because it had too many problems!",
    },
    {
      id: 5,
      title: "Why did the chicken join a band?",
      punchline: "Because it had the drumsticks!",
    },
  ];
  res.json(jokes);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
