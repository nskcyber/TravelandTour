import { contactInfo } from "@/data/siteData";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20AfriGlobal,%20I%20want%20to%20enquire%20about%20studying%20abroad`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg hover:bg-green-600"
    >
      💬 Chat with us
    </a>
  );
}
