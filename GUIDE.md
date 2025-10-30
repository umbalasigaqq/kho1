# HƯỚNG DẪN ĐẨY PROJECT LÊN GITHUB VÀ TRIỂN KHAI NETLIFY

## 📋 BƯỚC 1: CHUẨN BỊ

### 1.1. Cài đặt Git (nếu chưa có)
Tải Git tại: https://git-scm.com/download/win

### 1.2. Đăng ký tài khoản
- **GitHub**: https://github.com/signup
- **Netlify**: https://app.netlify.com/signup

---

## 🚀 BƯỚC 2: ĐẨY PROJECT LÊN GITHUB

### 2.1. Khởi tạo Git trong thư mục project

Mở Terminal/PowerShell tại thư mục `du an chinh` và chạy:

```powershell
cd "C:\Users\Hero\Desktop\tk web 2\du an chinh"

# Khởi tạo git repository
git init

# Thêm tất cả file vào staging
git add .

# Commit đầu tiên
git commit -m "Initial commit: EduAI project"

# Đổi tên branch chính (nếu cần)
git branch -M main
```

### 2.2. Tạo repository trên GitHub

1. Đăng nhập vào GitHub
2. Click nút **"+"** ở góc phải → chọn **"New repository"**
3. Đặt tên repository: `eduai-giao-duc-thong-minh` (hoặc tên khác)
4. Chọn **Public** hoặc **Private**
5. **KHÔNG** tích chọn "Initialize with README"
6. Click **"Create repository"**

### 2.3. Kết nối và đẩy code lên GitHub

Copy URL của repository vừa tạo (ví dụ: `https://github.com/username/eduai-giao-duc-thong-minh.git`)

Quay lại Terminal và chạy:

```powershell
# Thêm remote repository
git remote add origin https://github.com/username/eduai-giao-duc-thong-minh.git

# Đẩy code lên GitHub
git push -u origin main
```

**Lưu ý**: GitHub có thể yêu cầu đăng nhập. Bạn có thể:
- Sử dụng Personal Access Token (khuyên dùng)
- Hoặc cài đặt GitHub CLI

**Tạo Personal Access Token**:
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Chọn quyền `repo`
3. Copy token và dùng làm password khi push code

---

## 🌐 BƯỚC 3: TRIỂN KHAI LÊN NETLIFY

### 3.1. Chuẩn bị file cấu hình Netlify

Tạo file `netlify.toml` trong thư mục project (file này đã được tạo sẵn).

### 3.2. Triển khai qua GitHub (Khuyên dùng)

1. **Đăng nhập Netlify**: https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Chọn **"Deploy with GitHub"** → Đăng nhập GitHub
4. Chọn repository `eduai-giao-duc-thong-minh`
5. Cấu hình:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

### 3.3. Thiết lập biến môi trường (nếu cần)

Nếu ứng dụng cần API key hoặc biến môi trường:

1. Vào **Site settings** → **Environment variables**
2. Thêm biến:
   - Key: `GEMINI_API_KEY`
   - Value: (giá trị API key của bạn)
3. Click **"Save"**

### 3.4. Build lại site

1. Vào **Deploys** → Click **"Trigger deploy"** → **"Clear cache and deploy site"**
2. Đợi vài phút để build hoàn tất

### 3.5. Tùy chỉnh domain (tùy chọn)

1. Vào **Domain settings**
2. Click **"Change site name"** để đổi tên URL mặc định
3. Hoặc thêm custom domain nếu có

---

## ✅ BƯỚC 4: KIỂM TRA

1. Truy cập URL của site trên Netlify
2. Kiểm tra website hoạt động đúng
3. Test các chức năng chính

---

## 🔄 CẬP NHẬT WEBSITE

Mỗi khi bạn thay đổi code và muốn cập nhật website:

```powershell
# Commit thay đổi
git add .
git commit -m "Mô tả thay đổi"

# Đẩy lên GitHub
git push origin main
```

Netlify sẽ **tự động build và deploy** lại website sau khi nhận được thay đổi mới từ GitHub!

---

## 🆘 XỬ LÝ LỖI

### Lỗi build trên Netlify
- Kiểm tra log trong tab **"Deploys"**
- Đảm bảo `package.json` có đúng dependencies
- Kiểm tra script build command

### Lỗi push lên GitHub
- Kiểm tra kết nối internet
- Xác nhận Personal Access Token còn hiệu lực
- Thử đăng xuất/đăng nhập lại GitHub

### Website không hiển thị
- Đảm bảo publish directory là `dist`
- Kiểm tra file `index.html` có trong dist không
- Clear cache và redeploy

---

## 📝 GHI CHÚ QUAN TRỌNG

✅ Đã cập nhật `.gitignore` để không commit các file nhạy cảm  
✅ Đã tạo `netlify.toml` để cấu hình build  
✅ Đảm bảo không commit file `.env.local`  
✅ Scripts trong `package.json` đã sẵn sàng cho production

---

**Chúc bạn triển khai thành công! 🎉**

