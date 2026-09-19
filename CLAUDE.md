# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website giới thiệu cho **Solis Coffee, Brunch and Beer**. Chi tiết quy tắc dự án đã được tách theo chủ đề trong `.claude/rules/`:

- [`project-overview.md`](.claude/rules/project-overview.md) — tech stack, commands
- [`design-system.md`](.claude/rules/design-system.md) — màu sắc, typography, spacing/layout
- [`page-structure.md`](.claude/rules/page-structure.md) — cấu trúc trang one-page
- [`content-guidelines.md`](.claude/rules/content-guidelines.md) — ngôn ngữ & thông tin thực tế của quán
- [`quality-requirements.md`](.claude/rules/quality-requirements.md) — mobile-friendly, animation, screenshot đối chiếu
- [`assets.md`](.claude/rules/assets.md) — ảnh tham khảo design
- [`deletion-safety.md`](.claude/rules/deletion-safety.md) — luôn hỏi trước khi xoá file/code/asset

Các file trong `.claude/rules/` được Claude Code tự động nạp; không cần import thủ công.

## Cảnh báo phiên bản Next.js

Dự án dùng **Next.js 16.2.10** (App Router) — mới hơn dữ liệu huấn luyện của model, một số API/convention có thể khác với những gì đã biết. Trước khi viết code liên quan đến Next.js, đọc tài liệu tại `node_modules/next/dist/docs/` (đặc biệt thư mục `01-app/`) thay vì dựa vào kiến thức cũ, và chú ý các deprecation notice.

## Kiến trúc

- One-page: [`src/app/page.tsx`](src/app/page.tsx) chỉ ghép các section component theo thứ tự (`Nav`, `Hero`, `About`, `Menu`, `Gallery`, `HoursLocation`, `Footer`) — không có routing nào khác.
- Màu brand không định nghĩa trong `tailwind.config` mà khai báo làm CSS variable ở [`src/app/globals.css`](src/app/globals.css) (`--color-solis-*`), rồi map lại qua `@theme inline` để Tailwind sinh class tương ứng (`bg-solis-brown`, `text-solis-ink`, ...). Sửa màu thì sửa ở đây.
- Font (`Playfair Display`, `Jost`) được load bằng `next/font/google` trong [`src/app/layout.tsx`](src/app/layout.tsx), expose qua CSS variable (`--font-playfair`, `--font-jost`), rồi gán vào `--font-serif`/`--font-sans` trong `globals.css`.
- Animation reveal-on-scroll dùng chung 1 component [`src/components/Reveal.tsx`](src/components/Reveal.tsx) (wrapper `framer-motion` với `whileInView`) — bọc quanh nội dung section thay vì viết lại animation riêng ở từng chỗ.
- `Logotype.tsx` là wordmark "SOLIS" dạng SVG (không dùng font) dùng ở Hero/Footer, vẽ lại từ file logo gốc (xem `design-system.md`). `LogoMark.tsx` là icon "S" độc lập dùng riêng ở Nav.
- Import nội bộ dùng path alias `@/*` → `./src/*` (khai báo trong `tsconfig.json`), ví dụ `import Hero from "@/components/Hero"`.
