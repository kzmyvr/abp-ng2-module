import { useEffect, useState } from 'react';
import { abpFetch, TokenService } from '../src';

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    abpFetch('/api/hello')
      .then(setData)
      .catch(e => setError(e.message));
  }, []);

  return (
    <div>
      <h1>Next.js Rewrite Example</h1>
      {error && <p>Error: {error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
