import PrismaticBurst from "./PrismaticBurst";

export default function BackgroundFX() {
  return <PrismaticBurst raysCount={32} speed={0.002} intensity={0.75} interactive={true} />;
}
