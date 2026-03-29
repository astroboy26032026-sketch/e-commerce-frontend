"use client"
import { getTrackBackground, Range } from "react-range";
// prop type 
type IProps = {
  STEP:number;
  MIN:number;
  MAX:number;
  values:number[];
  handleChanges: (val: number[]) => void
}
const InputRange = ({ STEP=1, MIN=0, MAX=500, values, handleChanges }:IProps) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key='track'
            style={{
              ...props.style,
              height: '4px',
              width: '100%',
              borderRadius: '4px',
              background: getTrackBackground({
                values: values,
                colors: ["#e0e0e0", "#1a1a1a", "#e0e0e0"],
                min: MIN,
                max: MAX
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props,index }) => (
          <div
            {...props}
            key={`thumb-${index}`}
            style={{
              ...props.style,
              height: '18px',
              width: '18px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '2px solid #1a1a1a',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              outline: 'none',
              cursor: 'grab',
            }}
          />
        )}
      />
    </>
  );
};


export default InputRange;
