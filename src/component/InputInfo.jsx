import { useState } from "react";
import { Waiting } from "./index";

const InputInfo = () => {
  const [customerInfo, setCustomerInfo] = useState([]);
  const [inputInfo, setInputInfo] = useState({ name: "", number: "", seat: "テーブル" });

  const handleChangeName = (e) => {
    let customerName = e.target.value;
    setInputInfo((inputInfo) => ({ ...inputInfo, name: customerName }));
  };

  const handleChangeNumber = (e) => {
    let customerNumber = e.target.value;
    setInputInfo((inputInfo) => ({ ...inputInfo, number: customerNumber }));
  };

  const handleChangeSeat = (e) => {
    let customerSeat = e.target.value;
    setInputInfo((inputInfo) => ({ ...inputInfo, seat: customerSeat }));
  };

  const setWaitingList = (e) => {
    e.preventDefault();
    setCustomerInfo((customerInfo) => [...customerInfo, inputInfo]);
  };

  return (
    <div>
      <div className="flex justify-center border-b-4 border-gray-300 pb-5">
        <div className="w-7/12">
          <div className="py-8 flex justify-around">
            <input onChange={handleChangeName} className="mr-3 pl-2 border-4 rounded-md" type="text" placeholder="お名前" />
            <input onChange={handleChangeNumber} className="mr-3 pl-2 border-4 rounded-md" type="number" placeholder="人数" />
            <select onChange={handleChangeSeat} className="mr-3 select select-bordered  max-w-xs">
              <option disabled>お席</option>
              <option>テーブル</option>
              <option>カウンター</option>
              <option>どちらでも可</option>
            </select>
            <button onClick={setWaitingList} className="btn btn-primary">
              順番待ちをする
            </button>
          </div>
        </div>
      </div>
      <Waiting customer={customerInfo} setInfo={setCustomerInfo} />
    </div>
  );
};

export default InputInfo;
