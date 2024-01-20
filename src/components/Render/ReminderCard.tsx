import { Badge, HStack, Switch, Text } from "@chakra-ui/react";

interface Props {
  title: string;
  time: string;
  color: string;
  showCheckBox?: boolean;
  isChecked: (event: any) => void;
}

const ReminderCard = ({
  title,
  time,
  color,
  showCheckBox,
  isChecked,
}: Props) => {
  return (
    <HStack
      bg={color}
      padding={"7px"}
      borderRadius={"10px"}
      justifyContent={"space-between"}
      mt={"1svh"}
    >
      {showCheckBox && <Switch onChange={() => isChecked(title)} />}
      <Text>{title}</Text>
      <Badge colorScheme={color}>{time}</Badge>
    </HStack>
  );
};

export default ReminderCard;
