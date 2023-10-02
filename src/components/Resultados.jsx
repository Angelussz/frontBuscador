import React from "react";

function Resultados({ datos }) {
  console.log(datos);
//   datos.map((data, index) => {
//     console.log(data.name);
//     console.log(index);
//   });
  return (
    <div className="w-10/12 min-w-input bg-slate-500 rounded-lg">
      {datos.map((data, index) => (
        <div key={index} className="grid grid-cols-2 text-white">
          <h2 className="col-span-2 text-center">{data.name}</h2>
          <p className="col-span-2 box-border pl-5">{data.summary}</p>
          <p className="box-border pl-5 text-green-500">{data.author}</p>
          <p className="box-border pl-5 text-green-500">{data.year}</p>
        </div>
      ))}
    </div>
    // <div className="w-10/12 min-w-input bg-red-300">
    //   {datos.map((data, index) => (
    //     <div className="grid grid-cols-2" key={index}>
    //       <h2 className="col-span-2 text-center">{data.name}</h2>
    //       <p className="col-span-2 box-border pl-5">{data.summary}</p>
    //       <p className="box-border pl-5">{data.author}</p>
    //       <p className="box-border pl-5">{data.year}</p>
    //     </div>
    //   ))}
    // </div>
  );
}

export default Resultados;
