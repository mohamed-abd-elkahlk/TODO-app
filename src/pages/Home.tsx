const totdos = [
  {
    id: 1,
    titile: "clean the house ",
    discription: "Sweep, mop, dust, vacuum",
    due_date: "2023-03-09T00:00:00.000+00:00",
    status: "IN_PROGRESS",
  },
  {
    id: 2,
    titile: "by somthing",
    discription: "wow",
    due_date: "2023-03-09T00:00:00.000+00:00",
    status: "TODO",
  },
];
export default function Home() {
  return (
    <div className="bg-gray-500 rounded-xl last:">
      <form action="" className="flex ">
        <div className="p-5 flex gap-4">
          <label htmlFor="todo" className="my-auto">
            add your todo{" "}
          </label>
          <input
            type="text"
            name="todo"
            placeholder="add to do"
            className="rounded-md px-2 py-3 text-lg "
          />
          <button className="px-12 py-5 bg-blue-400 text-lg hover:bg-blue-800 duration-500">
            add
          </button>
        </div>
        <hr />
        <div className="list contianer">
          {totdos.map((item) => (
            <div>
              <h1 className="text-2xl">{item.titile}</h1>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
