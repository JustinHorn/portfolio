import Image from "next/image";
import { useTranslations } from "next-intl";

export const FlutterProject = (props) => {
  const t = useTranslations();

  return (
    <div className="project">
      <h3>{props.name}</h3>
      <div className="project-body">
        <div className="fotos">
          <Image
            src={`/img/projects/${props.imgFolder}/${props.img[0]}`}
            alt={props.imgAlt[0]}
            title={props.imgAlt[0]}
            className="one"
            loading="eager"
            layout="fill"
            sizes="50vw"
            priority
          />
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>

        <div className="links">
          <a href={props.code}>
            <button>{t("Projects.Template.CheckoutCodeButton")}</button>
          </a>
        </div>
      </div>
    </div>
  );
};
