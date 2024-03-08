import "./error.css";
import { Alert, Space } from "antd";

const Error = () => {
  return (
    <Space direction="vertical" className="error">
      <Alert
        className="error-alert"
        message="Usuário não encontrado"
        type="error"
        showIcon
      />
    </Space>
  );
};

export default Error;
