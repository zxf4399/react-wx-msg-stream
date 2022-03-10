import "@/styles/base.css";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import ReactDOM from "react-dom";
import App from "./App";

dayjs.locale("zh-cn");

ReactDOM.render(<App />, document.getElementById("root"));
