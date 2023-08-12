import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../button/Button';

const TuneSetting = () => {
  const [temperature, setTemperature] = useState(0.3);
  const [repetitionPenalty, setRepetitionPenalty] = useState(1.5);

  const temperatureHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(e.target.value));
  };
  const repetitionPenaltyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepetitionPenalty(parseFloat(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(temperature, repetitionPenalty);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="temperature">{`Temperature : ${temperature}`}</label>
        <input
          type="range"
          name="temperature"
          id="temperature"
          value={temperature}
          onChange={temperatureHandler}
          min="0"
          max="0.99"
          step="0.01"
        />
      </div>
      <div>
        <label htmlFor="repetitionPenalty">{`Repetition Penalty : ${repetitionPenalty}`}</label>
        <input
          type="range"
          name="repetitionPenalty"
          id="repetitionPenalty"
          value={repetitionPenalty}
          onChange={repetitionPenaltyHandler}
          min="1"
          max="2"
          step="0.01"
        />
      </div>
      <Button theme="green">Set up</Button>
    </form>
  );
};
export default TuneSetting;