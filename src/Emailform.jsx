import React, { useState } from 'react';


const EmailForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("https://formsubmit.co/ajax/4340b091eed08ddb158eaa6c4001fab3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      {submitted ? (
        <p className="text-green-600 font-medium">Thanks! We'll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
          />
          <button
            type="submit"
            className="bg-[#4A90E2] py-[5px] px-[20px] rounded-[50px] text-white capitalize text-[15px]"
          >
            Submit now
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailForm;
