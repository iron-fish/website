import React, { useState } from "react";
import jsonp from "jsonp";
import PropTypes from "prop-types";

function Mailchimp(props) {
  const [state, setState] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { fields, action } = props;
    const values = fields
      .map((field) => {
        return `${field.name}=${encodeURIComponent(state[field.name])}`;
      })
      .join("&");
    const path = `${action}&${values}`;
    const url = path.replace("/post?", "/post-json?");
    const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
    const email = state["EMAIL"];
    !regex.test(email)
      ? setState({ status: "empty" })
      : sendData(url);
  };

  const sendData = (url) => {
    setState({ status: "sending" });
    jsonp(url, { param: "c" }, (err, data) => {
      if (data.msg.includes("already subscribed")) {
        setState({ status: "duplicate" });
      } else if (err) {
        setState({ status: "error" });
      } else if (data.result !== "success") {
        setState({ status: "error" });
      } else {
        setState({ status: "success" });
      }
    });
  };

  const { fields, styles, className, buttonClassName } = props;
  const messages = {
    ...Mailchimp.defaultProps.messages,
    ...props.messages,
  };
  const { status } = state;
  return (
    <form onSubmit={handleSubmit} className={className}>
      {fields.map((input) => (
        <input
          {...input}
          key={input.name}
          onChange={({ target }) =>
            setState({ [input.name]: target.value })
          }
          defaultValue={state[input.name]}
        />
      ))}
      <button
        disabled={status === "sending" || status === "success"}
        type="submit"
        className={buttonClassName}
      >
        {messages.button}
      </button>
      <div className="msg-alert">
        {status === "sending" && (
          <p style={styles.sendingMsg}>{messages.sending}</p>
        )}
        {status === "success" && (
          <p style={styles.successMsg}>{messages.success}</p>
        )}
        {status === "duplicate" && (
          <p style={styles.duplicateMsg}>{messages.duplicate}</p>
        )}
        {status === "empty" && <p style={styles.errorMsg}>{messages.empty}</p>}
        {status === "error" && <p style={styles.errorMsg}>{messages.error}</p>}
      </div>
    </form>
  );
}

Mailchimp.defaultProps = {
  messages: {
    sending: "Sending...",
    success: "Thank you for subscribing!",
    error: "An unexpected internal error has occurred.",
    empty: "You must write an e-mail.",
    duplicate: "Too many subscribe attempts for this email address",
    button: "Subscribe!",
  },
  buttonClassName: "",
  fields: [],
  styles: {
    sendingMsg: {
      color: "#fff",
    },
    successMsg: {
      color: "rgb(0 255 86)",
    },
    duplicateMsg: {
      color: "#EE5A24",
    },
    errorMsg: {
      color: "#ED4C67",
    },
  },
};

Mailchimp.propTypes = {
  action: PropTypes.string,
  messages: PropTypes.object,
  fields: PropTypes.array,
  styles: PropTypes.object,
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default Mailchimp;
