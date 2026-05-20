import { useTheme } from "../../providers/theme";
import { useCallback, useEffect, useRef } from "react";
import { TextAttributes } from "@opentui/core";
import { useDialog } from "../../providers/dialog";
import { DialogSearchList } from "../dialog-search-list";
import { THEMES } from "../../providers/theme/theme";
import type { Theme } from "../../providers/theme/theme";

const THEME_PREVIEW_PRIORITY: Record<string, number> = {
  CodeTerminal: 0,
  Cyberpunk: 1,
  Synthwave: 2,
  Matrix: 3,
  "Catppuccin Mocha": 4,
  "Tokyo Night": 5,
  Monokai: 6,
  Dracula: 7,
  "GitHub Dark": 8,
  "GitHub Light": 9,
};

export const ThemeDialogContent = () => {
  const dialog = useDialog();
  const { setTheme, currentTheme } = useTheme();
  const originalThemeRef = useRef(currentTheme);
  const confirmedRef = useRef(false);
  //Revert to original theme if the user dismisses without confirming
  useEffect(() => {
    return () => {
      if (!confirmedRef.current) {
        setTheme(originalThemeRef.current);
      }
    };
  }, [setTheme]);

  const handleSelect = useCallback(
    (theme: Theme) => {
      confirmedRef.current = true;
      setTheme(theme);
      dialog.close();
    },
    [setTheme, dialog],
  );
  const handleHighlight = useCallback(
    (theme: Theme) => {
      setTheme(theme);
    },
    [setTheme],
  );

  const previewThemes = [...THEMES].sort((left, right) => {
    const leftPriority = THEME_PREVIEW_PRIORITY[left.name] ?? 100;
    const rightPriority = THEME_PREVIEW_PRIORITY[right.name] ?? 100;
    if (leftPriority !== rightPriority) {
      return leftPriority - rightPriority;
    }
    return left.name.localeCompare(right.name);
  });

  return (
    <DialogSearchList
      items={previewThemes}
      onSelect={handleSelect}
      onHighlight={handleHighlight}
      filterFn={(t, query) =>
        t.name.toLowerCase().includes(query.toLowerCase())
      }
      renderItem={(theme, isSelected) => (
        <text
          selectable={false}
          fg={
            isSelected
              ? theme.colors.pickerSelectedForeground
              : theme.colors.pickerForeground
          }
          attributes={isSelected ? TextAttributes.BOLD : undefined}
        >
          {theme.name === originalThemeRef.current.name
            ? "\u0020\u2022\u0020"
            : "\u0020\u0020\u0020"}
          {theme.name}
        </text>
      )}
      getKey={(t) => t.name}
      placeholder="Search themes"
      emptyText="No matching themes"
    />
  );
};
