const Button = (props) => {
  return (
    <button className="button-container" {...props}>
      {props.text}
    </button>
  );
};

export default Button;
