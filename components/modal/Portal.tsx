import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode;
}

function Portal({ children }: PortalProps) {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#modal');
    setMounted(true);
  }, []);

  if (ref.current === null) {
    return null;
  }

  return mounted ? createPortal(children, ref.current) : null;
}

export default Portal;
