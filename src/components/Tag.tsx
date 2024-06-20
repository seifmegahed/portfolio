export default function Tag(props: { title: string }) {
  return (
    <div
      className="
    bg-slate-400 
    text-white 
    text-xs 
    px-2
    py-1
    rounded-full
    cursor-pointer
    hover:bg-slate-500 
    hover:scale-110
    hover:-translate-y-1
    pointer-events-auto
    transition-all
    duration-500
    ease-in-out"
    >
      {props.title}
    </div>
  );
}
