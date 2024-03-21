"use client";
// SignupPage.tsx

import React, { useState } from "react";
import ChooseCodeLanguage from "./steps/1_chooseCodeLanguage";

const signUpPage = () => {
  return (
    <>
      <ChooseCodeLanguage />
    </>
  );
};

export default signUpPage;
