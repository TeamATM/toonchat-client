import { create } from 'zustand';

export interface AIParameterState {
  temperatureParam: number,
  repetitionPenaltyParam: number,
  updateParameter: (temperatureParam: number, repetitionPenaltyParam: number) => void;
}

const useAIParameterStore = create<AIParameterState>((set) => ({
  temperatureParam: 0.3,
  repetitionPenaltyParam: 1.5,
  updateParameter: (newTemperatureParam, newRepetitionPenaltyParam) => set({
    temperatureParam: newTemperatureParam,
    repetitionPenaltyParam: newRepetitionPenaltyParam,
  }),
}));

export default useAIParameterStore;
