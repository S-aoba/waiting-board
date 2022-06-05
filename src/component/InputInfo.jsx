import { useState } from "react";
import { Waiting, Inside } from "./index";

const InputInfo = () => {
  //ユーザーが入力している間の値を入れるデータ
  const [inputInfo, setInputInfo] = useState({ name: "", number: "", seat: "テーブル" });

  // //WaitingComponentが持つデータリスト
  const [waitingList, setWaitingList] = useState([]);

  // //InsideComponentが持つデータリスト
  const [insideList, setInsideList] = useState([]);

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

  //順番待ちのデータリストに入力された値を挿入
  const handOverWaitingList = () => {
    setWaitingList((waitingList) => [...waitingList, inputInfo]);
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
            <button onClick={handOverWaitingList} className="btn btn-primary">
              順番待ちをする
            </button>
          </div>
        </div>
      </div>
      <Waiting waitingList={waitingList} setWaitingList={setWaitingList} insideList={insideList} setInsideList={setInsideList} />
      <Inside insideList={insideList} setInsideList={setInsideList} />
    </div>
  );
};

export default InputInfo;
