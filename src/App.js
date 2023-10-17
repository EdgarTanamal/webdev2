import './App.css';
import React, { useState } from 'react';
import logo from './344178.jpg';

function App() {
  const [isCircular, setIsCircular] = useState(false);
  const [accordion, setAccordion] = useState({
    angkatan: false,
    jalurSukses: false,
    jurusan: false,
    hobi: false,
  });

  const imgStyle = {
    width: '40%',
    borderRadius: isCircular ? '50%' : '0%',
  };

  const pengalamanStyle = {
    border: '2px solid #000',
    padding: '10px',
  };

  const toggleCircular = () => {
    setIsCircular(!isCircular);
  };

  const toggleAccordion = (key) => {
    setAccordion({
      ...accordion,
      [key]: !accordion[key],
    });
  };

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'App' },
      React.createElement(
        'div',
        { className: 'section1' },
        React.createElement(
          'div',
          { className: 'Foto' },
          React.createElement('img', { src: logo, className: 'Foto', alt: 'logo', style: imgStyle })
        ),
        React.createElement(
          'div',
          { className: 'nama' },
          React.createElement('h1', null, 'Edgar Tanamal')
        )
      ),
      React.createElement(
        'div',
        { className: 'section2' },
        React.createElement(
          'div',
          { className: 'poinKiri' },
          React.createElement('p', null, 'Jenis Kelamin : Pria'),
          React.createElement('p', null, 'Karir : Mahasiswa UC Makassar'),
          React.createElement('button', { onClick: toggleCircular }, 'Ubah Ukuran Foto') 
        ),
        React.createElement('div', { className: 'poinKanan' },
        React.createElement('p', { onClick: () => toggleAccordion('angkatan') }, 'Angkatan :', accordion.angkatan ? ' 2022/2023' : ' Klik untuk melihat'),
        accordion.angkatan && React.createElement('p', null, '2022/2023'),
        React.createElement('p', { onClick: () => toggleAccordion('jalurSukses') }, 'Jalur Sukses :', accordion.jalurSukses ? ' Langsung Sukses' : ' Klik untuk melihat'),
        accordion.jalurSukses && React.createElement('p', null, 'Langsung Sukses'),
        React.createElement('p', { onClick: () => toggleAccordion('jurusan') }, 'Jurusan :', accordion.jurusan ? ' Informatika - UC Makassar' : ' Klik untuk melihat'),
        accordion.jurusan && React.createElement('p', null, 'Informatika - UC Makassar'),
        React.createElement('p', { onClick: () => toggleAccordion('hobi') }, 'Hobi :', accordion.hobi ? ' Makan, Tidur' : ' Klik untuk melihat'),
        accordion.hobi && React.createElement('p', null, 'Makan, Tidur')
        ),
      ),
      React.createElement(
        'div',
        { className: 'organisasi' },
        React.createElement('h1', null, 'Pengalaman Organisasi'),
        React.createElement(
          'div',
          { className: 'organisasipenjelas' },
          React.createElement('h1', { className: 'judulorganisasi' }, 'Informatika Student Union'),
          React.createElement('pre', null, 'Sebagai Ketua Divisi Event di Student Union.'),
          React.createElement('h1', { className: 'judulorganisasi' }, 'Developer Aplikasi O-WEEK UC Makassar'),
          React.createElement('pre', null, 'Turu.')
        ),
      ),
    )
  );
}

export default App;
