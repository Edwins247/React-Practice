import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { GITHUB_API } from "./api";

export function useForm({
  initialValues,
  validate,
  refs,
  onSuccess,
  onErrors,
  onSubmit,
}) {
  const [inputValues, setInputValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    const validateResult = validate(inputValues);
    setErrors(validateResult);

    const errorKeys = Object.keys(validateResult);

    if (errorKeys.length !== 0) {
      const key = errorKeys[0];
      alert(validateResult[key]);
      onErrors();
      refs[key].current.focus();

      setIsSubmitting(false);
      return;
    }

    if (errorKeys.length === 0) {
      try {
        const result = await onSubmit();
        onSuccess(result);
      } catch (e) {
        onErrors();
      }
      return;
    }
  }

  return {
    inputValues,
    onChange,
    isSubmitting,
    errors,
    handleSubmit,
  };
}

async function getUserInfo() {
  const data = await axios.get(`${GITHUB_API}/user`, {
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN,
      "Content-Type": "application/json",
    },
  });

  return data.data;
}

export function useUser() {
  return useQuery(["userInfo"], () => getUserInfo(), { staleTime: "Infinity" });
}
