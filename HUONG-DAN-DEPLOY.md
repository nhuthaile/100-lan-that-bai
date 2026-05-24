# 🚀 Hướng Dẫn Setup & Deploy: 100 Lần Thất Bại

## Bước 1: Push code lên GitHub

```bash
# Di chuyển vào thư mục project
cd 100-lan-that-bai

# Khởi tạo Git
git init
git add .
git commit -m "🎬 Khởi đầu hành trình 100 Lần Thất Bại"

# Tạo repo trên GitHub (tên: 100-lan-that-bai)
# Rồi push lên
git remote add origin https://github.com/YOUR_USERNAME/100-lan-that-bai.git
git branch -M main
git push -u origin main
```

## Bước 2: Tạo tài khoản Cloudflare (miễn phí)

1. Vào [dash.cloudflare.com](https://dash.cloudflare.com) → đăng ký
2. Không cần credit card cho gói miễn phí

## Bước 3: Deploy lên Cloudflare Pages

1. Vào **Cloudflare Dashboard** → **Workers & Pages** → **Create**
2. Chọn tab **Pages** → **Connect to Git**
3. Chọn repo `100-lan-that-bai` từ GitHub
4. Cấu hình build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Nhấn **Save and Deploy**
6. Chờ 1-2 phút, site sẽ live tại `100-lan-that-bai.pages.dev`

## Bước 4: Kết nối domain riêng

1. Vào **Cloudflare Dashboard** → **Workers & Pages** → chọn project
2. Tab **Custom domains** → **Set up a custom domain**
3. Nhập `100lanthatbai.com` (hoặc domain bạn đã mua)
4. Nếu domain đã ở Cloudflare: tự động cấu hình
5. Nếu domain ở chỗ khác (Namecheap, GoDaddy...):
   - Thêm CNAME record: `@` → `100-lan-that-bai.pages.dev`
   - Hoặc chuyển nameserver về Cloudflare (khuyến nghị)

## Bước 5: Bật HTTPS

Cloudflare Pages tự động cấp SSL/HTTPS miễn phí. Không cần làm gì thêm.

---

## 📝 Cách viết bài mới

### Bài blog thường:

Tạo file `.md` trong `src/content/blog/`:

```markdown
---
title: 'Tiêu đề bài viết'
description: 'Mô tả ngắn'
pubDate: 2026-06-01
type: 'general'
---

Nội dung bài viết ở đây...
```

### Bài startup log (có tracking):

```markdown
---
title: 'Lần #002 — Tên Startup'
description: 'Mô tả ngắn về startup này'
pubDate: 2026-06-15
startupNumber: 2
startupName: 'Tên Startup'
status: 'failed'       # building | launched | failed | alive
buildTime: '10 ngày'
revenue: '$0'
techStack: ['Next.js', 'Supabase', 'Stripe']
lesson: 'Một dòng bài học chính'
type: 'build-log'      # build-log | post-mortem | lesson | general
---

Nội dung chi tiết...
```

### Đăng bài:

```bash
# Viết bài xong, push lên GitHub
git add .
git commit -m "Thêm bài: Lần #002"
git push

# Cloudflare Pages tự động build & deploy trong ~1 phút
```

---

## 📂 Cấu trúc project

```
100-lan-that-bai/
├── src/
│   ├── content/blog/          ← Viết bài ở đây (Markdown)
│   ├── components/            ← Header, Footer, ...
│   ├── layouts/BlogPost.astro ← Layout cho bài viết
│   ├── pages/
│   │   ├── index.astro        ← Trang chủ
│   │   ├── blog/              ← Danh sách bài viết
│   │   ├── dashboard.astro    ← Dashboard tracking 100 startups
│   │   └── about.astro        ← Giới thiệu
│   └── styles/global.css      ← CSS chung
├── public/                    ← Static files (favicon, images)
└── astro.config.mjs           ← Config Astro
```

## 🔧 Chạy local (để preview trước khi đăng)

```bash
npm run dev
# Mở http://localhost:4321
```

## 💡 Tips

- **Ảnh:** đặt trong `src/assets/` rồi import trong frontmatter
- **SEO:** mỗi bài có `title` + `description` → Astro tự tạo meta tags
- **RSS:** tự động có tại `/rss.xml` — dùng cho podcast feed hoặc reader
- **Sitemap:** tự động tạo tại `/sitemap-index.xml`
- **Tốc độ:** Astro build ra HTML tĩnh, load cực nhanh, SEO tốt

---

## 💰 Chi phí

| Hạng mục | Chi phí |
|----------|---------|
| Domain | ~$10-12/năm |
| Hosting (Cloudflare Pages) | $0 |
| SSL/HTTPS | $0 |
| CDN | $0 (Cloudflare tích hợp sẵn) |
| **Tổng** | **~$10-12/năm** |

Chúc bạn khởi đầu hành trình thành công! 🚀
