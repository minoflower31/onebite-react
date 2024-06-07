const Button = ({ text, color, children }) => {
  console.log(color);
  return (
    <button
      onClick={(event) => {
        console.log(event);
        console.log(text);
      }}
      style={{ color: color }}
    >
      {text} {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
