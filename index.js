const {app, BrowserWindow} = require('electron')

// Burada pencere objesini global referans olarak tutuyoruz. Eğer bunu yapmaz isek pencere otomatik olarak kapanacak.
let win

function createWindow () {
  // Yeni bir pencere oluşturuyoruz.
  // Pencere ilk açıldığında genişliği 800, yüksekliği 600 px olacak.
  win = new BrowserWindow({width: 800, height: 600})

  // Uygulamanın içerisine index.html dosyasını yükle.
  win.loadURL(`file://${__dirname}/game/index.html`)

  // Bu kısım şart değil, yazarsanız uygulama başladığında sağ tarafta konsolu görürsünüz. Kodları incelemek açısından şimdilik kalsın.
   win.webContents.openDevTools()

  // Pencere kapandığında uygulamayı kapat.
  win.on('closed', () => {
    win = null
  })
}

// Bu metod Electron başladığında çağırılacak ve bir tarayıcı penceresi oluşturacak.
app.on('ready', createWindow)

// Tüm pencereler kapatıldığında uygulamayı sonlandır.
app.on('window-all-closed', () => {
  // MacOS sistemlerde uygulama ekranı kapanmasına rağman menü çubuğu hala aktif kalabildiğinden dolayı MacOs için ayriyetten bu kodu yazıyoruz.
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Yine MacOS'ta Dock üzerinde uygulama iconuna tekrar tıklayınca bir pencere daha açar.
  if (win === null) {
    createWindow()
  }
})