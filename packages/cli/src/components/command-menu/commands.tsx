import { ThemeDialogContent } from "../dialogs";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a fresh conversation",
    value: "/new",
    action: (ctx) => {
      ctx.toast.show({
        message: "Starting new conversation...",
      });
    },
  },
  {
    name: "agents",
    description: "Switch between AI agents",
    value: "/agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Mode",
        children: <text>Agent Selection Coming Soon...</text>,
      });
    },
  },
  {
    name: "models",
    description: "Choose the AI model",
    value: "/models",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Model",
        children: <text>Model Selection Coming Soon...</text>,
      });
    },
  },
  {
    name: "sessions",
    description: "View previous conversations",
    value: "/sessions",
    action: (ctx) => {
      ctx.toast.show({
        message: "Loading conversation history...",
      });
    },
  },
  {
    name: "theme",
    description: "Change the application theme",
    value: "/theme",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Theme",
        children: <ThemeDialogContent />,
      });
    },
  },
  {
    name: "login",
    description: "Sign in to your account",
    value: "/login",
    action: (ctx) => {
      ctx.toast.show({
        message: "Redirecting to sign in...",
      });
    },
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.show({
        message: "Signing out...",
      });
    },
  },
  {
    name: "upgrade",
    description: "Upgrade your plan or credits",
    value: "/upgrade",
    action: (ctx) => {
      ctx.toast.show({
        message: "Opening upgrade options...",
      });
    },
  },
  {
    name: "usage",
    description: "View billing and usage details",
    value: "/usage",
    action: (ctx) => {
      ctx.toast.show({
        message: "Opening billing and usage...",
      });
    },
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
