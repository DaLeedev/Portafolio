import { Award, Calendar, ExternalLink } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  area: string;
}

export function CertificateCard({ 
  title, 
  issuer, 
  date, 
  description,
  credentialUrl,
  area 
}: CertificateCardProps) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 group-hover:bg-purple-500/20 transition-colors">
            <Award className="w-5 h-5 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <p className="text-purple-300 text-sm font-medium">{issuer}</p>
          </div>
        </div>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors shrink-0"
            aria-label="Ver credencial"
          >
            <ExternalLink className="w-4 h-4 text-zinc-300" />
          </a>
        )}
      </div>
      
      {description && (
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>
      )}
      
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-2 text-zinc-500 text-sm">
          <Calendar className="w-4 h-4" />
          <span>{date}</span>
        </div>
        <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700">
          {area}
        </span>
      </div>
    </div>
  );
}
