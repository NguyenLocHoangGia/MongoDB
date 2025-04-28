// Publisher: Quản lý đăng ký (subscribe), hủy (unsubscribe) và thông báo (notify)
class EventManager {
    constructor() {
      this.listeners = {}; // lưu eventType -> array of listeners
    }
  
    subscribe(eventType, listener) {
      if (!this.listeners[eventType]) {
        this.listeners[eventType] = [];
      }
      this.listeners[eventType].push(listener);
    }
  
    unsubscribe(eventType, listener) {
      if (!this.listeners[eventType]) return;
      this.listeners[eventType] = this.listeners[eventType].filter(l => l !== listener);
    }
  
    notify(eventType, data) {
      if (!this.listeners[eventType]) return;
      this.listeners[eventType].forEach(listener => listener.update(data));
    }
  }
  
  // Concrete Publisher: Thực hiện nghiệp vụ và phát sự kiện
  class Editor {
    constructor() {
      this.events = new EventManager();
      this.file = null;
    }
  
    openFile(path) {
      this.file = { name: path };
      console.log(`Opening file: ${this.file.name}`);
      this.events.notify('open', this.file.name);
    }
  
    saveFile() {
      if (!this.file) return;
      console.log(`Saving file: ${this.file.name}`);
      this.events.notify('save', this.file.name);
    }
  }
  
  // Interface EventListener (JavaScript không có interface nên chỉ cần chuẩn hóa bằng method `update`)
  
  // Concrete Subscriber 1
  class LoggingListener {
    constructor(logFilename, message) {
      this.logFilename = logFilename;
      this.message = message;
    }
  
    update(filename) {
      console.log(`[Logging to ${this.logFilename}]: ${this.message.replace('%s', filename)}`);
      // Trong thực tế, ghi file thay vì console.log
    }
  }
  
  // Concrete Subscriber 2
  class EmailAlertsListener {
    constructor(email, message) {
      this.email = email;
      this.message = message;
    }
  
    update(filename) {
      console.log(`[Sending email to ${this.email}]: ${this.message.replace('%s', filename)}`);
      // Thực tế sẽ gọi API gửi email
    }
  }
  
  // Client: Cấu hình các publisher và subscriber
  class Application {
    config() {
      const editor = new Editor();
  
      const logger = new LoggingListener(
        "/path/to/log.txt",
        "Someone has opened the file: %s"
      );
      editor.events.subscribe("open", logger);
  
      const emailAlerts = new EmailAlertsListener(
        "admin@example.com",
        "Someone has changed the file: %s"
      );
      editor.events.subscribe("save", emailAlerts);
  
      // Demo
      editor.openFile("document.txt");
      editor.saveFile();
    }
  }
  
  // Run
  const app = new Application();
  app.config();
  