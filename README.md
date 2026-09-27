# Bindirme

iPhone için video ve still oynatıcı. Referans monitöre eşlediğin Kelvin/RGB setup'ını görüntünün üstüne bindirir. claude.ai'den bağımsız çalışır, giriş istemez, internet olmadan da açılır.

## Oynatıcı

| hareket | iş |
|---|---|
| tek dokunuş | kontrolleri aç / kapat |
| sol yarıya çift dokunuş | 10 sn geri |
| sağ yarıya çift dokunuş | 10 sn ileri |
| ortadaki ▶ | oynat |
| still'de sağa / sola kaydır | önceki / sonraki still |
| Sığdır / Doldur | tüm kare görünür / ekranı kaplar, kenarlar kesilir |
| A/B (basılı tut) | bindirmesiz görüntü |
| □ | bindirmeli tam beyaz referans |
| SET | kayıtlı setup'lar |
| ≡ | renk paneli |

Oynarken ya da still açıkken kontroller 2,5 sn sonra gizlenir. Renk paneli açıkken görüntü panelin altında kalmaz; dikeyde üst tarafa, yatayda panelin soluna tam sığar.

## Kayıtlı setup'lar

| ad | Kelvin | R | G | B |
|---|---|---|---|---|
| Eizo | 5800 | 104 | 98,5 | 92,5 |
| Eizo2 | 5900 | 109 | 109,5 | 95,5 |

İkisi de pakete gömülü. İlk açılışta yüklenir ve uygulama Eizo ile başlar. Daha önce kurduysan, eksik olan setup eklenir, mevcut kayıtların silinmez.

## Güncelleme

Her değişiklikte `sw.js` içindeki sürümü bir artır (`bindirme-v4` → `bindirme-v5`). Artırmazsan telefon eski kopyayı açmaya devam eder.

## Desteklenen dosyalar

| tür | durum |
|---|---|
| MP4 / H.264 | açılır |
| MOV (H.264) | açılır, etiket otomatik düzeltilir |
| JPEG, PNG | açılır |
| TIFF 8 / 16 bit | Safari'de açılır |
| ProRes, DNxHD, 10 bit HEVC | açılmaz |
| DPX, EXR, MXF, kamera ham | açılmaz, seçilirse atlanır |
