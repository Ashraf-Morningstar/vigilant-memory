/*
 Copyright (c) 2026 Ashraf Morningstar
 These are personal recreations of existing projects, developed by Ashraf Morningstar
 for learning and skill development.
 Original project concepts remain the intellectual property of their respective creators.
 Repository: https://github.com/AshrafMorningstar
*/

import { useCurrentFrame } from 'remotion';
import { UserStats } from '../../config';
import { AnimatedCounter } from '../Effects/AnimatedCounter';
import { fadeInAndSlideUp } from '../../functions/animations';

const CommitStreak = ({ streak }) => (
  <div className="flex flex-col items-center justify-center">
    <p className="text-3xl font-bold">
      <AnimatedCounter value={streak} duration={3} />
    </p>
    <p className="text-sm opacity-80">
      Day Streak
    </p>
  </div>

);

export function CommitStreakCard({ userStats }: { userStats: UserStats }) {
  const frame = useCurrentFrame();
  return (
    <div
      className="bg-[#282a36] text-[#f8f8f2] rounded-lg p-4 shadow-lg overflow-hidden relative text-white w-full"
      style={fadeInAndSlideUp(frame)}
    >
      <h2 className="text-xl font-semibold mb-4 opacity-80">Commit Streak</h2>
      <CommitStreak streak={200} />
    </div>
  );
} 