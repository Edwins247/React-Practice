import cx from "clsx";
import axios from "axios";

import styles from "./CreateIssue.module.css";
import Button from "../components/Button";
import { useContext, useRef } from "react";
import TextField from "../components/TextField";
import { useForm, useUser } from "../hooks";
import { GITHUB_API } from "../api";
import { useNavigate } from "react-router-dom";

export default function CreateIssue() {
  const inputRef = useRef();
  const textareaRef = useRef();
  const navigate = useNavigate();
  const user = useUser();

  const { isSubmitting, inputValues, onChange, errors, handleSubmit } = useForm(
    {
      initialValues: { title: "", body: "" },
      onSubmit: async () =>
        await axios.post(
          `${GITHUB_API}/repos/Edwins247/github-issue-ex/issues`,
          inputValues,
          {
            headers: {
                Authorization: process.env.REACT_APP_GITHUB_TOKEN,
                'Content-Type': "applications/json",
            }
          }
        ),
      validate,
      onErrors: () => console.log('error'),
      refs: { title: inputRef, body: textareaRef },
      onSuccess: (result) => {
        console.log({ result });
        navigate('/', { replace: true });
      }
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={cx(styles.inputWrapper, styles.border)}>
        <form onSubmit={handleSubmit}>
          <TextField
            ref={inputRef}
            name="title"
            placeholder="Title"
            value={inputValues.title}
            onChange={onChange}
            error={errors.title}
          />
          <TextField
            ref={textareaRef}
            type="textarea"
            name="body"
            placeholder="Leave a comment"
            value={inputValues.body}
            onChange={onChange}
            error={errors.body}
          />
          <div className={styles.buttonWrapper}>
            <Button
              type="submit"
              style={{
                fontSize: "14px",
                backgroundColor: "green",
                color: "white",
              }}
              disabled={isSubmitting}
            >
              Submit new issue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function validate(values) {
  let errors = {};
  if (values.title === "") {
    errors = { title: "타이틀은 필수값입니다." };
  }

  return errors;
}
