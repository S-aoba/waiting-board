import { useState } from "react";
import { Inside } from "./index";

const Waiting = (props) => {
  const display = () => {
    return props.customer.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>{item.seat}</td>
        <td>
          <button data-index={String(index)} onClick={cancel} className="mr-5 btn btn-primary">
            取り消し
          </button>
          <button data-index={String(index)} className="btn btn-primary">
            ご案内
          </button>
        </td>
      </tr>
    ));
  };

  const cancel = (e) => {
    let index = e.currentTarget.dataset["index"];
    const newCustomerList = [...props.customer];
    newCustomerList.splice(index, 1);
    props.setInfo(newCustomerList);
  };

  return (
    <div>
      <div className="border-b-4 border-gray-300 pb-5">
        <div className="flex justify-center">
          <div className="px-10 lg:w-7/12 w-full">
            <div className="flex justify-start">
              <p className="py-10 text-3xl">順番待ち</p>
            </div>

            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>名前</th>
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
      <Inside />
    </div>
  );
};

export default Waiting;
