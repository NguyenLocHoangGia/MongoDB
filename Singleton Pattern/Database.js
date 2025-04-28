class Database {
    // Biến static dùng để lưu trữ instance duy nhất
    static instance = null;

    // Hàm khởi tạo private (bị kiểm soát, không cho gọi trực tiếp bằng new)
    constructor() {
        if (Database.instance) {
            throw new Error("Hãy sử dụng Database.getInstance() thay vì new.");
        }
        console.log("Đang kết nối tới cơ sở dữ liệu...");
    }

    // Phương thức static để lấy hoặc tạo instance duy nhất
    static getInstance() {
        if (Database.instance === null) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    // Phương thức thực thi truy vấn cơ sở dữ liệu
    query(sql) {
        console.log(`Thực thi truy vấn: ${sql}`);
    }
}

// Hàm mô phỏng chương trình chính
function main() {
    const foo = Database.getInstance();
    foo.query("SELECT * FROM users");

    const bar = Database.getInstance();
    bar.query("SELECT * FROM products");

    console.log(foo === bar); // true -> cả foo và bar đều là cùng một instance
}

main();
