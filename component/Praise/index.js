import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { a, config, to, useSpring } from "react-spring";
import { useDrag } from "react-use-gesture";

const Praise = () => {
  const [position, setPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const alignment = ["left", "center", "right"];

  const [{ x }, api, stop] = useSpring(() => ({
    config: config.slow,
    x: 0,
  }));

  const bind = useDrag(({ movement: [mx] }) => {
    if (isAnimating) return false;
    const moveX = (mx / window.innerWidth) * 100;
    console.log(moveX);

    const currentValue = x.get();
    const nextValue = (currentValue + moveX).clamp(-100, 100);
    console.log(nextValue);

    if (nextValue < position * 115 - 25) {
      setPosition((position - 1).clamp(-1, 1));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(() => false), 100);
    } else if (nextValue > position * 115 + 25) {
      setPosition((position + 1).clamp(-1, 1));
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(() => false), 100);
    } else {
      api({
        x: nextValue,
      });
    }
  });

  useEffect(() => {
    api({
      x: position * 115,
    });
  }, [position]);

  // useEffect(() => {
  //   const next = () => {
  //     setAlignmentStateIndex(
  //       alignmentStateIndex === 1 ? -1 : alignmentStateIndex + 1
  //     );
  //   };
  //   const timeout = setTimeout(next, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [alignment]);

  return (
    <section className="praise">
      <h2>Praise I received:</h2>

      <div className="cards" {...bind()}>
        <a.div style={{ transform: to([x], (x) => `translate(${x}%,0)`) }}>
          <div className="content">
            <PraiseCard
              key={1}
              alignment={alignment[0]}
              praise={`I loved his passion for coding, as well as his patience to explain concepts around javascript data structures and react components.`}
              name="Dirk J Bosman - graduated with me at WBS - Data Scientist"
              source=""
            />
            <PraiseCard
              key={2}
              alignment={alignment[1]}
              praise={`[...] I was very lucky to have someone as talented as Justin as a student!`}
              name="Federica Recanatini - my Tutor at WBS - Senior Developer"
              source=""
            />
            <PraiseCard
              key={3}
              alignment={alignment[2]}
              praise={`Mr. Horn was able to quickly adapt to new challenges and problems and thus effortlessly understand the interrelationships and infrastructure of the epap app and cloud environment.`}
              name="Certificate of employment - epap GmbH - a fintech Startup aiming to digitalize receipts"
              source=""
            />
          </div>
        </a.div>
      </div>

      {/* <div className="dots">
        {alignment.map((x, index) => (
          <div
            className={`dot ${index === alignmentStateIndex + 1 && "active"}`}
            onClick={() => setAlignmentStateIndex(index - 1)}
          />
        ))}
      </div> */}
    </section>
  );
};

const PraiseCard = (props) => {
  return (
    <div className={`card ${props.alignment}`}>
      <p className="text">
        <i>"{props.praise}"</i>
      </p>
      <div className="data">
        <h4 className="name">{props.name}</h4>
        {props.source && <a>{props.source}</a>}
      </div>
    </div>
  );
};

export default Praise;
