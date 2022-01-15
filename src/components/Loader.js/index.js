import { Spin } from "antd";

const Loader = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large"></Spin>
    </div>
  );
};

export default Loader;
