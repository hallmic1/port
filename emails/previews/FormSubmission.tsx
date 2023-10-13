import React from "react";
import FormSubmission from "../FormSubmission";

export function preview() {
  return <FormSubmission user={{
    name: "John Doe",
    email: "johndoe@jd.com",
    phone: "1234567890",
    message: "Hello, I'm John Doe. I'm a software engineer and I'm interested in hiring you."
  }} />;
}
