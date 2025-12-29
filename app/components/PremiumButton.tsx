export default function PremiumButton({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        bg-green-500 hover:bg-green-400
        text-black px-8 py-3 rounded-full
        font-semibold
        shadow-[0_0_30px_rgba(34,197,94,0.45)]
        transition-transform duration-200
        hover:scale-105
      "
    >
      {text}
    </a>
  );
}
