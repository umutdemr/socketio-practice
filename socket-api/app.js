// HTTP modülünden createServer fonksiyonunu içe aktarır
import { createServer } from "http";
// Socket.io modülünden Server sınıfını içe aktarır
import { Server } from "socket.io";

// HTTP sunucusu oluşturulur
const httpServer = createServer();

// Socket.io sunucusu oluşturulur ve HTTP sunucusuna bağlanır
const io = new Server(httpServer, {
    // CORS ayarları: Tüm kaynaklardan erişime izin verilir
    cors: {
        origin: "*"
    }
});

// Bir kullanıcı bağlandığında çalışacak olan olay dinleyicisi
io.on("connection", (socket) => {
    // Kullanıcı bağlantı olayı gerçekleştiğinde, kullanıcının kimliğini ve bağlı olduğu soket bilgilerini konsola yazdırır
    console.log("Kullanıcı Sunucuya Bağlandı !", socket.id);

    // Kullanıcı sunucudan ayrıldığında çalışacak olan olay dinleyicisi
    socket.on("disconnect", () => {
        // Kullanıcı ayrılma olayı gerçekleştiğinde konsola "Kullanıcı Sunucudan Ayrıldı" mesajını yazdırır
        console.log("Kullanıcı Sunucudan Ayrıldı")
    });
});

// HTTP sunucusunu belirtilen port üzerinden dinlemeye başlar
httpServer.listen(3000);
