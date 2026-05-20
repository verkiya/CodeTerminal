import { TextAttributes } from "@opentui/core";

export function StatusBar() {
  return (
    <box flexDirection="row" gap={1}>
      <text fg="#C4B5FD">Build</text>

      <text
        fg="#6B7280"
        attributes={TextAttributes.DIM}
      >
        ❯
      </text>

      <text fg="#22D3EE">opus-4.6</text>
    </box>
  );
}
