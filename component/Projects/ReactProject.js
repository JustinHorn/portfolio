export const ReactProject = (props) => {
  return (
    <div className="project">
      <h3>{props.name}</h3>
      <div className="fotos">
        <img
          src={`img/projects/${props.imgFolder}/${props.img[0]}`}
          alt={props.imgAlt[0]}
          title={props.imgAlt[0]}
          className="one"
        />
        <img
          src={`img/projects/${props.imgFolder}/${props.img[1]}`}
          alt={props.imgAlt[1]}
          title={props.imgAlt[1]}
          className="two"
        />
        <img
          src={`img/projects/${props.imgFolder}/${props.img[2]}`}
          alt={props.imgAlt[2]}
          title={props.imgAlt[2]}
          className="three"
        />
      </div>
      <p>{props.description}</p>
      <div className="tools">
        {props.tags.map((t) => (
          <div>{t}</div>
        ))}
      </div>
      <div className="links">
        <a href={props.website}>Website</a>
        <a href={props.code}>Code</a>
      </div>
    </div>
  );
};