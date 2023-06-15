import { useMemo } from 'react';
import type { WithSpringConfig } from 'react-native-reanimated';

/**
 * Generate spring animation configs.
 * @param configs overridable configs.
 */
export const useBottomSheetSpringConfigs = (
  configs: Omit<WithSpringConfig, 'velocity'>
) => {
  return useMemo(() => {
    const _configs: Omit<WithSpringConfig, 'velocity'> = {
      damping: configs.damping,
      mass: configs.mass,
      stiffness: configs.stiffness,
      overshootClamping: configs.overshootClamping,
      restSpeedThreshold: configs.restSpeedThreshold,
      restDisplacementThreshold: configs.restDisplacementThreshold,
    };

    return _configs;
  }, [
    configs.damping,
    configs.mass,
    configs.stiffness,
    configs.overshootClamping,
    configs.restSpeedThreshold,
    configs.restDisplacementThreshold,
  ]);
};
