import React, { useEffect, useState } from "react";
import { BookingTable } from "../data/BookingTable";
import { getLanguage } from "@/LanguageContext";

const TableTemp = () => {
  const tableTitle = "Contacts";
  //   const [json, setJson] = useState([]);
  const data = getLanguage(BookingTable);
  console.log("🚀 ~ TableTemp ~ BookingTable:", BookingTable);
  console.log("🚀 ~ TableTemp ~ data:", data);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("🚀 ~ useEffect ~ data:", data);
  //         return setJson(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="w-2xl mx-auto bg-almostWhite">
        <div className="mx-auto max-w-screen-lg p-2 text-gray-800 sm:p-4">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            {tableTitle}
          </h2>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-900 shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-600">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-slate-500">
                        {data.headings.map((heading, id) => (
                          <th
                            key={id}
                            scope="col"
                            className="whitespace-nowrap px-2 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="gray-200 divide-y bg-white text-xs">
                      {data.table.map((json, id) => (
                        <tr key={id} className="divide-x divide-slate-500">
                          <td className="whitespace-pre-line px-4 py-4">
                            <div className="text-sm text-gray-900">
                              {json.col1}
                            </div>
                            <div className="text-sm text-gray-500">
                              {json.sub1}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="text-sm text-gray-900">
                              {json.col2}
                            </div>
                            <div className="text-sm text-gray-500">{""}</div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="inline-flex rounded-full bg-green-700 px-2 text-xs font-semibold leading-5 text-white">
                              {json.col3}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {json.col4}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-center text-sm font-medium">
                            {json.col5}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {json.col6}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                            {json.col7}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-2xl mx-auto bg-almostWhite">
        <div className="mx-auto max-w-screen-lg p-2 text-gray-800 sm:p-4">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            {tableTitle}
          </h2>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-900 shadow sm:rounded-lg">
                  <table className="min-w-full whitespace-nowrap p-6 text-left text-xs">
                    <colgroup>
                      <col
                        width={100}
                        className="w-7/12 whitespace-pre-wrap bg-yellow-200"
                      />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col />
                      <col className="w-5" />
                    </colgroup>
                    <thead>
                      <tr className="bg-gray-300">
                        <th colSpan={2} width={200} className="p-3">
                          Item
                        </th>

                        <th className="p-3">Company</th>
                        <th className="p-3">Company</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Website</th>
                        <th className="p-3">tag</th>
                      </tr>
                    </thead>
                    {/* divider */}
                    <tbody>
                      {data.table.map((json, id) => (
                        <tr
                          className={`border-gray-400 ${json.divider === true ? "border-b" : ""}`}
                          key={id}
                        >
                          <td
                            colSpan={2}
                            width={200}
                            className="text-wrap px-3 font-medium text-gray-600"
                          >
                            {json.col1}
                          </td>
                          <td className="px-3 py-2">
                            <p>{json.col2}</p>
                          </td>
                          <td className="px-3 py-2">
                            <span> {json.col3}</span>
                          </td>
                          <td className="px-3 py-2">
                            <p>{json.col4}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>{json.col5}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>{json.col6}</p>
                          </td>
                          <td className="px-3 py-2">
                            <p>{json.col7}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTemp;
