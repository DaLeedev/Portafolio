interface SkillBarProps {
  name: string;
  level: number; // 0-100
  icon?: string;
}

function getSkillLevel(level: number): { label: string; color: string } {
  if (level >= 80) return { label: "Avanzado", color: "text-green-400" };
  if (level >= 50) return { label: "Intermedio", color: "text-yellow-400" };
  return { label: "Básico", color: "text-blue-400" };
}

export function SkillBar({ name, level, icon }: SkillBarProps) {
  const skillLevel = getSkillLevel(level);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-lg">{icon}</span>}
          <span className="text-zinc-200 font-medium">{name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-semibold ${skillLevel.color}`}>
            {skillLevel.label}
          </span>
          <span className="text-purple-400 text-sm font-semibold">-.-</span>
        </div>
      </div>
      <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-linear-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
