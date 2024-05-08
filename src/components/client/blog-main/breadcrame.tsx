export default function BreadCrame({ list }: { list: any }) {
  return list.map((v: any, i: number) => (
    <div key={i} className={`${list.length == i + 1 && "font-bold"}`}>
      {v} &nbsp; {list.length != i + 1 && ">"}
    </div>
  ));
}
