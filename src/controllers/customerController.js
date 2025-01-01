const { uploadSingleFile } = require("../services/fileService"); // Import chức năng tải tệp lên từ fileService.
const {
  createCustomerService,
  createListCustomerService,
  getCustomerList,
  updateAnCustomerService,
  deleteCustomerService,
} = require("../services/customerService"); // Import chức năng tạo khách hàng từ customerService.
const aqp = require("api-query-params");

module.exports = {
  // Hàm xử lý yêu cầu POST để tạo khách hàng mới
  postCreateCustomer: async (req, res) => {
    // Lấy thông tin khách hàng từ body của request
    let { name, address, phone, email, description, image } = req.body;

    let imageURL = ""; // Khởi tạo biến để lưu đường dẫn hình ảnh

    // Kiểm tra xem có tệp nào được tải lên hay không
    if (!req.files || Object.keys(req.files).length === 0) {
      // Nếu không có tệp nào được tải lên, imageURL sẽ giữ giá trị rỗng
    } else {
      // Nếu có tệp được tải lên, thực hiện tải tệp
      let result = await uploadSingleFile(req.files.image); // Gọi hàm tải tệp lên và nhận kết quả
      imageURL = result.path; // Lưu đường dẫn của tệp đã tải lên
      console.log("check", result); // Ghi log kết quả để kiểm tra
    }

    // Tạo đối tượng chứa dữ liệu khách hàng
    let customerData = {
      name, // Tên khách hàng
      address, // Địa chỉ khách hàng
      phone, // Số điện thoại khách hàng
      email, // Email khách hàng
      description, // Mô tả về khách hàng
      image: imageURL, // Đường dẫn hình ảnh đã tải lên
    };

    // Gọi dịch vụ để tạo khách hàng mới trong cơ sở dữ liệu
    let customer = await createCustomerService(customerData);

    // Trả về phản hồi JSON thành công cho phía client
  },
  ///////////////////////////////
  postCustomerList: async (req, res) => {
    let customers = await createListCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0, // Mã lỗi (0 có nghĩa là không có lỗi)
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1, // Mã lỗi (-1 có nghĩa là có lỗi)
        data: customers,
      });
    }
  },
  //////////////////////////
  getAllCustomer: async (req, res) => {
    let limit = req.query.limit;
    let page = req.query.page;
    let name = req.query.name;
    let customers = null;

    if (limit && page) {
      console.log("query", req.query);
      customers = await getCustomerList(limit, page, name, req.query);
    } else {
      customers = await getCustomerList();
    } //////////////////// xet so trang
    /////////////////////
    if (customers) {
      return res.status(200).json({
        EC: 0, // Mã lỗi (0 có nghĩa là không có lỗi)
        data: customers,
      });
    } else {
      return res.status(200).json({
        EC: -1, // Mã lỗi (-1 có nghĩa là có lỗi)
        data: customers,
      });
    }
  }, ///////////////

  putUpdateAnCustomer: async (req, res) => {
    let { id, name, email, address } = req.body;

    let result = await updateAnCustomerService(id, name, email, address);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  }, ///////////////

  deleteAnCustomer: async (req, res) => {
    let { id } = req.body;

    let result = await deleteCustomerService(id);

    return res.status(200).json({
      EC: 0,
      data: result,
    });
  },
};
