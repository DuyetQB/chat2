import { useState } from 'react';
import axios from 'axios';



const Modal = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': "be002709-e468-4da9-a3be-05e9841b9c03", 'User-Name':username, 'User-Secret':password};

    try {
      await axios.get('AIzaSyCYFvHkTI48KTUyjGiScNO1wAa5lo9sla0', { headers:authObject});

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

       window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Ứng Dụng Nhắn Tin </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} autocomplete ="username" className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete ="current-password" className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Bắt đầu chat! </span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;