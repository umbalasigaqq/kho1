# 🚀 HƯỚNG DẪN ĐẨY PROJECT LÊN GITHUB VÀ NETLIFY

## 📌 TỔNG QUAN

Project này là một ứng dụng React + Vite (EduAI - Giáo dục thông minh).
Để triển khai lên Netlify, bạn cần:
1. Đẩy code lên GitHub
2. Kết nối Netlify với GitHub repository
3. Cấu hình biến môi trường (nếu cần)

---

## 🔧 YÊU CẦU

- ✅ Node.js đã cài đặt
- ❌ Git cần cài đặt: https://git-scm.com/download/win
- ✅ Tài khoản GitHub: https://github.com/signup
- ✅ Tài khoản Netlify: https://app.netlify.com/signup

---

## 📝 BƯỚC 1: CÀI ĐẶT GIT (Nếu chưa có)

1. Tải Git tại: https://git-scm.com/download/win
2. Cài đặt với các tùy chọn mặc định
3. Khởi động lại PowerShell/Terminal

---

## 🎯 BƯỚC 2: CHẠY LỆNH GIT TRONG THƯ MỤC PROJECT

Mở **PowerShell** hoặc **Command Prompt** tại thư mục `du an chinh`:

```powershell
# Di chuyển vào thư mục project
cd "C:\Users\Hero\Desktop\tk web 2\du an chinh"

# Kiểm tra xem Git đã hoạt động chưa
git --version

# Khởi tạo Git repository
git init

# Thêm tất cả file vào staging
git add .

# Commit lần đầu
git commit -m "Initial commit: EduAI project"

# Đổi tên branch thành main
git branch -M main
```

---

## 🌐 BƯỚC 3: TẠO REPOSITORY TRÊN GITHUB

1. Đăng nhập GitHub: https://github.com
2. Click nút **"+"** góc phải trên → **"New repository"**
3. Đặt tên: `eduai-giao-duc-thong-minh`
4. Chọn **Public** (hoặc Private nếu muốn)
5. **KHÔNG** tích chọn "Add a README file"
6. Click **"Create repository"**

---

## 📤 BƯỚC 4: ĐẨY CODE LÊN GITHUB

Sau khi tạo repository, GitHub sẽ hiển thị hướng dẫn. Copy URL của repository (ví dụ: `https://github.com/yourusername/eduai-giao-duc-thong-minh.git`)

Chạy các lệnh sau trong PowerShell:

```powershell
# Thêm remote repository (thay URL bằng URL của bạn)
git remote add origin https://github.com/yourusername/eduai-giao-duc-thong-minh.git

# Đẩy code lên GitHub
git push -u origin main
```

**⚠️ LƯU Ý**: GitHub có thể yêu cầu xác thực:

### Cách 1: Sử dụng Personal Access Token (Khuyên dùng)

1. GitHub → Click avatar → **Settings**
2. Scroll xuống → **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Đặt tên token: `netlify-deploy`
6. Chọn scope: ✅ **repo** (full control)
7. Click **Generate token**
8. **Copy token ngay** (sẽ không hiển thị lại)
9. Khi push code, sử dụng:
   - **Username**: tên GitHub của bạn
   - **Password**: dán token vừa copy

### Cách 2: Sử dụng GitHub CLI (tùy chọn)

```powershell
# Cài đặt GitHub CLI
winget install GitHub.cli

# Đăng nhập
gh auth login

# Push code
git push -u origin main
```

---

## 🌍 BƯỚC 5: TRIỂN KHAI LÊN NETLIFY

### 5.1. Import project từ GitHub

1. Đăng nhập Netlify: https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn **"Deploy with GitHub"**
4. Đăng nhập GitHub nếu cần
5. Chọn repository `eduai-giao-duc-thong-minh`
6. Cấu hình:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
7. Click **"Deploy site"**

### 5.2. Thiết lập biến môi trường (nếu cần)

Nếu ứng dụng sử dụng API key:

1. Vào **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Thêm:
   - **Key**: `GEMINI_API_KEY`
   - **Value**: (giá trị API key của bạn)
4. Click **"Save"**
5. Vào **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

### 5.3. Tùy chỉnh domain

1. Vào **Domain settings**
2. Click **"Change site name"** để đổi tên URL mặc định
3. Hoặc thêm custom domain nếu có

---

## ✅ BƯỚC 6: KIỂM TRA

1. Truy cập URL của site (sẽ có dạng: `https://random-name.netlify.app`)
2. Kiểm tra website hoạt động đúng
3. Test các chức năng chính

---

## 🔄 CẬP NHẬT WEBSITE SAU NÀY

Mỗi khi thay đổi code và muốn cập nhật website:

```powershell
# Di chuyển vào thư mục project
cd "C:\Users\Hero\Desktop\tk web 2\du an chinh"

# Xem thay đổi
git status

# Thêm file đã thay đổi
git add .

# Commit
git commit -m "Mô tả thay đổi của bạn"

# Đẩy lên GitHub
git push origin main
```

**🎉 Netlify sẽ tự động build và deploy lại website!**

---

## 🆘 XỬ LÝ LỖI THƯỜNG GẶP

### ❌ Lỗi: "git is not recognized"
**Giải pháp**: Cài đặt Git từ https://git-scm.com/download/win

### ❌ Lỗi: "Permission denied" khi push
**Giải pháp**: Sử dụng Personal Access Token thay cho password

### ❌ Lỗi build trên Netlify: "Cannot find module"
**Giải pháp**: 
- Kiểm tra `package.json` có đầy đủ dependencies
- Chạy `npm install` local để test

### ❌ Website hiển thị trang trắng
**Giải pháp**:
- Kiểm tra console browser (F12)
- Đảm bảo publish directory là `dist`
- Kiểm tra file `index.html` có tồn tại

### ❌ Lỗi: "Module not found" trong browser
**Giải pháp**: Đảm bảo file `netlify.toml` đã được commit và có redirect rules

---

## 📊 KIỂM TRA FILE CẤU HÌNH

### ✅ Các file đã được tạo sẵn:

1. **`.gitignore`** - Loại trừ các file không cần commit
2. **`netlify.toml`** - Cấu hình build và deploy cho Netlify
3. **`package.json`** - Dependencies và build scripts
4. **`vite.config.ts`** - Cấu hình Vite

### ⚠️ Lưu ý:

- File `.env.local` (nếu có) sẽ **KHÔNG** được commit (đã có trong `.gitignore`)
- Phải thêm biến môi trường trên Netlify nếu ứng dụng cần
- Đảm bảo không commit các key hoặc thông tin nhạy cảm

---

## 📞 HỖ TRỢ

Nếu gặp vấn đề, kiểm tra:
- Netlify Deploy Logs trong dashboard
- GitHub Actions (nếu có)
- Console browser (F12)

---

**Chúc bạn triển khai thành công! 🚀**

