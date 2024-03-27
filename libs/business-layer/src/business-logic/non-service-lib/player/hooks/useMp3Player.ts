import { Audio, AVPlaybackSource } from 'expo-av';
import { useEffect, useState } from 'react';
export const useMp3Player = (mp3File: AVPlaybackSource) => {
  const [sound, setSound] = useState<Audio.Sound>();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(mp3File);
    setSound(sound);

    await sound.setVolumeAsync(0); // Reduce volume temporarily
    await sound.playAsync();
    await sound.setVolumeAsync(1.0); // Restore volume after a short delay (adjust as needed)
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return {
    playSound,
  };
};
