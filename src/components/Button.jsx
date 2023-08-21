export default function Button({
  children,
  classN,
  disabled = false,
  type,
  onClick,
}) {
  return (
    <button
      disabled={disabled}
      className={`custom__btn ${classN}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
