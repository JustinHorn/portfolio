import { useEffect, useMemo, useState } from "react";

const Praise = () => {
  const [alignmentStateIndex, setAlignmentStateIndex] = useState(0);

  const alignment = useMemo(
    () =>
      [
        ["center", "right", "right"],
        ["left", "center", "right"],
        ["left", "left", "center"],
        ["left", "center", "right"],
      ][alignmentStateIndex],
    [alignmentStateIndex]
  );

  useEffect(() => {
    const next = () => {
      setAlignmentStateIndex(
        alignmentStateIndex === 3 ? 0 : alignmentStateIndex + 1
      );
    };
    const timeout = setTimeout(
      next,
      alignmentStateIndex % 2 === 0 ? 10000 : 5000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [alignment]);

  return (
    <section className="praise">
      <h2>Praise I received:</h2>

      <div className="cards">
        <PraiseCard
          alignment={alignment[0]}
          praise={`I loved his passion for coding, as well as his patience to explain concepts around javascript data structures and react components.`}
          name="Dirk J Bosman - graduated with me at WBS - Data Scientist"
          source=""
        />
        <PraiseCard
          alignment={alignment[1]}
          praise={`[...] I was very lucky to have someone as talented as Justin as a student!`}
          name="Federica Recanatini - my Tutor at WBS - Senior Developer"
          source=""
        />
        <PraiseCard
          alignment={alignment[2]}
          praise={`Mr. Horn was able to quickly adapt to new challenges and problems and thus effortlessly understand the interrelationships and infrastructure of the epap app and cloud environment.`}
          name="Certificate of employment - epap GmbH - a fintech Startup aiming to digitalize receipts"
          source=""
        />
      </div>

      <div className="dots">
        {alignment.map((x, index) => (
          <div
            className={`dot ${x === "center" && "active"}`}
            onClick={() => setAlignmentStateIndex(index)}
          />
        ))}
      </div>
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
