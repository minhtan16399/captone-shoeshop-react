import axios from "axios";
import { history } from '../App';

export const USER_LOGIN = 'userLogin';
export const TOKEN = 'accessToken';

//Sử dụng axios interceptor (Cấu hình chung cho tất cả request và response của các api)
export const http = axios.create({
    baseURL: 'https://shop.cyberlearn.vn/api', //Domain
    timeout: 30000 //thời gian tối đa của 1 request có thể đợi
});

//cấu hình cho tất cả request(dữ liệu gửi đi)
http.interceptors.request.use((config) => {
    //Xử lý config: object request gửi đi 
    config.headers = {
        ...config.headers,
        'Authorization': `Bearer ${localStorage.getItem(TOKEN)}`,
        'acb': 'abc'
    }
    return config
}, err => {
    return Promise.reject(err);
});

/* 
    status code
    200: request thành công về server và được trả response(kết quả) về.
    201: Dữ liệu request thành công và đã được khởi tạo (created)
    400: Bad request (Đường dẫn không tồn tại)
    401: Unauthorize (Không có quyền truy cập vào api này - token không hợp lệ)
    403: Forbiden (Token chưa đủ quyền truy cập vào api này)
    404: Not found (Không tìm thấy dữ liệu) (Thường truyền sai id của get detail)
    500: Error in server (Xảy ra tại server)
    + Kiểm tra lại
    FE: Kiểm tra dữ liệu có đúng format backend yêu không và giá trị có chuẩn như backend qui định
    BE: kiểm tra lại tất cả logic code trên dữ liệu front đưa ra 
*/
//cấu hình cho tất cả response(dữ liệu nhận về từ backend)
http.interceptors.response.use((res) => {
    return res
}, err => {
    // console.log({err})
    // Xử lý khi lỗi 
    if (err.response?.status === 404) {

    } else if (err.response?.status === 400) {

    } else if (err.response?.status === 401) {
        alert('Đăng nhập để vào trang này!');
        history.push('/login');
    } else if (err.response?.status === 403) {

    }
    return Promise.reject(err);
});