import React from "react";
import { FadeLoader, BarLoader } from "react-spinners";

// type
type IProps = {
  loading: boolean;
  spinner?: "scale" | "fade";
  color?: string;
};

const Loader = ({ loading, spinner = "fade", color = "0989FF" }: IProps) => {
  return (
    <div className="text-center">
      {spinner === "scale" && (
        <BarLoader
          color={`#${color}`}
          loading={loading}
          height={8}
          width={100}
        />
      )}
      {spinner === "fade" && (
        <FadeLoader
          loading={loading}
          color="#0989FF"
        />
      )}
    </div>
  );
};

export default Loader;
