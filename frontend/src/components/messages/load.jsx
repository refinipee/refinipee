import Spinner from 'react-bootstrap/Spinner';

function Loader() {
  return (
    <div className='d-flex justify-content-center'>
      <Spinner animation="grow" style={{ color: '#833ab4' }} />
    </div>
  );
}

export default Loader;