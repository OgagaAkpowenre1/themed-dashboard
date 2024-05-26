// import React from "react";
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   Legend,
//   Category,
//   StackingColumnSeries,
//   Tooltip,
// } from "@syncfusion/ej2-react-charts";
// import {
//   stackedCustomSeries,
//   stackedPrimaryXAxis,
//   stackedPrimaryYAxis,
// } from "../../data/dummy";

// export default function Stacked({ width, height }) {
//   return (
//     <ChartComponent
//       width={width}
//       height={height}
//       id="stack chart"
//       primaryXAxis={stackedPrimaryXAxis}
//       primaryYAxis={stackedPrimaryYAxis}
//       chartArea={{ border: { width: 0 } }}
//       tooltip={{ enable: true }}
//       legendSettings={{ background: "white" }}
//     >
//       <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
//       <SeriesCollectionDirective>
//         {stackedCustomSeries.map((item, index) => (
//           <SeriesDirective key={index} {...item} />
//         ))}
//       </SeriesCollectionDirective>
//     </ChartComponent>
//   );
// }

import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  // const { currentMode } = useStateContext();

  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={'#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
