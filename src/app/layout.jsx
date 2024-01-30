import "./globals.css";

export const metadata = {
  title: "Lancashire Nursing",
  description: "Do you want to be a nurse? We can help you get there!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
