import React, { useEffect, useRef, useState } from 'react';
import {
  Terminal,
  Code,
  Cpu,
  Shield,
  ChevronRight,
  Github,
  Mail,
  ExternalLink,
  Loader
} from 'lucide-react';

// --- CONFIGURATION: EDIT THIS SECTION ---
const CONFIG = {
  githubUsername: 'whysuman', // Your GitHub username
  name: 'SUMANTHRA_RAO_YERRABELLY',
  role: 'LLMS/AI_ENGINEER',
  email: 's.yerrabelly@ufl.edu',
  sections: {
    projects: [
      {
        title: 'EMERGENCY_BUILDING_EVACUATION_SYSTEM',
        desc: 'Dynamic network-flow evacuation planner using time-expanded graphs to minimize evacuation time under capacity and transit constraints.',
        tech: ['Python', 'NetworkX', 'Visualization', 'Optimization']
      },
      {
        title: 'REVIEWER_ASSIGNMENT_VIA_NETWORK_FLOW',
        desc: 'Maximum-flow based reviewer-paper assignment system with feasibility thresholds and runtime scaling analysis.',
        tech: ['Python', 'Algorithms', 'Graph Theory']
      },
      {
        title: 'KNOWLEDGE_EDITING_FOR_VLMS',
        desc: 'Research prototype adapting LLM knowledge-editing techniques to vision-language models with locality and generalization analysis.',
        tech: ['PyTorch', 'Transformers', 'BLIP-2', 'Qwen-VL']
      },
      {
        title: 'MULTI_AGENT_LLM_ORCHESTRATION_PLATFORM',
        desc: 'Backend infrastructure coordinating multiple LLM agents with role-based permissions, task routing, and observability hooks.',
        tech: ['FastAPI', 'Casbin', 'Redis', 'Celery']
      }
    ],
    experience: [
      {
        title: 'GRADUATE_RESEARCH_VOLUNTEER @ UNIVERSITY_OF_FLORIDA',
        period: '2024 - PRESENT',
        desc: 'Research on knowledge editing and controllability in LLMs and VLMs. Extend knowledge-editing frameworks to multi-modal settings, analyze faithfulness, locality, and robustness, and prototype research implementations.',
        tech: [
          'Python',
          'PyTorch',
          'Transformers',
          'BLIP-2',
          'Qwen-VL',
          'Hugging Face',
          'NumPy',
          'Matplotlib'
        ]
      },
      {
        title: 'AI_ENGINEER @ AIDENAI',
        period: 'OCT_2024 - JUL_2025',
        desc: 'Designed backend services and AI-driven workflows for a multi-agent platform. Built RBAC systems, API services, and orchestration pipelines integrating LLMs with focus on scalability and observability.',
        tech: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis', 'Celery', 'LangChain', 'Docker', 'Casbin']
      },
      {
        title: 'AI_ENGINEER_INTERN @ AIDENAI',
        period: 'JUL_2024 - SEP_2024',
        desc: 'Implemented internal services and integrations for multi-agent workflows, contributing to architecture decisions and maintainable system design.',
        tech: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker']
      },
      {
        title: 'SOFTWARE_ENGINEERING_PROJECTS',
        period: '2022 - PRESENT',
        desc: 'Algorithm-heavy systems and simulations: dynamic network-flow evacuation modeling, reviewer assignment via max flow, collision detection, and graph algorithm performance analysis.',
        tech: ['Python', 'NetworkX', 'C++', 'Java', 'LaTeX', 'Git', 'Linux']
      }
    ],
    passions: [
      {
        title: 'MACHINE_LEARNING_SYSTEMS',
        desc: 'Interested in how learning algorithms behave as real systems: optimization stability, controllability, observability, and failure modes.'
      },
      {
        title: 'ALGORITHMS_&_OPTIMIZATION',
        desc: 'Strong interest in classical algorithms, network flow, NP-completeness, and simulation-driven performance analysis.'
      },
      {
        title: 'DEVELOPER_TOOLING_&_INFRASTRUCTURE',
        desc: 'Enjoys designing clean developer experiences, from API design to monitoring pipelines and system ergonomics.'
      }
    ]
  }
};

// --- OPTIMIZED MATRIX RAIN ---
const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Throttle frame rate for performance/aesthetic
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Restored the authentic Matrix character set (Katakana + Latin + Numbers)
    const chars =
      'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロヲゴゾドボポ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = new Array(columns).fill(1);

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;

      lastTime = currentTime - (deltaTime % frameInterval);

      // Fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-20 pointer-events-none" />
  );
};

// --- TREE NODE ---
const TreeNode = ({ label, icon: Icon, onClick, active, delay, isRoot = false }) => (
  <button
    onClick={onClick}
    className={`
      relative flex flex-col items-center cursor-pointer group transition-all duration-500 outline-none
      ${active ? 'scale-110' : 'hover:scale-105 opacity-80 hover:opacity-100'}
      animate-in fade-in zoom-in duration-1000
    `}
    style={{ animationDelay: `${delay}ms` }}
    aria-label={label}
  >
    {/* Hexagon/Circle Shape */}
    <div
      className={`
      w-24 h-24 md:w-32 md:h-32 flex items-center justify-center
      border-2 bg-black/90 backdrop-blur-sm relative z-10
      ${active ? 'border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.5)]' : 'border-green-900 group-hover:border-green-500'}
      ${isRoot ? 'rounded-full' : 'rounded-xl hexagon-clip'}
      transition-all duration-300
    `}
    >
      <Icon
        size={isRoot ? 40 : 32}
        className={`
        ${active ? 'text-green-400 animate-pulse' : 'text-green-700 group-hover:text-green-400'}
      `}
      />

      {/* Scanning effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out" />
    </div>

    {/* Label */}
    <div
      className={`
      mt-4 px-4 py-1 bg-black/90 border border-green-900 rounded text-center
      font-mono text-sm md:text-base tracking-widest uppercase
      ${active ? 'text-green-400 border-green-500' : 'text-green-700 group-hover:text-green-500'}
    `}
    >
      {isRoot ? '> ' : ''}
      {label}
      {isRoot ? ' <' : ''}
    </div>

    {/* Connector Line */}
    {!isRoot && (
      <div className="absolute -top-12 left-1/2 w-0.5 h-12 bg-gradient-to-b from-green-900 to-green-500/50 -z-10 hidden md:block" />
    )}
  </button>
);

// --- MODAL CONTENT ---
const SectionContent = ({ title, items, onClose, isLoading }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()} // Close when clicking backdrop
    >
      <div className="bg-black border border-green-500/50 p-6 md:p-8 rounded-lg max-w-2xl w-full shadow-[0_0_50px_rgba(0,255,0,0.15)] relative max-h-[90vh] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green-700 hover:text-green-400 font-mono transition-colors"
          aria-label="Close Modal"
        >
          [ESC] CLOSE
        </button>

        <h2 className="text-2xl md:text-3xl font-bold font-mono text-green-500 mb-6 flex items-center gap-3 border-b border-green-900/50 pb-4">
          <ChevronRight className="animate-pulse" />
          {title}
        </h2>

        <div className="space-y-6 font-mono text-green-400/80 overflow-y-auto custom-scrollbar pr-2">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12 text-green-600 gap-4">
              <Loader className="animate-spin" size={32} />
              <p>ESTABLISHING UPLINK...</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={idx}
                className="group border-l-2 border-green-900 pl-4 py-1 hover:border-green-500 transition-colors"
              >
                <h3 className="text-lg text-green-300 font-bold flex items-center gap-2">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-green-100 flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                    >
                      {item.title} <ExternalLink size={14} className="opacity-70" />
                    </a>
                  ) : (
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.title}
                    </span>
                  )}
                  {item.period && (
                    <span className="text-xs text-green-700 font-normal ml-auto hidden sm:block">
                      {item.period}
                    </span>
                  )}
                </h3>

                <p className="text-sm mt-2 text-green-400/70 leading-relaxed">
                  {item.desc || 'No description available.'}
                </p>

                {/* Tech Tags */}
                {item.tech && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-2 py-0.5 bg-green-900/30 text-green-500 rounded border border-green-900/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* Language Tag (for Github) */}
                {item.language && (
                  <span className="text-xs text-green-600 mt-2 block">[{item.language}]</span>
                )}
              </div>
            ))
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-green-900/50 text-xs text-green-800 font-mono flex justify-between shrink-0">
          <span>STATUS: CONNECTED</span>
          <span>SECURE_LINK: TLS_1.3</span>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Boot sequence
    const timer = setTimeout(() => setInit(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const getSectionData = () => {
    switch (activeSection) {
      case 'projects':
        return CONFIG.sections.projects;
      case 'experience':
        return CONFIG.sections.experience;
      case 'passions':
        return CONFIG.sections.passions;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-500 font-sans selection:bg-green-500 selection:text-black overflow-hidden relative">
      <MatrixRain />

      {/* CRT Scanline & Vignette Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-40 bg-radial-gradient from-transparent to-black/80" />

      {/* Main Container */}
      <div
        className={`
        relative z-10 flex flex-col items-center justify-center min-h-screen p-4 transition-opacity duration-1000
        ${init ? 'opacity-100' : 'opacity-0'}
      `}
      >
        {/* Tree Structure */}
        <div className="flex flex-col items-center gap-12 md:gap-24 w-full max-w-5xl scale-90 md:scale-100 origin-center">
          {/* ROOT NODE */}
          <div className="relative z-20">
            <TreeNode
              label={CONFIG.name}
              icon={Terminal}
              isRoot
              delay={0}
              active={activeSection === null}
              onClick={() => setActiveSection(null)}
            />

            {/* Horizontal Connector Lines for Desktop */}
            <div className="hidden md:block absolute top-[100%] left-1/2 -translate-x-1/2 w-[600px] h-12 border-t-2 border-x-2 border-green-900/50 rounded-t-xl -z-10 mt-8" />
            <div className="hidden md:block absolute top-[100%] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-green-900/50 -z-10" />
          </div>

          {/* CHILDREN NODES */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-32 w-full justify-center z-10">
            <TreeNode
              label="PROJECTS"
              icon={Code}
              delay={200}
              onClick={() => handleSectionClick('projects')}
            />

            <TreeNode
              label="EXPERIENCE"
              icon={Shield}
              delay={400}
              onClick={() => handleSectionClick('experience')}
            />

            <TreeNode
              label="PASSIONS"
              icon={Cpu}
              delay={600}
              onClick={() => handleSectionClick('passions')}
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="absolute bottom-8 w-full max-w-4xl px-6 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-green-800 gap-4">
          <div className="flex items-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
            _SYS_READY // {CONFIG.role}
          </div>

          <div className="flex gap-6">
            <a
              href={`https://github.com/${CONFIG.githubUsername}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-green-400 transition-colors group"
            >
              <Github size={14} className="group-hover:scale-110 transition-transform" />
              <span>GITHUB_LINK</span>
            </a>
            <a
              href={`mailto:${CONFIG.email}`}
              className="flex items-center gap-2 hover:text-green-400 transition-colors group"
            >
              <Mail size={14} className="group-hover:scale-110 transition-transform" />
              <span>SEND_PACKET</span>
            </a>
          </div>
        </div>
      </div>

      {/* Content Modal Overlay */}
      {activeSection && (
        <SectionContent
          title={activeSection.toUpperCase()}
          items={getSectionData()}
          onClose={() => setActiveSection(null)}
          isLoading={false}
        />
      )}

      <style jsx global>{`
        .hexagon-clip {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .bg-radial-gradient {
          background: radial-gradient(circle, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.8) 100%);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 20, 0, 0.3);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(21, 128, 61, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 197, 94, 0.8);
        }
      `}</style>
    </div>
  );
}
