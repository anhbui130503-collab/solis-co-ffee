# Xác nhận trước khi xoá

Luôn hỏi người dùng trước khi thực hiện bất kỳ hành động xoá nào trong dự án — không tự ý xoá rồi báo cáo sau.

Áp dụng cho:
- Xoá file hoặc thư mục (kể cả file tạm do chính mình tạo ra trong `src/`, `.claude/`, hoặc bất kỳ đâu trong repo).
- Xoá section, component, đoạn code, hoặc nội dung đã tồn tại trước khi bắt đầu task.
- Các lệnh có tính huỷ hoại: `rm`, `git rm`, `git clean`, `git reset --hard`, `git checkout --` (bỏ thay đổi), gỡ dependency khỏi `package.json`.
- Xoá hoặc ghi đè ảnh/asset trong `web.text/`.

Không áp dụng cho các thao tác an toàn, có thể hoàn tác dễ dàng và không mất dữ liệu người dùng:
- Sửa nội dung một file đã có (Edit) — không tính là "xoá" trừ khi xoá nguyên khối nội dung lớn có chủ đích.
- Dọn dẹp file/script tạm do chính mình tạo ra **trong cùng phiên làm việc** để phục vụ việc test/debug (ví dụ script screenshot tạm trong scratchpad) — miễn là không đụng đến file trong repo của người dùng.

Khi cần xoá, mô tả rõ sẽ xoá gì và lý do, rồi chờ người dùng xác nhận trước khi thực hiện.
