import { useLayoutEffect, useRef, useState } from "react";

const Modal = () => {
  const [show, setShow] = useState(false);

  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (!popup.current || !button.current) return;

    const { bottom } = button.current.getBoundingClientRect();

    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  return (
    <div className="container">
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Toggle Modal
      </button>

      {show && (
        <div className="valueText" ref={popup}>
          Hello from modal!
        </div>
      )}
    </div>
  );
};

export default Modal;