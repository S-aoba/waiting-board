import React from "react";

const Inside = () => {
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>齋藤</td>
                  <td>2名</td>
                  <td>テーブル</td>
                  <td>
                    <button className="btn btn-primary ml-3">お会計(退店)</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inside;
