const FormField = (props) => {
  const { error } = props;
  return (
    <div
      className="form-field-container "
      style={{
        display: "grid",
      }}
    >
      {props.children}

      {error && <div className="form-field-error">{error}</div>}
    </div>
  );
};

export default FormField;
