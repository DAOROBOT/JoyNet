import {
  TextField,
  Box,
  Button,
} from "@mui/material";


/* entries in formInfo
 * title: {
 *  defaultValue: "",
 *  required: bool = false,
 *  readonly: bool = false,
 *  disabled: bool = false,
 *  validator: ((str) -> bool) | undefined = undefined,
 */

export default function({formTitle, formInfo, onSubmit, isSubmitting}) {
  const inputFields = Object.entries(formInfo).map(([key, value], i) => {
    console.log(key, value);
    return (
      <div key={i}>
      </div>
    )
  });
  return (
    <Box component="form" onSubmit={onSubmit} className="bg-gray-700!  p-5 rounded-md flex flex-col gap-2">
      <div className="text-center">
        {formTitle}
      </div>
      {inputFields}
      <Button loading={isSubmitting} type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  )
}
