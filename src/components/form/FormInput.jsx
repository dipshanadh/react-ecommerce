const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={defaultValue}
        className="input input-bordered"
      />
    </div>
  );
};

export default FormInput;
