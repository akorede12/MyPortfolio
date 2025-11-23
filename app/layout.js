// import "./globals.css";
// import { ThemeProvider } from "./ThemeProvider";

// export const metadata = {
//   title: 'My Portfolio',
//   description: 'My personal portfolio website',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//        <body>
//         <ThemeProvider attribute="class" defaultTheme="light">
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// app/layout.js
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";
import ContainerBlock from "@components/ContainerBlock";

export const metadata = {
  title: 'Aboaba Akorede - Blockchain Developer, Frontend Engineer, AI Engineer',
  description: 'Portfolio website of Aboaba Akorede - Blockchain Developer, Frontend Engineer, and AI Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ContainerBlock>
            {children}
          </ContainerBlock>
        </ThemeProvider>
      </body>
    </html>
  )
}