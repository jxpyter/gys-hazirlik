"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ExamTimerProps {
  durationMinutes: number;
  onTimeUp: () => void;
  isActive: boolean;
}

export function ExamTimer({ durationMinutes, onTimeUp, isActive }: ExamTimerProps) {
  const [timeLeft, setTimeLeft] = useState(durationMinutes * 60);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isActive, onTimeUp]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const isUrgent = timeLeft < 60; // Less than 1 minute

  return (
    <Badge 
      variant={isUrgent ? "destructive" : "secondary"} 
      className={`text-base px-4 py-2 flex items-center gap-2 ${isUrgent ? 'animate-pulse' : ''}`}
    >
      <Clock className="w-5 h-5" />
      <span>{formatTime(timeLeft)}</span>
    </Badge>
  );
}
