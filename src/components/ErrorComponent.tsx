

export default function ErrorComponent(props: { message: string }) {
  return (
    <div className="flex justify-center items-center h-full w-full text-red-500 font-bold bg-white/50">
      {props.message}
    </div>
  );
}

/*
 */
