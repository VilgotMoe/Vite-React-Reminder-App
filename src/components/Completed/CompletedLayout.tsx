import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReminderCard from "../Render/ReminderCard";
import { ArrowBackIcon, DeleteIcon } from "@chakra-ui/icons";

interface passedValueProps {
  title: string;
  time: string;
  color: string;
}

const CompletedLayout = ({ title, time, color }: passedValueProps) => {
  const [item, setItem] = useState<
    { title: string; time: string; color: string }[]
  >([]);

  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    if (
      title !== "" &&
      !item.some((reminder) => reminder.title === title) &&
      !isDeleted
    ) {
      setItem((prevItems) => [...prevItems, { title, time, color }]);
      console.log("passed values");
    }
  }, [title, item, isDeleted]);

  const handleDeleteAll = () => {
    console.log("Deleting");
    setItem([]);
    setIsDeleted(true);
  };

  return (
    <HStack h={"100svh"} w={"30vw"}>
      <Card
        variant={"elevated"}
        h={"80svh"}
        w={"25vw"}
        boxShadow={" -.2em 0 .4em pink;"}
      >
        <CardHeader textAlign={"center"} fontWeight={"bold"}>
          <Heading fontSize={"1.5vw"} color={"blue.500"}>
            Completed
          </Heading>
          <HStack justifyContent={"center"} mt={"2svh"}>
            <Tooltip hasArrow label="Return Reminder" bg={"green.400"}>
              <ArrowBackIcon color={"green.400"} cursor={"pointer"} />
            </Tooltip>
            <Tooltip hasArrow label="Delete All Completed" bg={"red.400"}>
              <DeleteIcon
                color={"red.400"}
                cursor={"pointer"}
                onClick={() => {
                  handleDeleteAll();
                }}
              />
            </Tooltip>
          </HStack>
        </CardHeader>
        <CardBody>
          {item.map((reminder, index) => (
            <ReminderCard
              key={index}
              title={reminder.title}
              time={reminder.time}
              color={reminder.color}
              isChecked={() => console.log("Checked")}
            />
          ))}
        </CardBody>
      </Card>
    </HStack>
  );
};

export default CompletedLayout;
