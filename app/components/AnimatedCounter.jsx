"use client";

import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.4, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const match = String(value).match(/\d+/);
  const target = match ? parseInt(match[0], 10) : null;
  const prefix = match ? value.slice(0, match.index) : '';
  const suffix = match ? value.slice(match.index + match[0].length) : '';
  const [display, setDisplay] = useState(target === null ? value : '0');

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(String(Math.round(v))),
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
