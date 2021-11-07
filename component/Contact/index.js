import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import Section from "../Section";

const Contact = () => {
  const t = useTranslations();

  return (
    <Section id="contact" className="contact">
      <h2>{t("Contact.Headline")}</h2>

      <p>{t("Contact.Paragraph")}</p>

      <form action="https://formspree.io/f/mleakdwo" method="POST">
        <fieldset id="fs-frm-inputs">
          <div>
            <label htmlFor="full-name">Name</label>
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="John"
              required
            />
          </div>

          <div>
            <label htmlFor="email-address">Email</label>
            <input
              type="email"
              name="_replyto"
              id="email-address"
              placeholder="john@doe.com"
              required
            />
          </div>
          <div className="message-container">
            <label htmlFor="message">{t("Contact.Form.Message")}</label>
            <textarea
              rows="5"
              name="message"
              id="message"
              placeholder={t("Contact.Form.textArea.placeHolder")}
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
        <input
          className="submitButton"
          type="submit"
          value={t("Contact.Form.SendButton")}
        />
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
