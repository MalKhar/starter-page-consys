import Image from "next/image";
import background from "@/public/bg-image.jpg";

export default function Background() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        backgroundColor: "white",
      }}
    ></div>
  );
}
