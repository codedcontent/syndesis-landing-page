import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import heroImg from "../assets/wait-unsplash.jpg";
import CustomButton from "../components/CustomButton";
import CustomTextField from "../components/CustomTextField";
import * as EmailValidator from "email-validator";
import constants from "../constants/constants";
import axios from "axios";

const GettingStarted = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [addedToWaitList, setAddedToWaitList] = useState();
  const [error, setError] = useState({ name: "", email: "" });

  console.log(`${constants.serverUrl}/users/wait-list`);

  const setAnError = (type, error) => {
    setError((prev) => ({ ...prev, [type]: error }));
  };

  const handleChange = (value, type) => {
    setAnError(type, "");
    setForm((prev) => ({ ...prev, [type]: value }));
  };

  const checkFormForError = () => {
    if (!form.name) {
      setAnError("name", "Please provide your name");
      return false;
    } else if (!form.email || !EmailValidator.validate(form.email)) {
      setAnError("email", "Please provide a valid email");
      return false;
    } else {
      return true;
    }
  };

  const submitForm = async () => {
    // Ensure there are no error
    const formIsValid = checkFormForError();
    if (!formIsValid) return;

    setLoading(true);

    try {
      const url = `${constants.serverUrl}/users/wait-list`;
      await axios.post(url, form);

      setAddedToWaitList(true);
    } catch (error) {
      setAddedToWaitList(false);
    } finally {
      setLoading(true);
      setFormSubmitted(true);
    }
  };

  const close = () => {
    setLoading(false);
    setFormSubmitted(false);
  };

  return (
    <div className="md:px-16 m-auto px-5 w-full h-[90vh] flex items-center">
      {/* The Intro Text */}
      <div className="lg:w-[50%] md:w-2/3 w-max h-max border-4 border-black bg-white space-y-7 px-5 py-8">
        {!formSubmitted ? (
          <>
            <div className="space-y-2">
              <p className="font-title text-4xl font-bold">
                Let's Get You Started
              </p>

              <p className="font-text font-extralight">
                We're glad to see you're interested in automating your business
                processes with Syndesis.
              </p>

              <p className="font-text font-extralight">
                We are not open to the public yet but we could add you to our
                wait list and contact you immediately we launch to the public.
                Please sign up below.
              </p>
            </div>

            <div className="space-y-3">
              <CustomTextField
                type="name"
                handleChange={handleChange}
                title={"Name"}
                placeholder="What's your name?"
                error={error.name}
              />

              <CustomTextField
                type="email"
                handleChange={handleChange}
                title={"Email"}
                placeholder="Please enter a valid email"
                error={error.email}
              />

              <CustomButton
                title={
                  loading ? (
                    <CircularProgress sx={{ color: "white" }} size={25} />
                  ) : (
                    "GET STARTED for FREE"
                  )
                }
                customStyle="w-full"
                handleClick={submitForm}
              />
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <p className="font-title text-4xl font-bold">
                {addedToWaitList ? "You're on the List." : "Uh Oh."}
              </p>

              <p className="font-text font-extralight">
                {addedToWaitList
                  ? "We'll contact you once we launch to the public."
                  : "Something went wrong, please try again."}
              </p>
            </div>

            <CustomButton title={"Okay, thanks"} handleClick={close} />
          </>
        )}
      </div>

      {/* Hero Img */}
      <img
        src={heroImg}
        alt="Hero Pic"
        className="absolute top-0 right-0 md:w-[65%] h-screen -z-10 appear object-left object-cover hidden md:block"
      />
    </div>
  );
};

export default GettingStarted;
