"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ChevronDown,
  Dumbbell,
  Flame,
  Gauge,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  Play,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UserCheck,
  Utensils,
  X,
  Zap
} from "lucide-react";

const navItems = ["Home", "About", "Transformations", "Services", "Programs", "FAQ", "Contact"];

const images = {
  hero: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=2400&q=85",
  trainer: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=1400&q=85",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  athlete: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1400&q=85"
};

const portfolioImages = [
  "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1609899464726-209befaac5dc?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85"
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-graphite/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-ash backdrop-blur-xl">
        <Sparkles className="h-4 w-4 text-flare" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ash md:text-lg">{text}</p>
    </Reveal>
  );
}

function Button({ children, variant = "primary", href = "#contact" }: { children: React.ReactNode; variant?: "primary" | "ghost"; href?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-black uppercase tracking-[0.18em] transition duration-300 ${
        variant === "primary"
          ? "bg-flare text-white shadow-glow hover:scale-[1.02] hover:bg-white hover:text-obsidian"
          : "border border-white/15 bg-white/5 text-white backdrop-blur-xl hover:border-flare hover:text-flare"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  );
}

function BrandLogo() {
  const [logoLoaded, setLogoLoaded] = useState(true);

  return (
    <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-flare shadow-glow">
      {logoLoaded ? (
        <img
          src="/logo.png"
          alt="APEX FORGE logo"
          className="h-full w-full object-cover"
          onError={() => setLogoLoaded(false)}
        />
      ) : (
        <Dumbbell className="h-5 w-5 text-white" />
      )}
    </span>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/60 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <BrandLogo />
          <span className="font-display text-xl font-black uppercase tracking-[0.16em] text-white">APEX FORGE</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.2em] text-ash transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <Button href="#contact">Join Elite</Button>
        <button
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-graphite text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-obsidian lg:hidden"
          >
            <div className="grid gap-3 px-5 py-5">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-2xl bg-graphite px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-ash">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-obsidian">
      <motion.img src={images.hero} alt="Luxury gym atmosphere" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/78 to-obsidian/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/75" />
      <div className="absolute left-0 top-24 h-px w-full red-line opacity-70" />
      <div className="pointer-events-none absolute inset-0">
        {[...Array(22)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute h-1 w-1 rounded-full bg-white/30"
            style={{ left: `${(index * 19) % 100}%`, top: `${18 + ((index * 29) % 68)}%` }}
            animate={{ opacity: [0.15, 0.7, 0.15], y: [0, -20, 0] }}
            transition={{ duration: 4 + (index % 6), repeat: Infinity, delay: index * 0.11 }}
          />
        ))}
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-ash backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-flare shadow-glow" />
            Elite transformation studio
          </div>
          <h1 className="max-w-5xl font-display text-5xl font-black uppercase leading-[0.88] text-white md:text-7xl xl:text-8xl">
            Forge The Strongest Version Of Yourself
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ash md:text-xl">
            A cinematic coaching system for fat loss, muscle building, strength, nutrition, and accountability. Built for clients who want proof, not noise.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#contact">Start Transformation</Button>
            <Button href="#transformations" variant="ghost">View Results</Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 34 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="glass hidden self-end rounded-[2rem] p-5 lg:block">
          <div className="grid gap-4">
            {[
              ["93%", "client adherence"],
              ["12 wk", "visible transformation window"],
              ["1:1", "coach accountability"]
            ].map(([stat, label]) => (
              <div key={label} className="rounded-3xl bg-obsidian/75 p-6">
                <p className="font-display text-5xl font-black uppercase text-white">{stat}</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.22em] text-ash">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  const struggles = ["No consistency", "Random workouts", "Lack of results", "No structure", "No accountability"];
  const solutions = ["Customized plans", "Expert coaching", "Nutrition guidance", "Progress tracking", "Performance systems"];

  return (
    <section id="about" className="section-fade relative bg-obsidian px-5 py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Problem solved"
          title="Stop guessing. Start executing."
          text="APEX FORGE replaces scattered effort with a precise coaching architecture: training, nutrition, recovery, check-ins, and measurable progression."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass rounded-[2rem] p-6 lg:p-8">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-flare">What holds people back</p>
            <div className="grid gap-4">
              {struggles.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl bg-obsidian/75 p-4">
                  <Minus className="h-5 w-5 text-flare" />
                  <span className="font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="glass rounded-[2rem] p-6 lg:p-8">
            <p className="mb-6 text-xs font-black uppercase tracking-[0.26em] text-flare">The forge system</p>
            <div className="grid gap-4">
              {solutions.map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl bg-obsidian/75 p-4 transition hover:border-flare hover:shadow-glow">
                  <BadgeCheck className="h-5 w-5 text-flare" />
                  <span className="font-bold text-white">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const features = [
    ["Science-Based Training", Gauge],
    ["Personalized Coaching", UserCheck],
    ["Elite Performance Systems", Zap],
    ["Nutrition Guidance", Utensils],
    ["Faster Results", Flame],
    ["Real Accountability", ShieldCheck]
  ];

  return (
    <section className="relative bg-night px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why us" title="Luxury discipline. Measurable performance." text="Every detail is designed to make training feel focused, premium, and brutally effective." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([title, Icon]) => (
            <Reveal key={title as string} className="group rounded-[1.5rem] border border-white/10 bg-graphite p-7 transition duration-300 hover:-translate-y-2 hover:border-flare hover:shadow-glow">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-obsidian">
                <Icon className="h-6 w-6 text-flare" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">{title as string}</h3>
              <p className="mt-4 leading-7 text-ash">A premium coaching layer built around assessment, intent, weekly refinement, and visible progression.</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    ["Fat Loss Coaching", "High-adherence calorie strategy with conditioning systems.", Flame],
    ["Muscle Building", "Hypertrophy plans designed for progressive volume and recovery.", Dumbbell],
    ["Strength Training", "Compound-lift programming with intensity management.", Trophy],
    ["Online Coaching", "Remote check-ins, workout updates, and form review.", MessageCircle],
    ["Personalized Meal Plans", "Realistic meals, macros, and weekly nutrition adjustments.", Utensils],
    ["Athlete Performance", "Power, speed, conditioning, and movement preparation.", Target]
  ];

  return (
    <section id="services" className="section-fade relative bg-obsidian px-5 py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="Programs engineered for results" text="Choose a coaching lane built around your goal, schedule, training history, and execution style." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, desc, Icon]) => (
            <Reveal key={title as string} className="rounded-[1.5rem] border border-white/10 bg-graphite p-7 transition duration-300 hover:-translate-y-2 hover:border-flare hover:shadow-glow">
              <Icon className="mb-6 h-7 w-7 text-flare" />
              <h3 className="font-display text-2xl font-black uppercase text-white">{title as string}</h3>
              <p className="mt-4 min-h-16 leading-7 text-ash">{desc as string}</p>
              <Button href="#contact" variant="ghost">Apply now</Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkoutGenerator() {
  const [goal, setGoal] = useState("Fat Loss");
  const [level, setLevel] = useState("Intermediate");
  const [days, setDays] = useState("4");

  const plan = useMemo(() => {
    const dayCount = Number(days);
    const splitByDays: Record<string, string> = {
      "3": "Full Body Split",
      "4": "Upper / Lower Split",
      "5": "Push Pull Legs",
      "6": "Specialization Split"
    };
    const goalProfile: Record<string, { focus: string; reps: string; rest: string; intent: string }> = {
      "Fat Loss": { focus: "Cardio circuits", reps: "12-18 reps", rest: "30-45 sec", intent: "keep density high and transitions sharp" },
      "Muscle Gain": { focus: "Hypertrophy focus", reps: "8-12 reps", rest: "60-90 sec", intent: "drive controlled tension and progressive overload" },
      Strength: { focus: "Compound lifts", reps: "3-6 reps", rest: "2-3 min", intent: "move heavy loads with perfect bracing" }
    };
    const levelProfile: Record<string, { sets: number; volume: string; cue: string }> = {
      Beginner: { sets: 3, volume: "lower volume", cue: "learn the pattern before chasing load" },
      Intermediate: { sets: 4, volume: "balanced progression", cue: "add reps or weight weekly when form is clean" },
      Advanced: { sets: 5, volume: "high intensity", cue: "rotate top sets, back-off sets, and recovery audits" }
    };
    const exerciseBank: Record<string, Record<string, string[]>> = {
      "Fat Loss": {
        Beginner: ["Goblet squat", "Incline push-up", "Cable row", "Bike intervals", "Farmer carry", "Step-up circuit"],
        Intermediate: ["Trap bar deadlift", "Dumbbell thruster", "Sled push", "Battle rope waves", "Kettlebell swing", "Assault bike intervals"],
        Advanced: ["Barbell complex", "Weighted sled sprint", "Burpee pull-up", "Rower sprint ladder", "Front rack lunge", "Metabolic finisher"]
      },
      "Muscle Gain": {
        Beginner: ["Leg press", "Machine chest press", "Lat pulldown", "Hamstring curl", "Dumbbell shoulder press", "Cable curl"],
        Intermediate: ["Back squat", "Incline dumbbell press", "Romanian deadlift", "Weighted pull-up", "Cable fly", "Bulgarian split squat"],
        Advanced: ["Hack squat drop set", "Barbell bench press", "Deficit RDL", "Chest-supported row", "Lateral raise giant set", "Weighted dip"]
      },
      Strength: {
        Beginner: ["Box squat", "Dumbbell bench press", "Rack pull", "Assisted pull-up", "Pallof press", "Loaded carry"],
        Intermediate: ["Front squat", "Bench press", "Conventional deadlift", "Pendlay row", "Overhead press", "Weighted carry"],
        Advanced: ["Paused back squat", "Competition bench", "Block pull", "Weighted chin-up", "Push press", "Heavy yoke carry"]
      }
    };
    const focusByDays: Record<string, string[]> = {
      "3": ["Full body A", "Full body B", "Full body C"],
      "4": ["Upper power", "Lower power", "Upper volume", "Lower conditioning"],
      "5": ["Push", "Pull", "Legs", "Upper detail", "Conditioning"],
      "6": ["Chest", "Back", "Quads", "Shoulders", "Posterior chain", "Conditioning"]
    };
    const sets = levelProfile[level].sets + (dayCount >= 5 && level !== "Beginner" ? 1 : 0);
    const exercises = exerciseBank[goal][level].slice(0, dayCount === 3 ? 4 : dayCount === 4 ? 5 : 6).map((name, index) => ({
      name,
      focus: focusByDays[days][index % focusByDays[days].length],
      prescription: `${sets} sets - ${goalProfile[goal].reps} - ${goalProfile[goal].rest}`
    }));

    return {
      title: `${level} ${goal} - ${splitByDays[days]}`,
      meta: `${goalProfile[goal].focus} - ${levelProfile[level].volume} - ${days} days/week`,
      exercises,
      recommendation: `Use ${splitByDays[days].toLowerCase()} to ${goalProfile[goal].intent}. Keep ${levelProfile[level].cue}, then review performance every week.`
    };
  }, [days, goal, level]);

  return (
    <section id="programs" className="relative bg-night px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Workout generator" title="Generate your training blueprint" text="Every selection updates the split, exercise style, sets, reps, rest, and coaching recommendation instantly." />
        <Reveal className="glass grid gap-6 rounded-[2rem] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="grid gap-5">
            {[
              ["Fitness Goal", goal, setGoal, ["Fat Loss", "Muscle Gain", "Strength"]],
              ["Experience Level", level, setLevel, ["Beginner", "Intermediate", "Advanced"]],
              ["Workout Days", days, setDays, ["3", "4", "5", "6"]]
            ].map(([label, value, setter, options]) => (
              <div key={label as string} className="rounded-3xl bg-obsidian/70 p-5">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-ash">{label as string}</p>
                <div className="flex flex-wrap gap-3">
                  {(options as string[]).map((option) => (
                    <button
                      key={option}
                      onClick={() => (setter as (value: string) => void)(option)}
                      className={`rounded-full border px-4 py-3 text-sm font-bold transition ${
                        value === option ? "border-flare bg-flare text-white shadow-glow" : "border-white/10 bg-graphite text-ash hover:text-white"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <motion.div key={`${goal}-${level}-${days}`} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-white/10 bg-obsidian p-6">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-flare">Generated plan</p>
            <h3 className="mt-3 font-display text-4xl font-black uppercase text-white">{plan.title}</h3>
            <p className="mt-3 text-sm uppercase tracking-[0.2em] text-ash">{plan.meta}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {plan.exercises.map((exercise) => (
                <div key={`${exercise.focus}-${exercise.name}`} className="rounded-2xl bg-graphite p-5">
                  <Activity className="mb-4 h-5 w-5 text-flare" />
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-flare">{exercise.focus}</p>
                  <p className="mt-3 font-bold text-white">{exercise.name}</p>
                  <p className="mt-2 text-sm text-ash">{exercise.prescription}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 leading-7 text-ash">{plan.recommendation}</p>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function FitnessTools() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(78);
  const [age, setAge] = useState(30);
  const [water, setWater] = useState(2.5);
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  const calories = Math.round(10 * weight + 6.25 * height - 5 * age + 350);
  const protein = Math.round(weight * 1.8);
  const hydration = `${water.toFixed(1)} L`;

  return (
    <section className="section-fade relative bg-obsidian px-5 py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="Fitness tools" title="Performance numbers, instantly" text="Interactive sliders calculate useful baselines while preserving a luxury dashboard feel." />
        <div className="grid gap-5 lg:grid-cols-4">
          {[
            ["Height", height, setHeight, 120, 220, 1, "cm"],
            ["Weight", weight, setWeight, 25, 200, 1, "kg"],
            ["Age", age, setAge, 10, 80, 1, "yrs"],
            ["Water Intake", water, setWater, 0.5, 8, 0.1, "L"]
          ].map(([label, value, setter, min, max, step, unit]) => (
            <Reveal key={label as string} className="rounded-[1.5rem] border border-white/10 bg-graphite p-6">
              <label className="text-xs font-black uppercase tracking-[0.22em] text-ash">{label as string}</label>
              <div className="mt-4 flex items-end gap-2">
                <span className="font-display text-5xl font-black text-white">{label === "Water Intake" ? (value as number).toFixed(1) : (value as number)}</span>
                <span className="pb-2 text-ash">{unit as string}</span>
              </div>
              <input
                type="range"
                min={min as number}
                max={max as number}
                step={step as number}
                value={value as number}
                onChange={(event) => (setter as (value: number) => void)(Number(event.target.value))}
                className="mt-6 w-full"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["BMI", bmi, "Current body mass index"],
            ["Calories", calories.toLocaleString(), "Estimated daily target"],
            ["Protein", `${protein}g`, "Daily protein recommendation"],
            ["Hydration", hydration, "Selected daily water target"]
          ].map(([label, value, text]) => (
            <Reveal key={label} className="glass rounded-[1.5rem] p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-flare">{label}</p>
              <p className="mt-3 font-display text-5xl font-black text-white">{value}</p>
              <p className="mt-3 text-ash">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Transformations() {
  const cases = [
    ["Rohan", "18 kg fat loss", "20 weeks", "Built consistency after years of random training.", images.gym],
    ["Isha", "Strong lean recomp", "16 weeks", "Added shape, confidence, and structure.", images.athlete],
    ["Kabir", "42 kg deadlift PR", "12 weeks", "Moved from casual lifting to performance training.", images.trainer]
  ];

  return (
    <section id="transformations" className="relative bg-night px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Case studies" title="Transformations with proof" text="Premium client stories designed to build trust, show outcomes, and make results feel attainable." />
        <div className="grid gap-5 lg:grid-cols-3">
          {cases.map(([name, stat, timeline, story, image]) => (
            <Reveal key={name as string} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-graphite transition hover:-translate-y-2 hover:border-flare hover:shadow-glow">
              <div className="relative h-72 overflow-hidden">
                <img src={image as string} alt={`${name} transformation`} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-flare px-3 py-1 text-xs font-black uppercase text-white">Before / After</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl font-black uppercase text-white">{name as string}</h3>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-obsidian p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ash">Result</p>
                    <p className="mt-2 font-bold text-white">{stat as string}</p>
                  </div>
                  <div className="rounded-2xl bg-obsidian p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-ash">Timeline</p>
                    <p className="mt-2 font-bold text-white">{timeline as string}</p>
                  </div>
                </div>
                <p className="mt-5 leading-7 text-ash">{story as string}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    ["Ananya S.", "Lost 14 kg and finally learned how to eat without panic. The weekly check-ins changed everything.", "14 kg down"],
    ["Vikram R.", "The program felt premium from day one. Clear plan, clean progression, and no wasted sessions.", "Strength up 32%"],
    ["Neel K.", "Online coaching was more personal than my old in-person gym. Every adjustment had a reason.", "12-week recomp"]
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((index) => (index + 1) % reviews.length), 4200);
    return () => window.clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="section-fade relative bg-obsidian px-5 py-28 lg:px-8">
      <div className="relative mx-auto max-w-5xl">
        <SectionHeading eyebrow="Testimonials" title="Clients feel the difference" text="Animated reviews with measurable outcomes and premium presentation." />
        <Reveal className="glass rounded-[2rem] p-6 text-center md:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.35 }}>
              <div className="mb-6 flex justify-center gap-1 text-flare">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mx-auto max-w-3xl text-2xl font-bold leading-10 text-white">"{reviews[active][1]}"</p>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-flare">{reviews[active][2]}</p>
              <p className="mt-2 text-ash">{reviews[active][0]}</p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex justify-center gap-3">
            {reviews.map((review, index) => (
              <button key={review[0]} aria-label={`Show review ${index + 1}`} onClick={() => setActive(index)} className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-flare" : "w-2.5 bg-white/20"}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="relative bg-night px-5 py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Portfolio" title="The performance environment" text="Gym environment, coaching sessions, athlete training, and lifestyle visuals in a cinematic luxury grid." />
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {portfolioImages.map((image, index) => (
            <Reveal key={image} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/10 bg-graphite">
              <img src={image} alt="APEX FORGE portfolio" className={`w-full object-cover transition duration-700 hover:scale-110 ${index % 3 === 0 ? "h-[440px]" : "h-[310px]"}`} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Can beginners join?", "Yes. Beginners start with movement screening, simple exercises, and progression that builds confidence safely."],
    ["Do I need supplements?", "No. Supplements are optional. The foundation is food quality, protein, sleep, training consistency, and hydration."],
    ["Is online coaching available?", "Yes. Online coaching includes workouts, nutrition direction, check-ins, form review, and weekly plan updates."],
    ["How fast can I see results?", "Most clients see measurable changes in 4-6 weeks when training, nutrition, and recovery are followed consistently."],
    ["Are meal plans included?", "Meal guidance is included, and personalized meal plans are available based on the selected coaching package."]
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-fade relative bg-obsidian px-5 py-28 lg:px-8">
      <div className="relative mx-auto max-w-4xl">
        <SectionHeading eyebrow="FAQ" title="Questions, answered cleanly" text="Everything a serious client needs to know before entering the forge." />
        <div className="grid gap-4">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} className="rounded-3xl border border-white/10 bg-graphite">
              <button onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left">
                <span className="font-bold text-white">{question}</span>
                {open === index ? <Minus className="h-5 w-5 text-flare" /> : <Plus className="h-5 w-5 text-flare" />}
              </button>
              <AnimatePresence initial={false}>
                {open === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-ash">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-night px-5 py-28 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.16),transparent_34rem)]" />
      <Reveal className="relative mx-auto max-w-5xl text-center">
        <div className="glass rounded-[2rem] p-8 md:p-14">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-flare">Final call</p>
          <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] text-white md:text-7xl">Your Transformation Starts Today</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ash">Enter a training system that feels premium, structured, accountable, and built for real client outcomes.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="#contact">Book Consultation</Button>
            <Button href="#contact" variant="ghost">Join Elite Coaching</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ContactFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", goal: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormField = (field: "name" | "email" | "goal", value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    if (formStatus !== "idle") {
      setFormStatus("idle");
      setFormMessage("");
    }
  };

  const submitConsultation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const goal = formData.goal.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!name || !email || !goal) {
      setFormStatus("error");
      setFormMessage("Please fill in your name, email, and goal.");
      return;
    }

    if (!emailIsValid) {
      setFormStatus("error");
      setFormMessage("Please enter a valid email address.");
      return;
    }

    if (!accessKey) {
      setFormStatus("error");
      setFormMessage("Form is not configured yet. Add the Web3Forms access key in Vercel.");
      return;
    }

    setIsSubmitting(true);
    setFormStatus("idle");
    setFormMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: "New APEX FORGE consultation request",
          from_name: "APEX FORGE Website",
          name,
          email,
          goal,
          message: `Goal: ${goal}`
        })
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setFormData({ name: "", email: "", goal: "" });
      setFormStatus("success");
      setFormMessage("Consultation request sent. We will contact you soon.");
    } catch {
      setFormStatus("error");
      setFormMessage("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-obsidian px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <BrandLogo />
            <span className="font-display text-xl font-black uppercase tracking-[0.16em] text-white">APEX FORGE</span>
          </div>
          <p className="mt-5 leading-7 text-ash">Luxury fitness coaching for serious transformations, performance, and accountability.</p>
        </div>
        <form onSubmit={submitConsultation} className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={(event) => updateFormField("name", event.target.value)}
            className="rounded-2xl border border-white/10 bg-graphite px-5 py-4 text-white outline-none placeholder:text-ash focus:border-flare"
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(event) => updateFormField("email", event.target.value)}
            className="rounded-2xl border border-white/10 bg-graphite px-5 py-4 text-white outline-none placeholder:text-ash focus:border-flare"
          />
          <input
            name="goal"
            placeholder="Goal"
            required
            value={formData.goal}
            onChange={(event) => updateFormField("goal", event.target.value)}
            className="rounded-2xl border border-white/10 bg-graphite px-5 py-4 text-white outline-none placeholder:text-ash focus:border-flare sm:col-span-2"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-flare px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-obsidian disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2"
          >
            {isSubmitting ? "Sending..." : "Request consultation"}
          </button>
          {formMessage ? (
            <p className={`sm:col-span-2 text-sm font-bold ${formStatus === "success" ? "text-white" : "text-flare"}`} aria-live="polite">
              {formMessage}
            </p>
          ) : null}
        </form>
        <div className="grid content-start gap-5 text-ash">
          <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-flare" /> coach@apexforge.fit</p>
          <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-flare" /> Bandra Performance District</p>
          <div className="flex gap-3">
            {[Instagram, MessageCircle, Play].map((Icon, index) => (
              <button key={index} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-graphite text-ash transition hover:border-flare hover:text-flare">
                <Icon className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-6 text-sm text-ash md:flex-row md:items-center md:justify-between">
        <p>(c) 2026 APEX FORGE. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 uppercase tracking-[0.16em]">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-flare">{item}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <WhyUs />
      <Services />
      <WorkoutGenerator />
      <FitnessTools />
      <Transformations />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <FinalCTA />
      <ContactFooter />
    </main>
  );
}
