import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Curso de Mecânica Automotiva Completo | Do Zero ao Profissional",
  description:
    "Aprenda mecânica automotiva do zero com aulas práticas e suporte completo. Torne-se um profissional e comece a ganhar dinheiro na área.",
  
  keywords: [
    "curso de mecânica",
    "mecânica automotiva",
    "curso online mecânica",
    "aprender mecânica do zero",
    "curso profissionalizante mecânica"
  ],

  authors: [{ name: "Amara Siqueira" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Curso de Mecânica Automotiva Completo",
    description:
      "Aprenda do zero e comece a trabalhar com mecânica automotiva.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/capaCurso.jpg",
        width: 1200,
        height: 630,
        alt: "Curso de Mecânica Automotiva",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Curso de Mecânica Automotiva",
    description: "Do zero ao profissional na mecânica automotiva.",
    images: ["/capa-curso.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#111111] min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}