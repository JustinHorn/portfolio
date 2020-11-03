import { PageTransition } from "next-page-transitions";

const MoveOutMoveInTransition = ({ children }) => {
  return (
    <>
      <PageTransition timeout={300} classNames="page-transition">
        {children}
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          transform: translateX(100%);
        }
        .page-transition-enter-active {
          transform: translateX(0);
          transition: transform 300ms;
        }
        .page-transition-exit {
          transform: translateX(0);
        }
        .page-transition-exit-active {
          transform: translateX(-100%);
          transition: transform 300ms;
        }
      `}</style>{" "}
    </>
  );
};

export default MoveOutMoveInTransition;
