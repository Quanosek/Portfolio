import Wave from "react-wavify";

export default function Waves() {
  return (
    <div className="wavesHandler">
      <div className="waves">
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 50,
            amplitude: 38,
            speed: 0.1,
            points: 4,
          }}
        />

        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 50,
            amplitude: 52,
            speed: 0.08,
            points: 3,
          }}
        />
      </div>
    </div>
  );
}
