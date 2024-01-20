import { HStack } from "@chakra-ui/react";
import CompletedLayout from "./components/Completed/CompletedLayout";
import ReminderLayout from "./components/Render/ReminderLayout";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("");

  const handlePass = (title: string, time: string, color: string) => {
    setTitle(title);
    setTime(time);
    setColor(color);
  };

  return (
    <>
      <HStack justifyContent={"space-evenly"}>
        <ReminderLayout passValue={handlePass} />
        <CompletedLayout title={title} time={time} color={color} />
      </HStack>
    </>
  );
};

export default App;
