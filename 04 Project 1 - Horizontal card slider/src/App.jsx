import React from "react";
import Header from "./components/Header";
import Center from "./components/Center.jsx/Center";

const App = () => {
  const users = [
    {
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=70",
      info: "Senior Software Engineer",
      status: "Online",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=70",
      info: "Product Manager",
      status: "Busy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=70",
      info: "Full Stack Developer",
      status: "Online",
    },
    {
      image:
        "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=400&q=70",
      info: "UI/UX Designer",
      status: "Away",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=70",
      info: "Business Analyst",
      status: "Online",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=70",
      info: "Marketing Manager",
      status: "Busy",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=70",
      info: "Backend Developer",
      status: "Online",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=70",
      info: "Project Manager",
      status: "Away",
    },
    {
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=70",
      info: "Software Architect",
      status: "Online",
    },
  ];

  return (
    <div className="w-full h-screen scrollbar-none overflow-auto">
      <Header />
      <Center users={users} />
    </div>
  );
};

export default App;
