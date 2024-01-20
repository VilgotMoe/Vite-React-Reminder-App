import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
} from "@chakra-ui/react";
import ReminderModal from "./ReminderModal";
import { useState } from "react";
import ReminderCard from "./ReminderCard";

interface Props {
  passValue: (title: string, time: string, color: string) => void;
}

const ReminderLayout = ({ passValue }: Props) => {
  const [item, setItem] = useState<
    { title: string; time: string; color: string }[]
  >([]);
  const [titles, setTitles] = useState("");
  const [times, setTimes] = useState("");
  const [colors, setColors] = useState("");

  const handleAddReminder = (title: string, time: string, color: string) => {
    setTitles(title);
    setTimes(time);
    setColors(color);

    if (title === "" || time === "" || color === "") return 0;
    setItem([...item, { title, time, color }]);
  };

  const handleCheck = (titleToDelete: string) => {
    setItem(item.filter((reminder) => reminder.title !== titleToDelete));
    passValue(titles, times, colors);
  };

  return (
    <HStack h={"100svh"} w={"30vw"}>
      <Card
        variant={"elevated"}
        h={"80svh"}
        w={"25vw"}
        boxShadow={" -.2em 0 .4em purple;"}
      >
        <CardHeader textAlign={"center"} fontWeight={"bold"}>
          <Heading fontSize={"1.5vw"} color={"blue.500"}>
            Reminders / Goals
          </Heading>
        </CardHeader>
        <ReminderModal onAddReminder={handleAddReminder} />
        <CardBody>
          {item.map((reminder, index) => (
            <ReminderCard
              key={index}
              title={reminder.title}
              time={reminder.time}
              color={reminder.color}
              showCheckBox
              isChecked={() => handleCheck(reminder.title)}
            />
          ))}
        </CardBody>
      </Card>
    </HStack>
  );
};

export default ReminderLayout;
