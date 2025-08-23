import React, { useEffect, useRef, useState } from "react";
import "./RevealScroll.css"

export default function RevealScroll({ children, animation = "fadeUp" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${animation} ${show ? "show" : ""}`}
    >
      {children}
    </div>
  );
}
