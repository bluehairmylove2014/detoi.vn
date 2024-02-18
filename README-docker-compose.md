# DEPLOY SERVER TẠI MÁY LOCAL

Yêu cầu: đã tải về docker desktop hoặc docker-compose

link: https://www.docker.com/products/docker-desktop/

1. Pull nhánh docker-server tại github
2. Mở cmd tại thư mục code của nhánh
3. Sử dụng lệnh: docker-compose up -d
4. Sau khi chạy xong, mở 1 trong 2 link sau: 
    - http://localhost:8000/swagger/index.html
    - https://localhost:8001/swagger/index.html

Lưu ý: để cập nhật server mới nhất -> xóa container cũ, chuyển code qua nhánh và chạy lệnh ở bước 3 là cập nhật xong.