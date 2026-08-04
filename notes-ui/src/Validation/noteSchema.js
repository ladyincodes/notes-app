import * as Yup from "yup";

export const noteSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  constent: Yup.string().required("Content is required"),
});
