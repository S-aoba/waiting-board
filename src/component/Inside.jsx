// import React from "react";

const Inside = (props) => {
  const display = () => {
    return props.insideList.map((customerList, id) =>
      customerList.map((customer) => (
        <tr key={id}>
          <td>{customer.name} 様</td>
          <td>{customer.number}名</td>
          <td>{customer.seat}</td>
          <td>
            <button data-index={String(id)} onClick={bill} className="btn btn-primary ml-3">
              お会計(退店)
            </button>
          </td>
        </tr>
      ))
    );
  };

  const bill = (e) => {
    const index = e.currentTarget.dataset["index"];
    console.log(props.insideList);
    console.log(index);

    const newInsideList = [...props.insideList];
    newInsideList.splice(index, 1);
    props.setInsideList(newInsideList);
  };
  return (
    <div className="border-b-4 border-gray-300 pb-5">
      <div className="flex justify-center">
        <div className="px-10 lg:w-7/12 w-full">
          <div className="flex justify-start">
            <p className="py-10 text-3xl">店内</p>
          </div>

          <div className="overflow-x-auto ">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>お名前</th>
                  <th>人数</th>
                  <th>お席</th>
                  <th className="bg-white"></th>
                </tr>
              </thead>
              <tbody>{display()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inside;
