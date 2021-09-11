import { useLayoutEffect, useRef, useState } from "react";

export const FlutterProject = (props) => {
  const fotoRef = useRef();
  const [width, setWidth] = useState();

  useLayoutEffect(() => {
    function updateSize() {
      setWidth(fotoRef.current.getBoundingClientRect().width);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="project">
      <h3>{props.name}</h3>
      <div className="fotos" ref={fotoRef}>
        <img
          src={`img/projects/${props.imgFolder}/${props.img[0]}`}
          alt={props.imgAlt[0]}
          title={props.imgAlt[0]}
          className="one"
        />
      </div>
      <div className="description" style={{ width: width + "px" }}>
        <p>{props.description}</p>
      </div>

      <div className="links">
        <a href={props.code}>Code</a>
      </div>
    </div>
  );
};
