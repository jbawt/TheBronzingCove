export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const formData = JSON.parse(event.body);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // Map subject values to readable text
    const subjectMap = {
      booking: "Booking Inquiry",
      services: "Services Question",
      pricing: "Pricing Information",
      other: "Other",
    };

    const subjectText = subjectMap[formData.subject] || formData.subject;

    // Send email using Netlify Email Integration
    const emailResponse = await fetch(
      `${process.env.URL}/.netlify/functions/emails/contact`,
      {
        headers: {
          "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
        },
        method: "POST",
        body: JSON.stringify({
          from: formData.email,
          to: "info@thebronzingcove.com",
          subject: `Contact Form: ${subjectText} - ${formData.name}`,
          parameters: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "",
            subject: subjectText,
            message: formData.message,
          },
        }),
      }
    );

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Email API error:", errorText);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Failed to send email" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
