import {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import Button from '@/components/common/button/Button';
import useAIParameterStore from '@/store/aiParameter';

interface tuneSettingProps {
  closeModal : () => void,
}

const TuneSetting: FC<tuneSettingProps> = ({ closeModal }) => {
  const [temperature, setTemperature] = useState(0.3);
  const [repetitionPenalty, setRepetitionPenalty] = useState(1.5);
  const { updateParameter } = useAIParameterStore();
  const temperatureHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(e.target.value));
  };
  const repetitionPenaltyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepetitionPenalty(parseFloat(e.target.value));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateParameter(temperature, repetitionPenalty);
    closeModal();
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
