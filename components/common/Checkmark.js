// components/common/Checkmark.js
export default function Checkmark({ visible }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4dbabf"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        strokeDasharray: 36,
        strokeDashoffset: visible ? 0 : 36,
        transition: 'stroke-dashoffset 0.4s ease',
      }}
    >
      {/* Плавная S-образная галочка */}
      <path d="M5 13 Q9 18 12 15 Q16 10 22 5" />
    </svg>
  );
}
