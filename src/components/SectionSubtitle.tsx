export default function SectionSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <div className="w-full">
      <h1 className="text-xl mb-5 text-slate-300">{subtitle}</h1>
    </div>
  );
}
