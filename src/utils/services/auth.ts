import jwtDecode from 'jwt-decode';

interface DecodedToken {
  exp?: number; // 'exp'는 JWT 토큰의 만료 시간을 나타내는 UNIX 타임스탬프입니다.
}

// eslint-disable-next-line import/prefer-default-export
export const isTokenExpired = (token: string) => {
  try {
    const decoded: DecodedToken = jwtDecode(token);

    if (!decoded.exp) {
      return true; // 'exp' 필드가 없는 경우 토큰을 만료된 것으로 간주
    }

    const currentTime = Date.now() / 1000; // 현재 시간을 UNIX 타임스탬프로 변환

    return currentTime > decoded.exp; // 만료 시간보다 현재 시간이 큰 경우 토큰은 만료된 것으로 간주
  } catch (error) {
    // 토큰 디코딩 중 오류가 발생한 경우 토큰을 만료된 것으로 간주
    return true;
  }
};
