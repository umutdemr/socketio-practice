// İçe aktarılan modüller ve kütüphaneler
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Sunucu URL'si
  const serverUrl = 'http://localhost:3000';
  // Socket.io istemcisini sunucuya bağlamak için socket oluşturma
  const socket = io(serverUrl);
  
  // Bağlantı durumunu takip etmek için state kullanılır
  const [isConnected, setIsConnected] = useState(false);

  // Komponent yüklendiğinde ve bağlantı durumunda değişiklik olduğunda çalışan useEffect
  useEffect(() => {
    // Bağlandığında çalışacak fonksiyon
    function onConnnect() {
      setIsConnected(true); // Bağlantı durumunu true yap
    }

    // Bağlantı kesildiğinde çalışacak fonksiyon
    function onDisconnect() {
      setIsConnected(false); // Bağlantı durumunu false yap
    }

    // Socket'e "connect" ve "disconnect" event'lerini dinleme
    socket.on('connect', onConnnect);
    socket.on('disconnect', onDisconnect);

    // Komponent temizlendiğinde event dinlemelerini kaldırma
    return () => {
      socket.off('connect', onConnnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []); // Boş bağımlılık array'i ile sadece komponent yüklendiğinde çalışır

  // JSX olarak dönen komponent
  return (
    <>
      <h1>Socket Durumu</h1>
      {/* Bağlantı durumuna göre metin gösterimi */}
      <p>Socket Status {isConnected ? 'Bağlandı' : 'Bağlantı Kesildi'}</p>
    </>
  );
}

export default App;
