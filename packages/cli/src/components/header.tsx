export function Header() {
  return (
    <box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <box gap={1} alignItems="center">
        <ascii-font font="tiny" text="Code" color="#C4B5FD" />
        <ascii-font font="tiny" text="Terminal" color="#22D3EE" />
      </box>
      <text>Think • Build • Deploy</text>
    </box>
  );
}
