import React from "react";
import FormRow from "./FormRow";
import Button from "./Button";
type props = {
  children: React.ReactNode | React.ReactNode[];
  label?: string;
  error?: string;
  disabled?: boolean;
  onClick?: () => void;
};

function LocationRow({ children, error, label }: props) {
  return (
    <>
      <FormRow className="formJobLocation" label={label} error={error}>
        {children}
      </FormRow>
    </>
  );
}

function LocationButton({ children, disabled, onClick }: props) {
  return (
    <Button
      type="button"
      size="medium"
      color="secondary"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
LocationRow.Button = LocationButton;

export default LocationRow;
