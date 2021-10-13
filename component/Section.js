import { useEffect, useRef, useState } from "react";

const Section = ({ children, ref: outerRef, ...props }) => {
  const ref = useRef();

  const observer = useRef();
  const [inview, setInview] = useState(false);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => entry.isIntersecting && setInview(entry.isIntersecting)
      );
    });

    setTimeout(() => {
      observer.current.observe(ref.current);
    }, 0);
  }, []);

  return (
    <section
      {...props}
      className={`hidden-section ${inview && "show"} ${props.className}`}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
