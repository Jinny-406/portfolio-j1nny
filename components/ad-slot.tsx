"use client"

interface AdSlotProps {
  id: string
  label?: string
  width?: string
  height?: string
  className?: string
}

export function AdSlot({ id, label = "Advertisement", width = "100%", height = "90px", className = "" }: AdSlotProps) {
  return (
    <div
      id={id}
      className={`ad-slot flex items-center justify-center border border-dashed ${className}`}
      style={{
        width,
        minHeight: height,
        borderColor: "rgba(99,102,241,0.3)",
        background: "rgba(99,102,241,0.04)",
      }}
    >
      {/* =====================================================
          PASTE YOUR AD CODE HERE — SLOT: {id}
          Replace this entire <div> block with your ad script
          ===================================================== */}
      <span style={{ color: "rgba(99,102,241,0.4)", fontSize: "11px", fontFamily: "monospace" }}>
        [ AD SLOT: {id} — {label} ]
      </span>
    </div>
  )
}
