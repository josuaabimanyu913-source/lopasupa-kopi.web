# Panduan Deploy Lopasupa Kopi ke Vercel (Gratis)

Repository sudah siap! Langkah selanjutnya adalah:

## Langkah 1: Push ke GitHub

### 1A. Buat Repository GitHub Baru

1. Buka https://github.com/new
2. Repository name: `lopasupa-kopi` (atau nama yang Anda inginkan)
3. Pilih **Public** atau **Private** (terserah Anda)
4. Jangan centang "Add a README file", "Add .gitignore", dll
5. Klik **Create repository**

### 1B. Push Code ke GitHub

Setelah repository dibuat, jalankan perintah berikut di terminal:

```bash
# Ganti USERNAME dengan GitHub username Anda
git remote add origin https://github.com/USERNAME/lopasupa-kopi.git

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

## Langkah 2: Deploy ke Vercel (Gratis)

### 2A. Install Vercel CLI

```bash
npm install -g vercel
```

### 2B. Login ke Vercel

```bash
vercel login
```

Ikuti instruksi untuk login (bisa dengan GitHub).

### 2C. Deploy Project

```bash
vercel
```

Vercel akan menanyakan:
1. **Set up and deploy?** → Pilih `Yes`
2. **Which scope?** → Pilih username GitHub Anda
3. **Link to existing project?** → Pilih `No`
4. **Project name:** → `lopasupa-kopi` (otomatis terisi)
5. **Directory:** → Tekan Enter untuk root directory
6. **Modify settings?** → Tekan Enter untuk default

Tunggu beberapa detik, dan website Anda akan online! 🚀

---

## Langkah 3: Website Anda Live!

Setelah deploy berhasil:
- **Dashboard Vercel:** https://vercel.com/dashboard
- **URL website Anda:** `https://lopasupa-kopi.vercel.app` (atau sesuai nama project Anda)
- **Tanpa space.z.ai lagi!** ✅

---

## Update Berikutnya

Untuk update website setelah deploy:

```bash
# 1. Commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"

# 2. Push ke GitHub
git push

# 3. Deploy otomatis!
# Vercel akan otomatis redeploy saat ada push baru ke GitHub
```

---

## Alternatif: Deploy dari Dashboard Vercel

Jika tidak ingin menggunakan CLI:

1. Buka https://vercel.com/new
2. Klik **Import a Git Repository**
3. Pilih repository `lopasupa-kopi` dari GitHub
4. Vercel akan otomatis detect Next.js dan deploy!
5. Klik **Deploy** dan tunggu

---

## Notes Penting

1. **Database:** SQLite akan bekerja di production dengan Vercel
2. **Environment Variables:** Tidak perlu setting tambahan untuk project ini
3. **Gratis:** Vercel menyediakan hosting gratis untuk personal projects
4. **Unlimited bandwidth:** Untuk project kecil seperti ini

---

## Troubleshooting

### Jika error saat deploy:

**Error 1: Build fails**
```bash
# Pastikan dependencies terinstall
bun install
```

**Error 2: Environment variables missing**
- Cek dashboard Vercel > Settings > Environment Variables
- Tambahkan jika ada API keys atau secrets

**Error 3: Database issue**
```bash
# Pastikan Prisma client generated
bunx prisma generate
```

---

## Fitur Website

✅ Responsive design (mobile, tablet, desktop)
✅ Product grid (2-5 columns tergantung screen size)
✅ Shopping cart functionality
✅ Checkout ke WhatsApp
✅ 6 Produk kopi premium
✅ Instagram & Email links
✅ Animations & transitions

---

Selamat! 🎉 Website Lopasupa Kopi Anda siap di-deploy!

URL akan menjadi: **https://lopasupa-kopi.vercel.app**
