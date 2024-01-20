import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import InpGroup from "../Reminder/InpGroup";
import { useState } from "react";

interface Props {
  onAddReminder: (title: string, time: string, color: string) => void;
}

const ReminderModal = ({ onAddReminder }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("");

  return (
    <>
      <Tooltip hasArrow label="Add Reminder" bg={"green.400"}>
        <AddIcon
          onClick={onOpen}
          cursor={"pointer"}
          alignSelf={"center"}
          color={"green.400"}
        />
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"blue.500"}>Set New Reminder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InpGroup
              title="Title"
              variant="outline"
              color="blue.200"
              onChangee={(e) => {
                setTitle(e.target.value);
              }}
            />
            <InpGroup
              title="Time"
              variant="outline"
              color="red.200"
              onChangee={(e) => {
                setTime(e.target.value);
              }}
            />

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                mt={"3svh"}
              >
                Set Color
              </MenuButton>
              <MenuList>
                <MenuItem
                  color={"blue.200"}
                  onClick={() => {
                    setColor("blue.700");
                  }}
                >
                  Blue
                </MenuItem>
                <MenuItem
                  color={"red.200"}
                  onClick={() => {
                    setColor("red.700");
                  }}
                >
                  Red
                </MenuItem>
                <MenuItem
                  color={"purple.200"}
                  onClick={() => {
                    setColor("purple.700");
                  }}
                >
                  Purple
                </MenuItem>
              </MenuList>
            </Menu>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onAddReminder(title, time, color);
                onClose();
              }}
            >
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReminderModal;
