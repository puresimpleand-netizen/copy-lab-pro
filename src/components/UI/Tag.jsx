export function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "5px 12px",
        borderRadius: 20,
        border: `1.5px solid ${active ? "#C8401A" : "#DEDAD3"}`,
        background: active ? "#C8401A" : "transparent",
        color: active ? "#FFF" : "#7A7570",
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 12,
        fontWeight: 500,
        transition: "all 0.15s",
        lineHeight: 1,
      }}
    >
      {label}
    </button>
  );
}