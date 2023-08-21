export default function Button({ children, classN, disabled }) {
  return (
    <button disabled={disabled} className={`custom__btn ${classN}`}>
      {children}
    </button>
  );
}
