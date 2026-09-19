---
paths: src/**/*.tsx
---

# Quy tắc bắt buộc

- **Mobile-friendly bắt buộc**: mọi section phải responsive tốt trên mobile trước (thiết kế mobile-first), kiểm tra ở các breakpoint tối thiểu 375px, 768px, 1280px trước khi coi là xong.
- **Animation khi scroll**: mọi section phải có animation reveal khi cuộn tới (fade-in/slide-up nhẹ nhàng, không lòe loẹt — phù hợp tinh thần "nhẹ nhàng, chuyên nghiệp" của brand). Dùng thư viện nhẹ như `framer-motion` hoặc CSS + `IntersectionObserver`, tránh animation nặng làm giật lag trên mobile.
- **Screenshot đối chiếu sau mỗi thay đổi lớn**: sau khi hoàn thành một section/tính năng lớn, chụp screenshot trang đã build (desktop + mobile viewport) và so sánh với ảnh design gốc trong `web.text/` để đảm bảo đúng tinh thần thiết kế trước khi báo hoàn thành.
