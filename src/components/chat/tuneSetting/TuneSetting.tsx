import {
  ChangeEvent, FC, FormEvent, useEffect, useState,
} from 'react';
import useAIParameterStore from '@/store/aiParameter';
import { css } from '@emotion/react';
import color from '@/styles/color';

interface tuneSettingProps {
  closeModal : () => void,
}

const TuneSetting: FC<tuneSettingProps> = ({ closeModal }) => {
  const [temperature, setTemperature] = useState(0.3);
  const [repetitionPenalty, setRepetitionPenalty] = useState(1.5);
  const { temperatureParam, repetitionPenaltyParam, updateParameter } = useAIParameterStore();

  useEffect(() => {
    setTemperature(temperatureParam);
    setRepetitionPenalty(repetitionPenaltyParam);
  }, []);

  const temperatureHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(e.target.value));
  };
  const repetitionPenaltyHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setRepetitionPenalty(parseFloat(e.target.value));
  };

  // TODO: AI 파라미터 값을 백엔드에서 저장하고 있어야 할 것 같음.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateParameter(temperature, repetitionPenalty);
    console.log('AI 파라미터 값:', temperature, repetitionPenalty);
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
      <button type="submit" css={ButtonCSS}>Save</button>
    </form>
  );
};
export default TuneSetting;

const ButtonCSS = () => css`
  width: 30%;
  background-color: ${color.lightGray};
  text-transform: uppercase;
  border: none;
  padding: 0.625rem;
  margin-top: 1.875rem;
  border-radius: 0.75rem;
  margin-top: 0.625rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: ${color.black};
`;
