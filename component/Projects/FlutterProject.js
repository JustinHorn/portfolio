export const FlutterProject = (props) => {
  return (
    <div className="project">
      <h3>{props.name}</h3>
      <div className="project-body">
        <div className="fotos">
          <img
            src={`img/projects/${props.imgFolder}/${props.img[0]}`}
            alt={props.imgAlt[0]}
            title={props.imgAlt[0]}
            className="one"
          />
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>

        <div className="links">
          <a href={props.code}>Code</a>
        </div>
      </div>
    </div>
  );
};
