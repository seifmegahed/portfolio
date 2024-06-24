export default function SectionSubtitle({ subtitle }: { subtitle: string }) {
  return (
    <div className="text-xl font-normal flex gap-1">
      <p>{subtitle}</p>
    </div>
  );
}