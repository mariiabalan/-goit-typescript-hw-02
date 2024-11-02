import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { TbCameraSearch } from "react-icons/tb";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      toast.error("Please enter text to search for images.");
    } else {
      console.log(values);
      onSearch(values.query);
    }
  };
  return (
    <header className={s.header}>
      <Formik
        className={s.formik}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <button className={s.btn} type="submit">
            <TbCameraSearch />
          </button>
          <Field
            className={s.field}
            name="query"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          ></Field>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
