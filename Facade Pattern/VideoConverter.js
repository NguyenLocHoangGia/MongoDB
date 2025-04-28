// Đây là một số lớp phức tạp từ thư viện chuyển đổi video bên thứ 3.
// Chúng ta không kiểm soát được code gốc, nên không thể đơn giản hóa bên trong.

class VideoFile {
    constructor(filename) {
        this.filename = filename;
    }
}

class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {
    extract(file) {
        console.log(`Đang trích xuất codec từ file: ${file.filename}`);
        return "sourceCodec";
    }
}

class BitrateReader {
    static read(filename, codec) {
        console.log(`Đọc file ${filename} bằng codec ${codec}`);
        return "bufferData";
    }

    static convert(buffer, codec) {
        console.log(`Chuyển đổi buffer bằng codec mới`);
        return "convertedData";
    }
}

class AudioMixer {
    fix(result) {
        console.log(`Chỉnh sửa âm thanh`);
        return "finalResult";
    }
}

// Tạo một lớp Facade để ẩn sự phức tạp của thư viện video
class VideoConverter {
    convert(filename, format) {
        const file = new VideoFile(filename);
        const sourceCodec = new CodecFactory().extract(file);
        
        let destinationCodec;
        if (format === "mp4") {
            destinationCodec = new MPEG4CompressionCodec();
        } else {
            destinationCodec = new OggCompressionCodec();
        }
        
        const buffer = BitrateReader.read(filename, sourceCodec);
        let result = BitrateReader.convert(buffer, destinationCodec);
        result = new AudioMixer().fix(result);

        console.log(`Đã hoàn tất chuyển đổi file: ${filename} sang định dạng ${format}`);
        return new File(result);
    }
}

// Mô phỏng đối tượng File lưu file đã xử lý
class File {
    constructor(data) {
        this.data = data;
    }

    save() {
        console.log(`Đã lưu file mới thành công!`);
    }
}

// Lớp Ứng dụng
function main() {
    const converter = new VideoConverter();
    const mp4 = converter.convert("funny-cats-video.ogg", "mp4");
    mp4.save();
}

main();
