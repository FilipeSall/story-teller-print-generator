import { useLocation } from 'react-router-dom';

function Preview() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const title = searchParams.get('title');
  const text = searchParams.get('text');

  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}

export default Preview;
