# Panduan Deploy Lopasupa Kopi ke GitHub Pages (Gratis) 🚀

Semua file sudah siap! Berikut langkah-langkahnya:

---

## Langkah 1: Buat Repository GitHub Baru

1. Buka **https://github.com/new**
2. **Repository name:** `lopasupa-kopi` (atau nama yang Anda inginkan)
3. **Public/Private:** Pilih **Public** agar bisa diakses semua orang
4. JANGAN centang "Add a README file", "Add .gitignore", dll
5. Klik **Create repository**

---

## Langkah 2: Push Code ke GitHub

Pastikan Anda di folder `/home/z/my-project`, lalu jalankan:

```bash
# Ganti USERNAME_GITHUB dengan username GitHub Anda
git remote add origin https://github.com/USERNAME_GITHUB/lopasupa-kopi.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**Contoh:**
```bash
git remote add origin https://github.com/josuaabimanyu/lopasupa-kopi.git
git branch -M main
git push -u origin main
```

---

## Langkah 3: Deploy Otomatis via GitHub Actions

Setelah push ke GitHub, deploy akan **OTOMATIS** berjalan! 🎉

Cek deployment:
1. Buka repository GitHub Anda
2. Klik tab **Actions** (di atas)
3. Klik workflow "Deploy to GitHub Pages"
4. Tunggu build berjalan (sekitar 2-3 menit)
5. Website akan live di URL: **https://USERNAME_GITHUB.github.io/lopasupa-kopi/**

---

## Langkah 4: Konfigurasi GitHub Pages (Opsional)

Jika website tidak otomatis muncul:

1. Buka repository di GitHub
2. Klik **Settings** (tab atas)
3. Scroll ke bawah ke bagian **Pages**
4. **Source:** Pilih **GitHub Actions** (bukan "Deploy from a branch")
5. **Branch:** Pilih `main`
6. Klik **Save**

---

## Fitur Website Lopasupa Kopi

✅ **6 Produk Kopi Premium**
   - Lopasupa Premium Arabica
   - Lopasupa Robusta Gold
   - Lopasupa Espresso Blend
   - Lopasupa House Special
   - Lopasupa Decaf Delight
   - Lopasupa Single Origin Toraja

✅ **Responsive Design**
   - Mobile: 2 kolom
   - Tablet: 3 kolom
   - Desktop: 4 kolom
   - XL Screen: 5 kolom

✅ **Shopping Cart**
   - Tambah produk ke keranjang
   - Hapus produk dari keranjang
   - Checkout ke WhatsApp dengan order detail lengkap

✅ **WhatsApp Integration**
   - No. HP: 62895402914874
   - Auto-generate pesan order

✅ **Instagram & Email**
   - Link ke Instagram: https://instagram.com/lopasupa_kopi_premium
   - Email: josuaabimanyu62@gmail.com

✅ **Contact Section**
   - Quick Links navigation
   - Follow Us section dengan social media

✅ **Modern UI**
   - Gradient colors (amber theme)
   - Smooth animations & transitions
   - Card hover effects
   - Professional layout

---

## URL Website Setelah Deploy

**Production URL:**
```
https://USERNAME_GITHUB.github.io/lopasupa-kopi/
```

Ganti `USERNAME_GITHUB` dengan username GitHub Anda!

**Contoh:**
```
https://josuaabimanyu.github.io/lopasupa-kopi/
```

---

## Update Website Berikutnya

Untuk update website setelah deploy:

```bash
# 1. Commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"

# 2. Push ke GitHub
git push

# 3. Deploy otomatis!
# GitHub Actions akan otomatis build & deploy
```

**TANPA perlu deploy manual lagi!** Setiap push ke GitHub akan otomatis deploy ke GitHub Pages.

---

## Cara Cek Status Deployment

1. Buka repository GitHub
2. Klik tab **Actions**
3. Lihat workflow "Deploy to GitHub Pages"
4. Status:
   - ⏳ Queued - Menunggu antrian
   - 🔵 In Progress - Sedang build
   - ✅ Success - Deploy berhasil
   - ❌ Failed - Gagal (klik untuk lihat error)

---

## Troubleshooting

### Masalah: Build Failed

**Possible causes:**
1. Error di code atau missing dependencies
2. TypeScript errors

**Solution:**
```bash
# Cek error secara lokal
bun run lint

# Build manual untuk test
bun run build
```

### Masalah: Website tidak muncul setelah deploy

**Possible causes:**
1. GitHub Pages belum aktif
2. Settings Pages belum diconfigure

**Solution:**
1. Buka Settings > Pages di repository
2. Pastikan "Source" = GitHub Actions
3. Pastikan "Branch" = main
4. Klik Save

### Masalah: Database/API tidak berfungsi

**Note:** GitHub Pages hanya support static export. Untuk API/database dengan Prisma, perlu backend terpisah (Vercel/Netlify) atau gunakan serverless functions.

**Untuk saat ini:** Shopping cart dan WhatsApp checkout tetap berfungsi (client-side only).

---

## Perbedaan GitHub Pages vs Vercel

| Fitur | GitHub Pages | Vercel |
|--------|---------------|--------|
| **Harga** | GRATIS | GRATIS (untuk personal) |
| **Bandwidth** | Unlimited | Unlimited (100GB untuk free) |
| **Build Time** | ~2-3 menit | ~1-2 menit |
| **SSL/HTTPS** | Otomatis | Otomatis |
| **Custom Domain** | Support | Support |
| **Auto Deploy** | Otomatis | Otomatis |
| **Server/Database** | Static Only | Full Next.js (API, SSR, ISR) |

---

## Tips & Best Practices

✅ Selalu gunakan git version control
✅ Commit messages yang jelas
✅ Test build locally sebelum push: `bun run build`
✅ Cek Actions log jika build gagal
✅ Gunakan branch `main` untuk production

---

## Selesai! 🎉

Website Lopasupa Kopi Anda siap di-deploy ke **GitHub Pages (GRATIS)! 

Ikuti langkah di atas, dan website akan live di:
```
https://USERNAME_GITHUB.github.io/lopasupa-kopi/
```

Selamat! 🚀☕
