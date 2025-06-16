# Next.js Rewrite

Bu klasör, `abp-ng2-module` servislerinin Next.js için uyarlanmis basit bir versiyonunu içerir. Özgün Angular kütüphanesinin tüm özelliklerini kapsamaz fakat Next.js projelerinde temel islevsellik saglamak için bir baslangic noktasi sunar.

## Mevcut Servisler

- `token.ts` – Kimlik dogrulama tokenini çerezlerde saklar ve okur.
- `permission.ts` – Basit izin kontrolü yardimcisi.
- `http.ts` – Token bilgisini otomatik ekleyen, basit hata yönetimi yapan `fetch` sarmalaması.

## Kullanım

Projeyi çalıştırmak için:

```bash
npm install
npm run dev
```

`_app.tsx`, `_document.tsx` ve `next.config.js` dosyaları Next.js uygulamasının temel yapılandırması için eklenmiştir.

> **Not**: Bu uyarlama öğretici nitelikte olup tam bir özellik seti sunmaz.

## Lisans

Bu klasör altındaki kod MIT lisansı ile dağıtılmaktadır.
