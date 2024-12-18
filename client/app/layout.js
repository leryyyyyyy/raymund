import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "@next/font/google";
import { Raleway } from "next/font/google";
import { Lato } from "next/font/google";
import { Inter } from "next/font/google";
import ChatbotCircle from "./components/circleSide";
import ClientLoading from "./components/ClientLoading";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want to use
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
});
export const metadata = {
  title: "Raymund Blondes Appliance Repair",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={roboto.className} */}
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600&family=Raleway:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>
        <ClientLoading>{children}</ClientLoading>
        <ChatbotCircle />
      </body>
    </html>
  );
}
