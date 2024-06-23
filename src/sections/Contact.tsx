import { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";
import InputField from "../components/InputField";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Contact" />
      <div className="w-full h-full max-w-96 flex flex-col items-center justify-center text-gray-700 gap-4">
        <form className="w-full">
          <InputField label="Name" value={name} onchange={setName} />
          <InputField label="Email" value={email} onchange={setEmail} />
          <InputField
            label="Message"
            value={message}
            onchange={setMessage}
            textField
          />
        </form>
      </div>
    </SectionWrapper>
  );
}
