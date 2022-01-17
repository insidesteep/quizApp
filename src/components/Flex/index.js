const Flex = ({
  children,
  alignItems,
  justifyContent,
  flexDirection,
  style,
  className,
}) => {
  return (
    <div
      className={` ${className}`}
      style={{
        display: "flex",
        alignItems: alignItems,
        justifyContent: justifyContent,
        flexDirection: flexDirection,
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Flex;
