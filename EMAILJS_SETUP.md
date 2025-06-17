# Configuración de EmailJS

Para que el formulario de contacto funcione correctamente, necesitas configurar EmailJS.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a: https://www.emailjs.com/
- Crea una cuenta gratuita

### 2. Configurar un servicio de email
- En el dashboard, ve a "Email Services"
- Agrega tu servicio de email (Gmail, Outlook, etc.)
- Copia el **Service ID**

### 3. Crear un template de email
- Ve a "Email Templates"
- Crea un nuevo template con estas variables:
  ```
  {{from_name}} - Nombre del remitente
  {{from_email}} - Email del remitente
  {{company}} - Empresa
  {{phone}} - Teléfono
  {{service}} - Servicio de interés
  {{message}} - Mensaje
  {{to_email}} - Emails de destino
  ```
- Copia el **Template ID**

### 4. Obtener tu Public Key
- Ve a "Integration" → "Browser"
- Copia tu **Public Key**

### 5. Configurar las variables de entorno
Crea un archivo `.env` en la raíz del proyecto con:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id  
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### 6. Actualizar el HTML
En `index.html`, reemplaza `YOUR_PUBLIC_KEY` con tu clave pública real.

## Ejemplo de template de EmailJS:

**Subject:** Nueva solicitud de asesoría - {{from_name}}

**Body:**
```
Nueva solicitud de asesoría desde VOU.digital

Datos del contacto:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Empresa: {{company}}
- Teléfono: {{phone}}
- Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este email fue enviado desde el formulario de contacto de VOU.digital
```

**To Email:** alejandro@agenciavou.cl,catalina.amenabar@agenciavou.cl,mariajose.valdes@agenciavou.cl 