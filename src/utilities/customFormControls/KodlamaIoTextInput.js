import React from "react";
import { FormField, Label } from "semantic-ui-react";
import { ErrorMessage, Field, useField } from "formik";

export default function KodlamaIoTextInput({ ...props }) {
  const [field, meta] = useField(props);

  return (
    <FormField error={meta.touched && !!meta.error}>
      <input {...field} {...props} />
      {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error}></Label>
      ) : null}
    </FormField>
  );
}
