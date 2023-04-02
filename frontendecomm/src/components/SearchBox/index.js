import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const SearchBox = ({ navigate }) => {
  const { handleSubmit, register } = useForm();
  const submitHandler = (e) => {
    console.log(e);
    if (e?.keyword.trim()) {
      navigate(`/search/${e?.keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(submitHandler)}
      className="d-flex justify-content-between"
    >
      <Form.Control
        type="text"
        name="keyword"
        {...register("keyword")}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="p-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
