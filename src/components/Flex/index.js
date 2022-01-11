const Flex = ({ children, alignItems, justifyContent, flexDirection }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: flexDirection,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
