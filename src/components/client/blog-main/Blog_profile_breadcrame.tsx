export default function BreadCrame({ list }: { list: any }) {
  return (
    <div className={`flex items-center gap-4`}>
      {list.map((v: any, i: number) => (
        <div
          key={i}
          className={`flex items-center ${list.length == i + 1 && "font-bold"}`}
        >
          {v} &nbsp; {list.length != i + 1 && <SVGIcon />}
        </div>
      ))}
    </div>
  );
}

const SVGIcon = () => (
  <svg
    width="13"
    height="14"
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.875 10.5L8.125 7L4.875 3.5"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
