"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data) => {
  const { email, text, turnstileToken } = data;

  // 1. Verificar el token con Cloudflare Turnstile
  const formData = new FormData();
  formData.append("secret", process.env.TURNSTILE_SECRET_KEY);
  formData.append("response", turnstileToken);
  // Opcional: puedes enviar la IP del usuario para mayor precisión
  // formData.append("remoteip", ip);

  const verificationUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const verificationRes = await fetch(verificationUrl, {
    method: "POST",
    body: formData,
  });
  const verificationOutcome = await verificationRes.json();

  if (!verificationOutcome.success) {
    console.error("Error de Turnstile:", verificationOutcome);
    throw new Error("Verificación de seguridad fallida. Intente de nuevo.");
  }

  // 2. (Opcional pero recomendado) Evitar ataques de replay:
  //    Guarda el token en una base de datos o caché (ej. Redis) con expiración de 2 minutos
  //    y verifica que no se haya usado antes. Si no implementas esto, alguien podría reutilizar el token.
  //    Para empezar, puedes omitirlo, pero en producción es importante.

  // 3. Enviar el correo
  await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL,
    subject: "NUEVA SOLICITUD DE CONTACTO",
    text: text,
    replyTo: process.env.EMAIL,
  });

  return { success: true };
};

/*import { createTransporter } from '@/app/libs/email-config';

export const sendEmail = async (data) => {
  try {
    const transporter = createTransporter();
    
    await transporter.sendMail({
      from: `"Boutique del Cervecero" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Email del vendedor
      subject: '🛒 NUEVA COMPRA EXITOSA',
      text: data.text,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>¡Nueva compra exitosa!</h2>
          <pre style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${data.text}
          </pre>
        </div>
      `,
      replyTo: process.env.SMTP_USER,
    });

    return { success: true };
  } catch (error) {
    console.error('Error en sendEmail:', error);
    return { success: false, error: error.message };
  }
};
*/