import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";
import InputField from "../components/InputField";
import { checkEmailValidity } from "../utils/validation";

const errorsInitial = {
  name: false,
  email: false,
  message: false,
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(
    sessionStorage.getItem("submitted") === "true"
  );
  const [errors, setError] = useState(errorsInitial);
  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }
  function validateForm() {
    let valid = true;
    if (name.length === 0) {
      valid = false;
      setError((prev) => ({ ...prev, name: true }));
    } else {
      setError((prev) => ({ ...prev, name: false }));
    }
    if (checkEmailValidity(email) === false) {
      valid = false;
      alert("Please enter a valid email address.");
      setError((prev) => ({ ...prev, email: true }));
    } else {
      setError((prev) => ({ ...prev, email: false }));
    }
    if (message.length === 0) {
      valid = false;
      setError((prev) => ({ ...prev, message: true }));
    } else {
      setError((prev) => ({ ...prev, message: false }));
    }

    return valid;
  }
  const handleSubmit = async () => {
    if (!validateForm()) return;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        access_key: import.meta.env.VITE_PUBLIC_WEB3FORMS_API_KEY,
      }),
    });
    console.log(response);
    if (response.ok) {
      alert("Thank you for contacting us!");
      sessionStorage.setItem("submitted", "true");
      setSubmitted(true);
      resetForm();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact" />
      <div className="w-full h-full max-w-96 flex flex-col items-center md:justify-center text-gray-700">
        <InputField
          error={errors.name}
          label="Name"
          value={name}
          onchange={setName}
        />
        <InputField
          error={errors.email}
          label="Email"
          value={email}
          onchange={setEmail}
        />
        <InputField
          error={errors.message}
          label="Message"
          value={message}
          onchange={setMessage}
          textField
        />
        <div className="flex justify-end items-center w-full mt-6">
          <button
            className={
              submitted
                ? "w-32 bg-blue-100 text-white font-bold py-2 px-4 rounded"
                : "w-32 bg-blue-500 text-white font-bold py-2 px-4 rounded"
            }
            onClick={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            // disabled={submitted}
          >
            {submitted ? "Sent" : "Send"}
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
