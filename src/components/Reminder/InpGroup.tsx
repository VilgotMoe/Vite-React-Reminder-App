import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface inputProps {
  title: string;
  variant: string;
  color: string;
  onChangee: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InpGroup = ({ title, variant, color, onChangee }: inputProps) => {
  return (
    <InputGroup mt={"2svh"}>
      <InputLeftAddon color={color}>{title}</InputLeftAddon>
      <Input
        type="text"
        color={color}
        placeholder="..."
        variant={variant}
        onChange={(e) => {
          onChangee(e);
        }}
      />
    </InputGroup>
  );
};

export default InpGroup;
