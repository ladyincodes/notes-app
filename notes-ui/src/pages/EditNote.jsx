import { Button, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { getNote, updateNote } from "../api/notes";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { noteSchema } from "../Validation/noteSchema";

export default function EditNote() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialValues, setInitialValues] = useState(null);

  useEffect(() => {
    loadNote();
  }, []);

  const loadNote = async () => {
    const response = await getNote(id);
    setInitialValues(response.data);
  };

  if (!initialValues) return <div>Loading...</div>;

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={noteSchema}
        onSubmit={async (values) => {
          await updateNote(id, values);
          navigate("/");
        }}
      >
        {(touched, errors) => (
          <Form style={{ padding: "20px" }}>
            <Field
              as={TextField}
              name="title"
              label="Title"
              fullWidth
              margin="normal"
              error={touched.title && !!errors.title}
              helperText={touched.title && errors.title}
            />

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

            <Button
              type="submit"
              variant="contained"
              style={{ marginTop: "10px" }}
              fullWidth
            >
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
