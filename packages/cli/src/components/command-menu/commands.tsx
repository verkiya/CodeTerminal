import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a fresh conversation",
    value: "/new",
  },
  {
    name: "agents",
    description: "Switch between AI agents",
    value: "/agents",
  },
  {
    name: "models",
    description: "Choose the AI model",
    value: "/models",
  },
  {
    name: "sessions",
    description: "View previous conversations",
    value: "/sessions",
  },
  {
    name: "theme",
    description: "Change the application theme",
    value: "/theme",
  },
  {
    name: "login",
    description: "Sign in to your account",
    value: "/login",
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout",
  },
  {
    name: "upgrade",
    description: "Upgrade your plan or credits",
    value: "/upgrade",
  },
  {
    name: "usage",
    description: "View billing and usage details",
    value: "/usage",
  },
  {
    name: "exit",
    description: "Close the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
