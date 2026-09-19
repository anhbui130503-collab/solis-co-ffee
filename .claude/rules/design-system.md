---
paths: src/**/*.{tsx,css}
---

# Design system

Tham khảo từ `web.text/Ảnh màn hình 2026-07-07 lúc 01.02.34.png` (hero/logo Solis) và cấu trúc bố cục dạng section sáng/tối xen kẽ trong `web.text/asdasd.png`.

Tinh thần chung: **đơn giản, chuyên nghiệp, nhẹ nhàng** — nhiều khoảng trắng, ít chi tiết thừa, cảm giác ấm áp như một quán cà phê cao cấp chứ không phải startup công nghệ.

## Bảng màu

| Tên | Hex | Dùng cho |
|---|---|---|
| `solis-brown` | `#813130` | Nền section tối / hero, nút chính (đỏ maroon thương hiệu) |
| `solis-brown-dark` | `#672726` | Biến thể tối hơn của `solis-brown` (nền ảnh chưa load, hover...) |
| `solis-cream` | `#EEDBB1` | Chữ trên nền tối, logo, điểm nhấn |
| `solis-paper` | `#FAF7F2` | Nền section sáng (ước lượng, chưa có ảnh gốc tham chiếu) |
| `solis-ink` | `#2B2320` | Chữ chính trên nền sáng (ước lượng, chưa có ảnh gốc tham chiếu) |

> `solis-brown`/`solis-cream` đo chính xác (color-sample) từ file `SolisCoffee-Logo-Official-FA-05.jpg` / `SolisCoffee-Logo-Mark-FA-05.jpg` gốc trên Drive. `solis-paper`/`solis-ink` vẫn là màu ước lượng, chưa có file gốc tham chiếu.

Nguyên tắc phối màu: mỗi section chỉ dùng **nền sáng (paper) hoặc nền tối (brown)**, không trộn nhiều màu nền trong cùng section. Luân phiên sáng/tối giữa các section để tạo nhịp điệu khi cuộn trang.

## Typography

- **Logo/wordmark "SOLIS"**: sans-serif geometric mảnh, weight nhẹ (`Jost` weight 300), chữ hoa, letter-spacing rộng — dùng ở Hero và Footer qua component `src/components/Logotype.tsx`. Chữ "L" trong wordmark **không dùng ký tự "L" thật** (font Jost có chân ngang tự nhiên gây dư nét) mà render bằng ký tự "I" (thanh dọc trơn, cùng bề rộng với "L") cộng khoảng đứt + chân hình thang riêng dựng bằng `clip-path` — đối chiếu pixel-chính-xác với file gốc "Logo Solis 1" trên Drive. Component có `role="img"`/`aria-label="SOLIS"` để giữ đúng nội dung cho screen reader. Cả Hero và Footer đều hiển thị khoảng đứt này (`showGap` mặc định `true`) vì file gốc có chi tiết này ở logo chính giữa — chi tiết nhận diện thương hiệu, giữ nguyên khi chỉnh sửa.
- **Logo mark "S"**: icon chữ "S" độc lập dùng riêng ở Nav (góc trái trên cùng) qua component `src/components/LogoMark.tsx` — xác nhận (đối chiếu trực tiếp glyph render) mark này thực chất là ký tự "S" của **cùng font Jost weight 300** dùng cho wordmark, kéo giãn ngang `scaleX(1.2)` để khớp tỉ lệ file gốc "Logo Solis 2" trên Drive, cộng thanh chân hình thang bên dưới (`clip-path`). Vậy "phông chữ Typography" của bộ nhận diện Solis chính là Jost cho cả wordmark lẫn logo mark — không cần đổi font nào khác.
- **Heading section**: serif thanh lịch (tham khảo `Playfair Display` hoặc `Cormorant`) — dùng cho tiêu đề các section (About/Menu/...), không dùng cho wordmark "SOLIS".
- **Body/nav/tagline**: sans-serif gọn, chữ hoa + letter-spacing rộng cho tagline/nav (`Jost`), chữ thường cho đoạn văn dài.
- Tránh dùng quá 2 font family trong toàn site (hiện tại: `Playfair Display` cho heading, `Jost` cho wordmark/nav/tagline/body).

## Spacing & layout

- Section full-width, padding dọc lớn (`py-24`/`py-32` trở lên) để tạo cảm giác thoáng.
- Bố cục one-page, cuộn mượt, có thể thêm nav cố định trong suốt (transparent → solid khi cuộn).
- Hạn chế shadow/border nặng; ưu tiên phân tách bằng màu nền và khoảng trắng.
