import FloatingLines from "./FloatingLines";

export default function BackgroundFX() {
  return <FloatingLines linesCount={16} speed={0.0012} amplitude={40} frequency={0.007} interactive={true} />;
}
