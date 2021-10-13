import React from "react";
import './_Subscribe.scss';


import MailchimpSubscribe from "react-mailchimp-subscribe";


const CustomForm = ({ status, message, onValidated }) => {
    let email, name, lname;
    const submit = () => {
        email &&
            name &&
            lname &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
                FNAME: name.value,
                LNAME: lname.value
            })
    }

    return (
        <div className="subscribe-form">
            <div className="input-container">
                <label for="firstname">First name</label>
                <input
                    required
                    ref={node => (name = node)}
                    type="text"
                    placeholder="first name"
                    name="first name"
                />
            </div>
            <div className="input-container">
                <label for="lastname">Last name</label>
                <input
                    required
                    ref={node => (lname = node)}
                    type="text"
                    placeholder="last name"
                    name="lastname"
                />
            </div>
            <div className="input-container">
                <label for="email">Email</label>
                <input
                    required
                    ref={node => (email = node)}
                    type="email"
                    placeholder="email"
                    name="email"
                />
            </div>
            <div className="input-container">
                <button onClick={submit}>
                    Subscribe
                </button>
            </div>
            {status === "sending" && <div className="status-container"  >sending...</div>}
            {status === "error" && (
                <div

                    dangerouslySetInnerHTML={{ __html: message }}
                    className="status-container"
                />
            )}
            {status === "success" && (
                <div dangerouslySetInnerHTML={{ __html: message }}
                    className="status-container"
                />
            )}
        </div>
    );
};

const MailchimpSubscribeForm = () => {

    const url = "https://btinternet.us7.list-manage.com/subscribe/post?u=fd0434f15bfef3dc067f60ae3&amp;id=77213eb297";

    return (
        <div className="subscribe-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );

}
export default MailchimpSubscribeForm