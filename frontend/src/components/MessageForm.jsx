import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="text center m-2">
        <h2>تواصل  & استشارات طبية </h2>
        <form onSubmit={handleMessage} className="w-100 border row ">
          

          <div
          className="col-6 ">
            <div>

            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
                className="form-control   m-2"
            />
            </div>
            <div>

<div>

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"

            />
</div>
            </div>
          </div>
          <div
          className="col-md-6 ">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control m-2"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
               className="form-control  m-2"
            />
          </div>
          <textarea
          className="col-md-6  form-control  m-2"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="btn btn-primary w-100">ارسال</button>
          </div>

        </form>
        <img src="/Vector.png" alt="vector" />
      </div>
    </>
  );
};

export default MessageForm;
