import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import store from "../Store/configStore";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = "http://51.89.109.247:8000";

function StudentPanel() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={fa_IR} direction="rtl">
        <App />
      </ConfigProvider>
    </Provider>
  );
}

export default StudentPanel;
