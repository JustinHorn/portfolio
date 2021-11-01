import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section from "../Section";

const Contact = () => {
  return (
    <Section id="contact" className="contact">
      <h2>You like my work?</h2>

      <p>Write me a quick text:</p>

      <form action="https://formspree.io/f/mleakdwo" method="POST">
        <fieldset id="fs-frm-inputs">
          <div>
            <label for="full-name">Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label for="email-address">Email</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="john@doe.com"
              required
            />
          </div>
          <div className="message-container">
            <label for="message">Message</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder="Veni, vedi, vici, you bastard!"
              required
            ></textarea>
          </div>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input className="submitButton" type="submit" value="Send" />
      </form>
      <div className="socials">
        <a
          href={"https://www.linkedin.com/in/justin-christian-horn/"}
          title={"Linkedin"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
        <a
          href={"mailto:hello@justinhorn.io"}
          title={"Email"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fas", "envelope"]} />
        </a>
        <a
          href={"https://twitter.com/Horn00Justin"}
          title={"Twitter"}
          className="social-icon"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        {/* <a
        href={"https://stackoverflow.com/users/12753573/justin?tab=profile"}
        title={"Stackoverflow"}
        className="social-icon"
      >
        <FontAwesomeIcon className="icon" icon={["fab", "stack-overflow"]} />
      </a> */}
        <a
          href={"https://github.com/JustinHorn"}
          title={"Github"}
          className="social-icon"
        >
          <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
        </a>
      </div>
    </Section>
  );
};

export default Contact;
