import { useState } from 'react';

export default function EventError({ src, alt }) {
  const [path, setPath] = useState(src);
  const handleError = () => setPath('../image/dl.png');

  return <img src={path} onError={handleError} alt={alt} />;
}
