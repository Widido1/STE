import "./globals.css";

// 1. METADATOS BASE (Next.js 15+ / App Router)
export const metadata = {
  // Configuración del sitio
  metadataBase: new URL("https://www.steargentina.com.ar/"), // 🔁 CAMBIA POR TU DOMINIO REAL
  title: {
    default: "STE - Seguridad Electrónica en Santa Fe | Cámaras y Alarmas",
    template: "STE | Tu Empresa de Seguridad Electronica"
  },
  description: "Instalación de cámaras de seguridad, alarmas y monitoreo 24/7 en Santa Fe, Rosario y toda la provincia. ¡Protegemos tu negocio y hogar!",
  
  // Palabras clave (ya no pesan para Google, pero útiles para otros buscadores)
  keywords: "cámaras de seguridad Santa Fe, empresa de seguridad electrónica, monitoreo de alarmas, instalación de CCTV",
  
  // Autores y verificaciones
  authors: [{ name: "STE", url: "https://www.steargentina.com.ar/" }],
  creator: "STE",
  publisher: "STE",
  
  // Verificación para Google Search Console
  verification: {
    google: "TU_CODIGO_DE_VERIFICACION", // 🔁 REEMPLAZA
    // other: ["verification-id"], // Si usas Bing, Yandex, etc.
  },
  
  // Robots (indexar todo, seguir enlaces)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Canonical base (se genera automáticamente)
  alternates: {
    canonical: '/',
  },
  
  // Open Graph (para Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Seguridad Electrónica en Santa Fe | Cámaras y Alarmas",
    description: "Empresa líder en instalación de cámaras de seguridad, alarmas y monitoreo 24/7 en Santa Fe y Rosario. Presupuesto sin cargo.",
    url: "https://www.steargentina.com.ar/",
    siteName: "STE de Seguridad",
    images: [
      {
        url: "/images/ImagenSEO.jpg", // Debes crear esta imagen (1200x630px)
        width: 1200,
        height: 630,
        alt: "Seguridad electrónica en Santa Fe"
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "STE - Seguridad Electrónica | Cámaras y Alarmas",
    description: "Empresa de seguridad electrónica en Santa Fe. Cámaras, alarmas y monitoreo 24/7.",
    images: ["/images/ImagenSEO.jpg"],
    site: "@tucuentaTwitter", // Opcional
  },
  
  // Iconos del sitio (favicon, etc.)
  
};

// 2. COMPONENTE PRINCIPAL (con idioma argentino y datos estructurados)
export default function RootLayout({ children }) {
  return (
    <html lang="es-AR"><body>
      {children}
      
      {/* 3. DATOS ESTRUCTURADOS (JSON-LD para LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "STE - Seguridad Electrónica en Santa Fe",
            "image": "https://www.steargentina.com.ar/logo.png",
            "url": "https://www.steargentina.com.ar/",
            "telephone": "+543424220579",
            "email": "Info@steargentina.com.ar",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Calle Falsa 123",   // CAMBIAR
              "addressLocality": "Santa Fe",
              "addressRegion": "Santa Fe",
              "addressCountry": "AR"
            },
            "priceRange": "$$",
            "sameAs": [
              "https://www.instagram.com/ste_seguridad_electronica/",
              "https://www.facebook.com/steargentina/"
            ],
            "areaServed": {
              "@type": "State",
              "name": "Provincia de Santa Fe"
            },
            "serviceType": "Seguridad electrónica"
          })
        }}
      />
    </body></html>
  );
}