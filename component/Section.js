import { useRef, useState, useLayoutEffect } from "react";

const Section = ({ children, ref: outerRef, ...props }) => {
  const ref = useRef();

  const observer = useRef();
  const [inview, setInview] = useState(false);

  useLayoutEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setInview(entry.isIntersecting)
      );
    });

    observer.current.observe(ref.current);
  }, []);

  return (
    <section
      {...props}
      id={props.id}
      className={`hidden-section ${inview && "show"} ${props.className}`}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
