[Tiếng Việt](README.md) | [English](README.en.md)

---

# Page to M4B Userscript

[![Release](https://img.shields.io/github/v/release/trinhquocviet/page-to-m4b-userscript?style=for-the-badge&logo=github)](https://github.com/trinhquocviet/page-to-m4b-userscript/releases/latest)
[![Install Userscript](https://img.shields.io/badge/Install-Userscript-10b981?style=for-the-badge&logo=tampermonkey)](https://github.com/trinhquocviet/page-to-m4b-userscript/releases/latest/download/page-to-m4b.user.js)

Userscript tự động tích hợp nút chuyển đổi nhanh trên các trang sách nói được hỗ trợ, cho phép trích xuất và đóng gói audiobook thành file `.m4b` phân chia chapter rõ ràng chỉ với một cú nhấp chuột trực tiếp trên trình duyệt.

---

## Hướng dẫn cài đặt

1. Cài đặt tiện ích mở rộng quản lý userscript trên trình duyệt: [Tampermonkey](https://www.tampermonkey.net/) hoặc [Violentmonkey](https://violentmonkey.github.io/).
2. Nhấp vào liên kết: **[Install page-to-m4b.user.js](https://github.com/trinhquocviet/page-to-m4b-userscript/releases/latest/download/page-to-m4b.user.js)**.
3. Khi hộp thoại cài đặt của tiện ích xuất hiện, chọn **Cài đặt (Install)** để hoàn tất.

## Danh sách website hỗ trợ

- **Radio Sách** (`radiosach.com`)
- **Radio Ngôn Tình** (`radiongontinh.com`)
- **AudioAZ** (`audioaz.com`)
- **Dilib / Thư Viện Sách Nói** (`dilib.vn`, `thuviensachnoi.vn`)

## Cơ chế cập nhật tự động

Script đã được cấu hình sẵn các chỉ thị `@updateURL` và `@downloadURL` liên kết trực tiếp tới GitHub Releases của repository này. Tiện ích quản lý userscript sẽ tự động phát hiện và cập nhật lên phiên bản mới nhất ngay khi phát hành.

## Ứng dụng & Hỗ trợ

- **Trang chủ ứng dụng:** [https://page-to-m4b.viettr.work/](https://page-to-m4b.viettr.work/)
- **Báo lỗi & Đóng góp ý kiến:** [GitHub Issues](https://github.com/trinhquocviet/page-to-m4b-userscript/issues)

## Cảnh báo an toàn & Miễn trừ trách nhiệm

- **Cảnh báo mã độc:** Hãy luôn đảm bảo bạn cài đặt userscript từ repository chính thức này (`trinhquocviet/page-to-m4b-userscript`) hoặc trang phát hành (Releases) chính chủ. Tuyệt đối không cài đặt script từ các nguồn chia sẻ lại không rõ nguồn gốc, các bản fork chưa được kiểm chứng nhằm tránh nguy cơ bị chèn mã độc, đánh cắp cookie đăng nhập, dữ liệu cá nhân hay chiếm đoạt phiên duyệt web.
- **Miễn trừ trách nhiệm:** Công cụ này được phát triển phục vụ mục đích cá nhân, học tập và sao lưu dữ liệu cá nhân. Người dùng tự chịu hoàn toàn trách nhiệm về việc tuân thủ Điều khoản sử dụng (Terms of Service) của các website liên quan và luật sở hữu trí tuệ/bản quyền hiện hành. Tác giả không chịu bất kỳ trách nhiệm pháp lý nào phát sinh từ việc sử dụng script này.
