import { useMotionValue } from "framer-motion";

export function useCursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  return { x, y, handleMouseMove };
}
