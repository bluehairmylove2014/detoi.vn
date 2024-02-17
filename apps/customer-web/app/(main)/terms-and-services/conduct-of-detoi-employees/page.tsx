import { ITermPolicy } from '@business-layer/services/entities/termPolicy';

import TermsAndServicesDetail from '@presentational/organisms/TermsAndServicesDetail';

const termPolicyCurrent: ITermPolicy = {
  title: 'ỨNG XỬ CỦA NHÂN VIÊN DETOI',
  content:
    '<h1>1 | Việc thu thập dữ liệu cá nhân</h1><p>Chúng tôi thu thập (và có thể kết hợp) Dữ Liệu Cá Nhân về bạn theo cách được liệt kê dưới đây:</p><h5>Chúng tôi thu thập Dữ Liệu Cá Nhân của bạn khi bạn cung cấp cho chúng tôi. Ví dụ, khi bạn:</h5><li>Hoàn tất hồ sơ người dùng hoặc các biểu mẫu đăng ký (như tên của bạn, thông tin liên lạc và thông tin nhận dạng khác khi cần thiết);</li><li>Cung cấp thông tin để đánh giá việc bạn có đủ điều kiện để cung cấp dịch vụ như là một đối tác làm dịch vụ của Detoi (như thông tin định danh công dân do chính phủ cấp và kết quả kiểm tra lý lịch);</li><li>Tương tác với các trang truyền thông xã hội của chúng tôi (như số ID tài khoản truyền thông xã hội của bạn, ảnh đại diện và bất kì dữ liệu công khai nào khác);</li><li>Tham gia các cuộc thi hoặc sự kiện do chúng tôi tổ chức (như các tranh ảnh, âm thanh hoặc video mà bạn có thể gửi, có thể bao gồm hình ảnh của chính bạn);</li><li>Xác minh danh tính của bạn thông qua các phương tiện khác nhau (như đăng nhập phương tiện truyền thông xã hội, gửi hình ảnh selfie hoặc thông tin thẻ thanh toán được xác minh một cách độc lập);</li><li>Điền thông tin nhân khẩu trong các cuộc khảo sát (như tuổi, giới tính của bạn, và thông tin khác mà bạn có thể tình nguyện như tình trạng hôn nhân, nghề nghiệp và thông tin thu nhập của bạn); và</li><li>Đồng ý sử dụng dịch vụ có các tính năng ghi âm và/ hoặc chụp ảnh trước và sau quá trình làm dịch vụ tại nơi làm dịch vụ.</li><br><h5>Khi Dịch Vụ của chúng tôi được sử dụng</h5><p>Dữ Liệu Cá Nhân có thể được thu thập thông qua hoạt động bình thường hoặc qua việc sử dụng Ứng Dụng, Websites, Dịch Vụ. Một số ví dụ như:</p><li>Thông tin vị trí của bạn;</li><li>Phản hồi, xếp hạng và khen ngợi;</li><li>Thông tin giao dịch (như phương thức thanh toán);</li><li>Thông tin về cách bạn tương tác với Ứng dụng, Website hoặc Dịch vụ của chúng tôi (như các tính năng được sử dụng và nội dung được xem);</li><li>Thông tin thiết bị (như thông số phần cứng và số sê-ri, các địa chỉ IP, tên tệp, ứng dụng, vị trí GPS, số IMEI và phiên bản và nhận dạng quảng cáo, hoặc bất kỳ thông tin nào có thể chỉ dẫn về những thay đổi của thiết bị hoặc ứng dụng);</li><li>Dữ liệu cá nhân bạn nhập trong tin nhắn khi bạn sử dụng tính năng giao tiếp trong ứng dụng của chúng tôi; và dữ liệu cá nhân có thể được ghi lại thông qua tương tác của bạn với chúng tôi, ghi âm trong quá trình làm dịch vụ.</li><h1>2 | Việc thu thập dữ liệu cá nhân</h1><p>Chúng tôi thu thập (và có thể kết hợp) Dữ Liệu Cá Nhân về bạn theo cách được liệt kê dưới đây:</p><h5>Chúng tôi thu thập Dữ Liệu Cá Nhân của bạn khi bạn cung cấp cho chúng tôi. Ví dụ, khi bạn:</h5><li>Hoàn tất hồ sơ người dùng hoặc các biểu mẫu đăng ký (như tên của bạn, thông tin liên lạc và thông tin nhận dạng khác khi cần thiết);</li><li>Cung cấp thông tin để đánh giá việc bạn có đủ điều kiện để cung cấp dịch vụ như là một đối tác làm dịch vụ của Detoi (như thông tin định danh công dân do chính phủ cấp và kết quả kiểm tra lý lịch);</li><li>Tương tác với các trang truyền thông xã hội của chúng tôi (như số ID tài khoản truyền thông xã hội của bạn, ảnh đại diện và bất kì dữ liệu công khai nào khác);</li><li>Tham gia các cuộc thi hoặc sự kiện do chúng tôi tổ chức (như các tranh ảnh, âm thanh hoặc video mà bạn có thể gửi, có thể bao gồm hình ảnh của chính bạn);</li><li>Xác minh danh tính của bạn thông qua các phương tiện khác nhau (như đăng nhập phương tiện truyền thông xã hội, gửi hình ảnh selfie hoặc thông tin thẻ thanh toán được xác minh một cách độc lập);</li><li>Điền thông tin nhân khẩu trong các cuộc khảo sát (như tuổi, giới tính của bạn, và thông tin khác mà bạn có thể tình nguyện như tình trạng hôn nhân, nghề nghiệp và thông tin thu nhập của bạn); và</li><li>Đồng ý sử dụng dịch vụ có các tính năng ghi âm và/ hoặc chụp ảnh trước và sau quá trình làm dịch vụ tại nơi làm dịch vụ.</li><br><h5>Khi Dịch Vụ của chúng tôi được sử dụng</h5><p>Dữ Liệu Cá Nhân có thể được thu thập thông qua hoạt động bình thường hoặc qua việc sử dụng Ứng Dụng, Websites, Dịch Vụ. Một số ví dụ như:</p><li>Thông tin vị trí của bạn;</li><li>Phản hồi, xếp hạng và khen ngợi;</li><li>Thông tin giao dịch (như phương thức thanh toán);</li><li>Thông tin về cách bạn tương tác với Ứng dụng, Website hoặc Dịch vụ của chúng tôi (như các tính năng được sử dụng và nội dung được xem);</li><li>Thông tin thiết bị (như thông số phần cứng và số sê-ri, các địa chỉ IP, tên tệp, ứng dụng, vị trí GPS, số IMEI và phiên bản và nhận dạng quảng cáo, hoặc bất kỳ thông tin nào có thể chỉ dẫn về những thay đổi của thiết bị hoặc ứng dụng);</li><li>Dữ liệu cá nhân bạn nhập trong tin nhắn khi bạn sử dụng tính năng giao tiếp trong ứng dụng của chúng tôi; và dữ liệu cá nhân có thể được ghi lại thông qua tương tác của bạn với chúng tôi, ghi âm trong quá trình làm dịch vụ.</li><h1>3 | Việc thu thập dữ liệu cá nhân</h1><h1>3 | Việc thu thập dữ liệu cá nhân</h1><p>Chúng tôi thu thập (và có thể kết hợp) Dữ Liệu Cá Nhân về bạn theo cách được liệt kê dưới đây:</p><h5>Chúng tôi thu thập Dữ Liệu Cá Nhân của bạn khi bạn cung cấp cho chúng tôi. Ví dụ, khi bạn:</h5><li>Hoàn tất hồ sơ người dùng hoặc các biểu mẫu đăng ký (như tên của bạn, thông tin liên lạc và thông tin nhận dạng khác khi cần thiết);</li><li>Cung cấp thông tin để đánh giá việc bạn có đủ điều kiện để cung cấp dịch vụ như là một đối tác làm dịch vụ của Detoi (như thông tin định danh công dân do chính phủ cấp và kết quả kiểm tra lý lịch);</li><li>Tương tác với các trang truyền thông xã hội của chúng tôi (như số ID tài khoản truyền thông xã hội của bạn, ảnh đại diện và bất kì dữ liệu công khai nào khác);</li><li>Tham gia các cuộc thi hoặc sự kiện do chúng tôi tổ chức (như các tranh ảnh, âm thanh hoặc video mà bạn có thể gửi, có thể bao gồm hình ảnh của chính bạn);</li><li>Xác minh danh tính của bạn thông qua các phương tiện khác nhau (như đăng nhập phương tiện truyền thông xã hội, gửi hình ảnh selfie hoặc thông tin thẻ thanh toán được xác minh một cách độc lập);</li><li>Điền thông tin nhân khẩu trong các cuộc khảo sát (như tuổi, giới tính của bạn, và thông tin khác mà bạn có thể tình nguyện như tình trạng hôn nhân, nghề nghiệp và thông tin thu nhập của bạn); và</li><li>Đồng ý sử dụng dịch vụ có các tính năng ghi âm và/ hoặc chụp ảnh trước và sau quá trình làm dịch vụ tại nơi làm dịch vụ.</li><br><h5>Khi Dịch Vụ của chúng tôi được sử dụng</h5><p>Dữ Liệu Cá Nhân có thể được thu thập thông qua hoạt động bình thường hoặc qua việc sử dụng Ứng Dụng, Websites, Dịch Vụ. Một số ví dụ như:</p><li>Thông tin vị trí của bạn;</li><li>Phản hồi, xếp hạng và khen ngợi;</li><li>Thông tin giao dịch (như phương thức thanh toán);</li><li>Thông tin về cách bạn tương tác với Ứng dụng, Website hoặc Dịch vụ của chúng tôi (như các tính năng được sử dụng và nội dung được xem);</li><li>Thông tin thiết bị (như thông số phần cứng và số sê-ri, các địa chỉ IP, tên tệp, ứng dụng, vị trí GPS, số IMEI và phiên bản và nhận dạng quảng cáo, hoặc bất kỳ thông tin nào có thể chỉ dẫn về những thay đổi của thiết bị hoặc ứng dụng);</li><li>Dữ liệu cá nhân bạn nhập trong tin nhắn khi bạn sử dụng tính năng giao tiếp trong ứng dụng của chúng tôi; và dữ liệu cá nhân có thể được ghi lại thông qua tương tác của bạn với chúng tôi, ghi âm trong quá trình làm dịch vụ.</li><h1>2 | Việc thu thập dữ liệu cá nhân</h1><p>Chúng tôi thu thập (và có thể kết hợp) Dữ Liệu Cá Nhân về bạn theo cách được liệt kê dưới đây:</p><h5>Chúng tôi thu thập Dữ Liệu Cá Nhân của bạn khi bạn cung cấp cho chúng tôi. Ví dụ, khi bạn:</h5><li>Hoàn tất hồ sơ người dùng hoặc các biểu mẫu đăng ký (như tên của bạn, thông tin liên lạc và thông tin nhận dạng khác khi cần thiết);</li><li>Cung cấp thông tin để đánh giá việc bạn có đủ điều kiện để cung cấp dịch vụ như là một đối tác làm dịch vụ của Detoi (như thông tin định danh công dân do chính phủ cấp và kết quả kiểm tra lý lịch);</li><li>Tương tác với các trang truyền thông xã hội của chúng tôi (như số ID tài khoản truyền thông xã hội của bạn, ảnh đại diện và bất kì dữ liệu công khai nào khác);</li><li>Tham gia các cuộc thi hoặc sự kiện do chúng tôi tổ chức (như các tranh ảnh, âm thanh hoặc video mà bạn có thể gửi, có thể bao gồm hình ảnh của chính bạn);</li><li>Xác minh danh tính của bạn thông qua các phương tiện khác nhau (như đăng nhập phương tiện truyền thông xã hội, gửi hình ảnh selfie hoặc thông tin thẻ thanh toán được xác minh một cách độc lập);</li><li>Điền thông tin nhân khẩu trong các cuộc khảo sát (như tuổi, giới tính của bạn, và thông tin khác mà bạn có thể tình nguyện như tình trạng hôn nhân, nghề nghiệp và thông tin thu nhập của bạn); và</li><li>Đồng ý sử dụng dịch vụ có các tính năng ghi âm và/ hoặc chụp ảnh trước và sau quá trình làm dịch vụ tại nơi làm dịch vụ.</li><br><h5>Khi Dịch Vụ của chúng tôi được sử dụng</h5><p>Dữ Liệu Cá Nhân có thể được thu thập thông qua hoạt động bình thường hoặc qua việc sử dụng Ứng Dụng, Websites, Dịch Vụ. Một số ví dụ như:</p><li>Thông tin vị trí của bạn;</li><li>Phản hồi, xếp hạng và khen ngợi;</li><li>Thông tin giao dịch (như phương thức thanh toán);</li><li>Thông tin về cách bạn tương tác với Ứng dụng, Website hoặc Dịch vụ của chúng tôi (như các tính năng được sử dụng và nội dung được xem);</li><li>Thông tin thiết bị (như thông số phần cứng và số sê-ri, các địa chỉ IP, tên tệp, ứng dụng, vị trí GPS, số IMEI và phiên bản và nhận dạng quảng cáo, hoặc bất kỳ thông tin nào có thể chỉ dẫn về những thay đổi của thiết bị hoặc ứng dụng);</li><li>Dữ liệu cá nhân bạn nhập trong tin nhắn khi bạn sử dụng tính năng giao tiếp trong ứng dụng của chúng tôi; và dữ liệu cá nhân có thể được ghi lại thông qua tương tác của bạn với chúng tôi, ghi âm trong quá trình làm dịch vụ.</li>',
};

const ConductEmployee = () => {
  return (
    <>
      {termPolicyCurrent ? (
        <TermsAndServicesDetail termPolicy={termPolicyCurrent} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ConductEmployee;
