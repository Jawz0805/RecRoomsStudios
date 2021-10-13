import React from "react";
import "./_Subscribe.scss";

import Mailchimp from "react-mailchimp-form";

const SubscribeForm = () => {
  const url =
    "https://btinternet.us7.list-manage.com/subscribe/post?u=fd0434f15bfef3dc067f60ae3&amp;id=77213eb297";

  return (
    <div className="subscribe-container">
      <span className="subscribe-title">Subscribe to our mailing list</span>
      <Mailchimp
        className="subscribe-form"
        action={url}
        fields={[
          {
            label: "First Name",
            name: "FNAME",
            placeholder: "First Name",
            type: "text",
            required: true,
            tabIndex: 0,
          },
          {
            label: "Last Name",
            name: "LNAME",
            placeholder: "Last Name",
            type: "text",
            required: true,
            tabIndex: 0,
          },
          {
            label: "Email Name",
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
            tabIndex: 0,
          },
        ]}
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Too many subscribe attempts for this email address",
          button: "SUBSCRIBE!",
        }}
      />
    </div>
  );
};

export default SubscribeForm;
