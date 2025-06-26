// components/ThemeToggle.jsx
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Button from "./Button";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <Button variant="secondary" onClick={toggle} aria-label="Toggle theme">
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  );
}
