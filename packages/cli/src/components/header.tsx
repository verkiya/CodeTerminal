import { useTheme } from "../providers/theme";

export function Header() {
  const { colors } = useTheme();
  return (
    <box
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={1}
    >
      <box gap={1} alignItems="center">
        <ascii-font font="tiny" text="Code" color={colors.brandCode} />
        <ascii-font font="tiny" text="Terminal" color={colors.brandTerminal} />
      </box>
      <text>Think • Build • Deploy</text>
    </box>
  );
}
