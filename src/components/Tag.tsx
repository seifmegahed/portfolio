export default function Tag(props: { title: string }) {
  return (
    <div className="bg-slate-400 px-2 py-1 rounded-full text-xs text-white hover:scale-110 hover:-translate-y-1 hover:translate-y- cursor-pointer">
      {props.title}
    </div>
  );
}
