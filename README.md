# Socket.io and React Practice

Sunucu, http://localhost:3000 adresinde çalışır.
React uygulaması, tarayıcınızda http://localhost:3000 adresinde görüntülenir.
Bağlantı durumu, sayfanın üst kısmında "Socket Durumu" başlığı altında gösterilir.
Eğer bağlantı varsa, "Bağlandı" mesajı görüntülenir; aksi halde "Bağlantı Kesildi" mesajı görüntülenir.

## app.js (Sunucu Kodu):

- HTTP ve Socket.io modüllerini içe aktarır.
- Bir HTTP sunucusu oluşturarak, Socket.io sunucusunu bu HTTP sunucusuna bağlar.
- Sunucu, tüm kaynaklardan erişime izin veren CORS ayarları ile çalışır.
- Bir kullanıcı bağlandığında (connection olayı), sunucu konsola kullanıcının kimliğini (socket.id) yazdırır.
- Bir kullanıcı sunucudan ayrıldığında (disconnect olayı), sunucu konsola "Kullanıcı Sunucudan Ayrıldı" mesajını yazdırır.
- HTTP sunucusunu 3000 numaralı port üzerinden dinlemeye başlar.

## App.jsx (Client Kodu - React):

- Socket.io istemcisini sunucuya bağlamak için bir socket oluşturur.
- Bağlantı durumunu takip etmek için bir state (isConnected) kullanır.
- Kullanıcının bağlantı durumunu (connect ve disconnect olaylarına göre) takip eder ve isConnected durumunu günceller.
- Kullanıcının bağlantı durumunu ekranda gösterir. Eğer bağlantı varsa "Bağlandı" mesajını, yoksa "Bağlantı Kesildi" mesajını gösterir.

## Basitce Socket.io Hakkında

![bidirectional-communication2](https://github.com/umutdemr/socketio-practice/assets/84879807/8eee2ddb-fb5c-4487-8354-daf1d5e765a8)

- Gerçek Zamanlı İletişim:

Socket.io, web uygulamalarında gerçek zamanlı iletişim sağlar. Bu, kullanıcıların anlık olarak veri alışverişi yapabileceği, değişikliklerin hemen diğer kullanıcılara yansıtılabileceği bir iletişim mekanizması sunar.
Örneğin, bir chat uygulamasında kullanıcılar anlık olarak mesajlaşabilirler. Bir kullanıcı mesaj gönderdiğinde, bu mesaj diğer kullanıcıların ekranında hemen görüntülenir.

- İstemci-Sunucu Etkileşimi:

Socket.io, istemci (tarayıcı) ile sunucu arasında çift yönlü iletişimi sağlar. Bu sayede istemci ve sunucu arasında veri alışverişi yapılabilir.
Örneğin, bir kullanıcının tarayıcısında gerçekleştirdiği bir eylem (örneğin, bir butona tıklama) sonucunda sunucuya veri gönderilebilir ve sunucu bu veriyi işleyerek geri dönüş yapabilir.

- Olay Tabanlı Programlama:

Socket.io, olay tabanlı bir programlama modeli kullanır. Bu da demektir ki, bir olay gerçekleştiğinde (örneğin, bir kullanıcının bağlanması veya bir mesaj göndermesi), ilgili olay dinleyicileri çalışır.
Örneğin, bir kullanıcı bağlandığında veya ayrıldığında, sunucu bu olayları dinleyerek gerekli işlemleri gerçekleştirebilir.

- Farklı Platformlarda Çalışma Yeteneği:

Socket.io, farklı platformlarda (örneğin, tarayıcılar, Node.js gibi sunucular) çalışabilme özelliğine sahiptir. Bu sayede hem istemci tarafında (tarayıcıda), hem de sunucu tarafında (Node.js gibi) kullanılabilir.
Bu esneklik, Socket.io'yu çok amaçlı gerçek zamanlı iletişim uygulamaları için ideal hale getirir.
