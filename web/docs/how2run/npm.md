# Hướng dẫn sử dụng Monorepo với NX cho ứng dụng Next.js

## Cài đặt NX

Đầu tiên, bạn cần cài đặt NX. Bạn có thể làm điều này bằng cách chạy lệnh sau trong terminal:
`npx create-nx-workspace@latest`

## Cài @nrwl package

Chạy `nx report` để hiển thị danh sách các gói hiện có trong project, nếu chưa có gói cần tìm,
chạy `npm i @nrwl/<package>` với `<package>` là gói bạn cần dùng. Ở đây, tôi dùng gói next
`npm i @nrwl/next`

## Tạo ứng dụng Next.js

Sau khi đã cài đặt NX, Di chuyển tới thư mục project mới khởi tạo, bạn có thể tạo một ứng dụng Next.js
mới bằng cách chạy lệnh sau:
`npx nx g @nrwl/next:app myapp --directory=apps/myapp`
Thay `myapp` bằng tên của ứng dụng của bạn.
Thay `apps/myapp` bằng đường dẫn tới app của bạn

## Tạo thư viện chia sẻ

Bạn cũng có thể tạo một thư viện chia sẻ để tái sử dụng code giữa các ứng dụng khác nhau trong monorepo. Để làm điều này, bạn có thể chạy lệnh sau:
`npx nx g @nrwl/react:lib mylib`
Thay `mylib` bằng tên của thư viện của bạn.

## Cài đặt Dependencies

```dependency
npm install @flaticon/flaticon-uicons@latest @headlessui/react@^1.7.17 @mapbox/search-js-react@^1.0.0-beta.18 @material-tailwind/react@^2.1.5 @microsoft/signalr@^8.0.0 @reduxjs/toolkit@^1.9.7 @tanstack/react-query@^5.8.4 @types/mapbox-gl@^2.7.19 axios@^1.6.2 bufferutil@^4.0.8 classnames@^2.3.2 crypto-js@^4.2.0 embla-carousel-react@^8.0.0-rc15 encoding@^0.1.13 friendly-challenge@^0.9.14 js-cookie@^3.0.5 lodash@^4.17.21 mapbox-gl@^2.15.0 mapbox-gl-geocoder@^2.0.1 quill@^1.3.7 react@18.2.0 react-dom@18.2.0 react-hook-form@^7.48.2 react-map-gl@^7.1.6 react-redux@^8.1.3 react-responsive-carousel@^3.2.23 sharp@^0.32.6 socket.io-client@^4.7.3 sonner@^1.2.2 tslib@^2.3.0 utf-8-validate@^5.0.10 uuid@^9.0.1 ws@^8.16.0 yup@^1.3.2 zod@^3.22.4 --save

```

Và sau đó, cài đặt các devDependencies bằng câu lệnh sau:

```devDependency
npm install @tanstack/react-query-devtools@^5.8.4 @testing-library/react@14.0.0 @types/crypto-js@^4.2.1 @types/jest@^29.4.0 @types/js-cookie@^3.0.6 @types/lodash@^4.14.202 @types/node@18.14.2 @types/quill@^2.0.14 @types/react@18.2.33 @types/react-dom@18.2.14 @types/socket.io-client@^3.0.0 @types/uuid@^9.0.7 @typescript-eslint/eslint-plugin@^6.9.1 @typescript-eslint/parser@^6.9.1 autoprefixer@^10.4.16 axios-mock-adapter@^1.22.0 babel-jest@^29.4.1 cypress@^13.0.0 eslint@~8.46.0 eslint-config-next@13.4.1 eslint-config-prettier@^9.0.0 eslint-plugin-cypress@^2.13.4 eslint-plugin-import@2.27.5 eslint-plugin-jsx-a11y@6.7.1 eslint-plugin-react@7.32.2 eslint-plugin-react-hooks@4.6.0 jest@^29.4.1 jest-environment-jsdom@^29.4.1 nx@17.1.2 postcss@^8.4.31 prettier@^2.6.2 sass@^1.69.5 tailwindcss@^3.3.5 ts-jest@^29.1.0 ts-node@10.9.1 typescript@~5.2.2 --save-dev

```

## Chạy ứng dụng

Cuối cùng, sau khi đã tạo xong ứng dụng và thư viện, bạn có thể chạy ứng dụng bằng cách chạy lệnh sau:
`npx nx serve myapp`

Lưu ý rằng bạn nên chạy các câu lệnh này trong thư mục gốc của dự án của bạn, nơi chứa file `package.json`. Ngoài ra, hãy đảm bảo rằng bạn đã cài đặt Node.js và npm trên máy của bạn.
