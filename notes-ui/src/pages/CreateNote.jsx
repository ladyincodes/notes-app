import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { noteSchema } from "../Validation/noteSchema";
import { createNote } from "../api/notes";
import { Button, TextField, Typography } from "@mui/material";

export default function CreateNote() {
  const navigate = useNavigate();

  return (
    <>
      <Typography
        variant="h5"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        Create Note
      </Typography>
      <Formik
        initialValues={{ title: "", content: "" }}
        validationSchema={noteSchema}
        onSubmit={async (values) => {
          await createNote(values);
          navigate("/");
        }}
      >
        {({ errors, touched }) => (
          <Form style={{ padding: "20px" }}>
            <div>
              <Field
                as={TextField}
                name="title"
                label="Title"
                fullWidth
                margin="normal"
                error={touched.title && !!errors.title}
                helperText={touched.title && errors.title}
              />
            </div>

            <div>
              <Field
                as={TextField}
                name="content"
                label="Content"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                error={touched.content && !!errors.content}
                helperText={touched.content && errors.content}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "10px" }}
              fullWidth
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
