import Image from "next/image";

export const ReactProject = (props) => {
  return (
    <div className="project">
      <h3>{props.name}</h3>
      <div className="fotos">
        <div className="one">
          <Image
            src={`/img/projects/${props.imgFolder}/${props.img[0]}`}
            sizes="90vw"
            alt={props.imgAlt[0]}
            title={props.imgAlt[0]}
            layout="fill"
            priority
            loading="eager"
          />
        </div>
        <div>
          <Image
            src={`/img/projects/${props.imgFolder}/${props.img[1]}`}
            alt={props.imgAlt[1]}
            title={props.imgAlt[1]}
            className="two"
            sizes="50vw"
            layout="fill"
          />
        </div>
        <div>
          <Image
            src={`/img/projects/${props.imgFolder}/${props.img[2]}`}
            alt={props.imgAlt[2]}
            title={props.imgAlt[2]}
            className="three"
            sizes="50vw"
            layout="fill"
          />
        </div>
      </div>
      <p>{props.description}</p>
      <div className="links">
        <a href={props.website}>
          <button>Visit</button>
        </a>
        <a href={props.code}>
          <button>View Code</button>
        </a>
      </div>
    </div>
  );
};
