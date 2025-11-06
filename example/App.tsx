import { useState } from 'react';
import { Dialog } from '../packages/index';
import './index.scss';

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* <Component /> */}
      <button onClick={() => setShow(true)}>打开dialog</button>
      <Dialog
        show={show}
        onCancel={() => setShow(false)}
        title="Prompt"
        body="Supercharged by Cloud Native Build"
      />
      <button onClick={() => setShow(true)}>打开Menu</button>
    </>
  );
}

export default App;
