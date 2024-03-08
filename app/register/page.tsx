"use client";
// SignupPage.tsx

import React, { useState } from "react";
import RegisterPage from "./steps/1_form";
import SessionWrapper from "@/components/SessionWrapper";

const signUpPage = () => {
  return (
    <SessionWrapper>
      <RegisterPage />
    </SessionWrapper>
  );
};

export default signUpPage;
