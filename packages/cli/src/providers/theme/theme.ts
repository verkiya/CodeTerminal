export type ThemeColors = {
  primary: string;
  planMode: string;
  selection: string;
  thinking: string;
  success: string;
  error: string;
  info: string;
  background: string;
  surface: string;
  dialogSurface: string;
  thinkingBorder: string;
  dimSeparator: string;
};

export type Theme = {
  name: string;
  colors: ThemeColors;
};

export const THEMES: Theme[] = [
  {
    name: "CodeTerminal",
    colors: {
      primary: "#C4B5FD",
      planMode: "#A78BFA",
      selection: "#C4B5FD",
      thinking: "#22D3EE",
      success: "#10B981",
      error: "#FB7185",
      info: "#22D3EE",
      background: "#0D0D12",
      surface: "#14141C",
      dialogSurface: "#1A1A24",
      thinkingBorder: "#22D3EE",
      dimSeparator: "#9CA3AF",
    },
  },

  {
    name: "Dracula",
    colors: {
      primary: "#BD93F9",
      planMode: "#FF79C6",
      selection: "#44475A",
      thinking: "#8BE9FD",
      success: "#50FA7B",
      error: "#FF5555",
      info: "#8BE9FD",
      background: "#282A36",
      surface: "#343746",
      dialogSurface: "#3B3F51",
      thinkingBorder: "#8BE9FD",
      dimSeparator: "#6272A4",
    },
  },

  {
    name: "Tokyo Night",
    colors: {
      primary: "#7AA2F7",
      planMode: "#BB9AF7",
      selection: "#33467C",
      thinking: "#7DCFFF",
      success: "#9ECE6A",
      error: "#F7768E",
      info: "#7DCFFF",
      background: "#1A1B26",
      surface: "#24283B",
      dialogSurface: "#2A2E42",
      thinkingBorder: "#7DCFFF",
      dimSeparator: "#565F89",
    },
  },

  {
    name: "Catppuccin Mocha",
    colors: {
      primary: "#CBA6F7",
      planMode: "#F5C2E7",
      selection: "#585B70",
      thinking: "#89DCEB",
      success: "#A6E3A1",
      error: "#F38BA8",
      info: "#89DCEB",
      background: "#1E1E2E",
      surface: "#313244",
      dialogSurface: "#45475A",
      thinkingBorder: "#89DCEB",
      dimSeparator: "#7F849C",
    },
  },

  {
    name: "Nord",
    colors: {
      primary: "#81A1C1",
      planMode: "#B48EAD",
      selection: "#4C566A",
      thinking: "#88C0D0",
      success: "#A3BE8C",
      error: "#BF616A",
      info: "#88C0D0",
      background: "#2E3440",
      surface: "#3B4252",
      dialogSurface: "#434C5E",
      thinkingBorder: "#88C0D0",
      dimSeparator: "#616E88",
    },
  },

  {
    name: "Gruvbox Dark",
    colors: {
      primary: "#D79921",
      planMode: "#B16286",
      selection: "#504945",
      thinking: "#458588",
      success: "#98971A",
      error: "#CC241D",
      info: "#458588",
      background: "#282828",
      surface: "#3C3836",
      dialogSurface: "#504945",
      thinkingBorder: "#458588",
      dimSeparator: "#928374",
    },
  },

  {
    name: "Solarized Dark",
    colors: {
      primary: "#268BD2",
      planMode: "#D33682",
      selection: "#073642",
      thinking: "#2AA198",
      success: "#859900",
      error: "#DC322F",
      info: "#2AA198",
      background: "#002B36",
      surface: "#073642",
      dialogSurface: "#0A3A46",
      thinkingBorder: "#2AA198",
      dimSeparator: "#586E75",
    },
  },

  {
    name: "One Dark",
    colors: {
      primary: "#61AFEF",
      planMode: "#C678DD",
      selection: "#3E4451",
      thinking: "#56B6C2",
      success: "#98C379",
      error: "#E06C75",
      info: "#56B6C2",
      background: "#282C34",
      surface: "#353B45",
      dialogSurface: "#3E4451",
      thinkingBorder: "#56B6C2",
      dimSeparator: "#5C6370",
    },
  },

  {
    name: "GitHub Dark",
    colors: {
      primary: "#58A6FF",
      planMode: "#BC8CFF",
      selection: "#30363D",
      thinking: "#79C0FF",
      success: "#3FB950",
      error: "#F85149",
      info: "#79C0FF",
      background: "#0D1117",
      surface: "#161B22",
      dialogSurface: "#21262D",
      thinkingBorder: "#79C0FF",
      dimSeparator: "#8B949E",
    },
  },

  {
    name: "Synthwave",
    colors: {
      primary: "#FF7EDB",
      planMode: "#FF5C8D",
      selection: "#3A2E5E",
      thinking: "#00F5FF",
      success: "#72F1B8",
      error: "#FF5C8D",
      info: "#00F5FF",
      background: "#241B2F",
      surface: "#2D2240",
      dialogSurface: "#382B50",
      thinkingBorder: "#00F5FF",
      dimSeparator: "#7A6F9B",
    },
  },

  {
    name: "Matrix",
    colors: {
      primary: "#00FF41",
      planMode: "#00CC33",
      selection: "#003B00",
      thinking: "#00FF41",
      success: "#00FF41",
      error: "#FF3131",
      info: "#00FF41",
      background: "#000000",
      surface: "#061006",
      dialogSurface: "#0A160A",
      thinkingBorder: "#00FF41",
      dimSeparator: "#3A5F3A",
    },
  },

  {
    name: "Rose Pine",
    colors: {
      primary: "#C4A7E7",
      planMode: "#EBBCBA",
      selection: "#403D52",
      thinking: "#9CCFD8",
      success: "#31748F",
      error: "#EB6F92",
      info: "#9CCFD8",
      background: "#191724",
      surface: "#1F1D2E",
      dialogSurface: "#26233A",
      thinkingBorder: "#9CCFD8",
      dimSeparator: "#6E6A86",
    },
  },

  {
    name: "Everforest",
    colors: {
      primary: "#7FBBB3",
      planMode: "#D699B6",
      selection: "#3A4A42",
      thinking: "#83C092",
      success: "#A7C080",
      error: "#E67E80",
      info: "#83C092",
      background: "#272E33",
      surface: "#2E383C",
      dialogSurface: "#374145",
      thinkingBorder: "#83C092",
      dimSeparator: "#859289",
    },
  },

  {
    name: "Ayu Dark",
    colors: {
      primary: "#59C2FF",
      planMode: "#D2A6FF",
      selection: "#273747",
      thinking: "#95E6CB",
      success: "#AAD94C",
      error: "#F07178",
      info: "#95E6CB",
      background: "#0B0E14",
      surface: "#11151C",
      dialogSurface: "#1A1F29",
      thinkingBorder: "#95E6CB",
      dimSeparator: "#6C7A89",
    },
  },

  {
    name: "Monokai",
    colors: {
      primary: "#FFD866",
      planMode: "#AB9DF2",
      selection: "#49483E",
      thinking: "#78DCE8",
      success: "#A9DC76",
      error: "#FF6188",
      info: "#78DCE8",
      background: "#272822",
      surface: "#34352E",
      dialogSurface: "#3E3D32",
      thinkingBorder: "#78DCE8",
      dimSeparator: "#75715E",
    },
  },

  {
    name: "Night Owl",
    colors: {
      primary: "#82AAFF",
      planMode: "#C792EA",
      selection: "#2C3043",
      thinking: "#7FDBCA",
      success: "#22DA6E",
      error: "#EF5350",
      info: "#7FDBCA",
      background: "#011627",
      surface: "#0B1E2D",
      dialogSurface: "#122738",
      thinkingBorder: "#7FDBCA",
      dimSeparator: "#637777",
    },
  },

  {
    name: "Cyberpunk",
    colors: {
      primary: "#FF00FF",
      planMode: "#FF6EC7",
      selection: "#3B1F5C",
      thinking: "#00FFFF",
      success: "#39FF14",
      error: "#FF3131",
      info: "#00FFFF",
      background: "#0A0A0F",
      surface: "#151520",
      dialogSurface: "#1F1F2E",
      thinkingBorder: "#00FFFF",
      dimSeparator: "#7A7A99",
    },
  },
];
export const DEFAULT_THEME = THEMES.find((t) => t.name === "CodeTerminal")!;
