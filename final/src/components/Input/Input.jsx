export default function Input({ type = `text`, className, placeholder, onChange, onBlur, value, ref }) {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
    />
  );
}
