"use client";
import { useSelector } from "react-redux";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import "./globals.css"; // keep CSS here

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </Provider>
  );
}

function ThemeWrapper({ children }) {
  const theme = useSelector((state) => state.settings.theme);

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
