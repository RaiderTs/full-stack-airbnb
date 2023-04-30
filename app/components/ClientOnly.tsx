'use client';

import { useState, useEffect } from 'react';

interface CLintOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<CLintOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{children}</>;
};

export default ClientOnly;
