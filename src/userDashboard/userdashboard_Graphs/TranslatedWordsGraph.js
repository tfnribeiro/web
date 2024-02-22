import { ResponsiveLine } from "@nivo/line";
import { veryLightGrey } from "../../components/colors";

export default function TranslatedWordsGraph({ data }) {
  function isAllDataEntriesZero(data) {
    var sum = 0;
    data[0].data.forEach((entry) => (sum += entry.y));
    return sum === 0;
  }

  function getMaxForYScale(data) {
    return isAllDataEntriesZero(data) ? 10 : "auto";
  }

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: 0,
        max: getMaxForYScale(data),
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "date",
        legendOffset: 36,
        legendPosition: "left",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 100,
          translateY: 50,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: veryLightGrey,
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: veryLightGrey,
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}
