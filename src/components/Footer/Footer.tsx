import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex text-xs gap-4 justify-center underline underline-offset-2 self-stretch w-full text-center mb-4">
      <Link href={"/disclaimer"}>Disclaimer</Link>
      <Link href={"/cookie-policy"}>Cookie Policy</Link>
    </footer>
  );
};
