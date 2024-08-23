import React from 'react';
import Warning from './Warning';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Warning text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." type="warning" />
      <Warning text="Đây là một thông báo thành công!" type="success" />
      <Warning text="Đây là một thông báo lỗi!" type="danger" />
    </div>
  );
}

export default App;
