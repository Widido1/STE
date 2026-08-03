import "./globals.css";

// Importación necesaria para Google Analytics (usando el paquete oficial de Next.js)
import { GoogleAnalytics } from '@next/third-parties/google'

// 🔽🆕 NUEVO: Importamos el componente Analytics de Vercel para medir rendimiento y visitas
import { Analytics } from '@vercel/analytics/react'

// 🔽 Importamos Script de Next.js para manejar scripts de terceros
import Script from 'next/script'

// 1. METADATOS BASE (Next.js 15+ / App Router)
export const metadata = {
  metadataBase: new URL("https://www.steargentina.com.ar/"), // 🔁 CAMBIA POR TU DOMINIO REAL
  title: {
    default: "STE - Seguridad Electrónica en Santa Fe | Cámaras y Alarmas",
    template: "STE | Tu Empresa de Seguridad Electronica"
  },
  description: "Instalación de cámaras de seguridad, alarmas y monitoreo 24/7 en Santa Fe, Rosario y toda la provincia. ¡Protegemos tu negocio y hogar!",
  keywords: "cámaras de seguridad Santa Fe, empresa de seguridad electrónica, monitoreo de alarmas, instalación de CCTV",
  authors: [{ name: "STE", url: "https://www.steargentina.com.ar/" }],
  creator: "STE",
  publisher: "STE",
  verification: {
    google: "TU_CODIGO_DE_VERIFICACION", // 🔁 REEMPLAZA
  },
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Seguridad Electrónica en Santa Fe | Cámaras y Alarmas",
    description: "Empresa líder en instalación de cámaras de seguridad, alarmas y monitoreo 24/7 en Santa Fe y Rosario. Presupuesto sin cargo.",
    url: "https://www.steargentina.com.ar/",
    siteName: "STE de Seguridad",
    images: [
      {
        url: "/images/ImagenSEO.jpg",
        width: 1200,
        height: 630,
        alt: "Seguridad electrónica en Santa Fe"
      }
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STE - Seguridad Electrónica | Cámaras y Alarmas",
    description: "Empresa de seguridad electrónica en Santa Fe. Cámaras, alarmas y monitoreo 24/7.",
    images: ["/images/ImagenSEO.jpg"],
    site: "@tucuentaTwitter",
  },
};

// 2. COMPONENTE PRINCIPAL
export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body>
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
                "streetAddress": "Calle Falsa 123",
                "addressLocality": "Santa Fe",
                "addressRegion": "Santa Fe",
                "addressCountry": "AR"
              },
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/ste_seguridad_electronica/",
                "https://www.facebook.com/steargentina.com.ar/"
              ],
              "areaServed": {
                "@type": "State",
                "name": "Provincia de Santa Fe"
              },
              "serviceType": "Seguridad electrónica"
            })
          }}
        />

        {/* 🔽 Google Analytics 4 (carga automática de gtag.js) */}
        <GoogleAnalytics gaId="G-B1PFN4DC2R" />

        {/* 🔽 Google Tag Manager (corregido con Script de Next.js) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5KPMH58');
            `
          }}
        />

        {/* 🔽 (Opcional) Noscript para GTM – se coloca dentro del body */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KPMH58"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `
          }}
        />

        {/* 🔽 Vercel Analytics (mide Core Web Vitals y visitas) */}
        <Analytics mode="auto" />
      </body>
    </html>
  );
}


/*
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KPMH58');</script>

<!-- End Google Tag Manager -->
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KPMH58"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
*/