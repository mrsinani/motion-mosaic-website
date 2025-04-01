import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_xxxxxxx";
const EMAILJS_TEMPLATE_ID = "template_xxxxxxx";
const EMAILJS_PUBLIC_KEY = "xxxxxxxxxxxxxxxxxxxx";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // First attempt: Use EmailJS service
      if (EMAILJS_SERVICE_ID !== "service_xxxxxxx") {
        // Only attempt EmailJS if credentials are provided
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current as HTMLFormElement,
          EMAILJS_PUBLIC_KEY
        );

        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        // Fallback to mailto link if EmailJS credentials aren't set
        const recipient = "info@motioncraft.com"; // Update to your actual email
        const mailtoSubject = encodeURIComponent(formData.subject);
        const mailtoBody = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );

        const mailtoLink = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;
        window.location.href = mailtoLink;

        toast({
          title: "Opening email client",
          description:
            "Please complete sending the message in your email application.",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-studio-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-lg mb-6">
            Get In <span className="text-studio-amber">Touch</span>
          </h2>
          <p className="text-xl text-studio-white/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today to discuss your
            next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-studio-black rounded-lg p-8 border border-studio-gray/20">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-studio-white/70 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-studio-white/70 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-studio-white/70 mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white ${
                      errors.subject ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-studio-white/70 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    rows={5}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-studio-amber text-studio-black hover:bg-studio-gold"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      SENDING...
                    </>
                  ) : (
                    "SEND MESSAGE"
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-studio-white/70">info@motioncraft.com</p>
                  <p className="text-studio-white/70">
                    projects@motioncraft.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <p className="text-studio-white/70">+1 (555) 123-4567</p>
                  <p className="text-studio-white/70">+1 (555) 765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-studio-white/70">
                    123 Cinema Street
                    <br />
                    Los Angeles, CA 90028
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.4557903780455!2d-118.32736372392506!3d34.092809119700326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bf20e4c82873%3A0x14015754d926dadb!2sParamount%20Pictures!5e0!3m2!1sen!2sus!4v1680040344955!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
