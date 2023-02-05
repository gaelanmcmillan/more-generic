import BowlingAlley from "../../components/BowlingAlley";
import { useState } from "react";

// Create a specific callback for a slider
const handleSliderChange = (sliderId, updateCallback) => () => {
  const slider = document.getElementById(sliderId);
  updateCallback(slider.value);
};

const LabelledSlider = (props) => {
  const id = props.fieldName.split().join("-");
  const handleChange = handleSliderChange(id, props.setValue);
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        marginBottom: "0.5rem",
      }}
    >
      <span>
        <b>{props.fieldName}</b>
        {": "}
        {props.value.toString()} {props.unitName}
      </span>
      <input
        id={id}
        type="range"
        min={props.minValue.toString()}
        max={props.maxValue.toString()}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};
const TimingWidget = (props) => {
  const [tempo, setTempo] = useState(60);
  const [blockSize, setBlockSize] = useState(1024);

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        border: "2px solid black",
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <LabelledSlider
        fieldName="Tempo"
        unitName="bpm"
        value={tempo}
        setValue={setTempo}
        minValue={30}
        maxValue={400}
      />
      <LabelledSlider
        fieldName="Block Size"
        unitName="samples"
        value={blockSize}
        setValue={setBlockSize}
        minValue={16}
        maxValue={4096}
      />
      <svg id="timingViz" viewBox="0 0 auto auto">
        {/* <rect width="100%" height="100%" fill="white" /> */}
        {(() => {
          const VerticalTick = ({ xPos, height, label }) => {
            const percent = (num) => `${num}%`;
            const xPercent = percent(xPos);
            const yTop = 50 - height;
            const yBot = 50 + height;
            return (
              <>
                <text x={xPercent} y={percent(yTop - 5)} textAnchor="middle">
                  {label}
                </text>
                <line
                  x1={xPercent}
                  x2={xPercent}
                  y1={percent(yTop)}
                  y2={percent(yBot)}
                  stroke="black"
                  strokeWidth="2"
                />
              </>
            );
          };
          let start = 10;
          let end = 90;
          let width = end - start;
          let tickData = [
            { x: start, label: "0s" },
            { x: start + width / 3, label: "1s" },
            { x: start + (2 * width) / 3, label: "2s" },
            { x: end, label: "3s" },
          ];

          const ticks = tickData.map((tick, i) => (
            <VerticalTick
              key={i}
              xPos={tick.x}
              height={10}
              label={tick.label}
            />
          ));
          return ticks;
        })()}
        <line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="black"
          strokeWidth="6"
        />
        {/* <line
          x1="10%"
          x2="10%"
          y1="30%"
          y2="70%"
          stroke="black"
          strokewidth="2"
        /> */}
      </svg>
    </div>
  );
};

const TimingPost = (props) => {
  return (
    <BowlingAlley lg={6} md={8} sm={10} xs={12}>
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>On Timing</h1>
        </div>

        <TimingWidget />
      </div>
    </BowlingAlley>
  );
};

export default TimingPost;
