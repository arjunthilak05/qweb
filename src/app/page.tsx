"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Atom,
  Users,
  Trophy,
  DollarSign,
  BookOpen,
  Code,
  Zap,
  Target,
  Mail,
  ArrowUp,
  Clock,
  Award,
  Sparkles,
  Linkedin,
  Github,
  CheckCircle,
} from "lucide-react"

export default function QuantumCoursePitch() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
      setShowScrollTop(window.scrollY > 500)

      // Update active section based on scroll position
      const sections = ["hero", "why-course", "course-flow", "pitch-closer"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)
    // Set initial window size
    handleResize()

    // Animate stats
    const animateStats = () => {
      const duration = 2000
      const start = Date.now()

      const animate = () => {
        const elapsed = Date.now() - start
        const progress = Math.min(elapsed / duration, 1)

        // setAnimatedStats({ // This line was removed as per the edit hint
        //   students: Math.floor(targets.students * progress),
        //   completion: Math.floor(targets.completion * progress),
        //   satisfaction: Math.floor(targets.satisfaction * progress),
        // })

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      setTimeout(animate, 1000)
    }

    animateStats()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setShowHeader(false)
        } else {
          setShowHeader(true)
        }
        lastScrollY.current = currentScrollY
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-blue-900/20" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-transparent" />

        {/* Interactive Particle System */}
        <div className="quantum-particles absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                background: `hsl(${180 + Math.random() * 60}, 70%, 60%)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                transform:
                  windowSize.width && windowSize.height
                    ? `translate(${(mousePosition.x - windowSize.width / 2) * 0.01}px, ${(mousePosition.y - windowSize.height / 2) * 0.01}px)`
                    : "none",
                transition: "transform 0.1s ease-out",
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-cyan-500/20 rounded-lg animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${20 + Math.random() * 40}px`,
                height: `${20 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotate(${Math.random() * 360}deg) translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-900/20 shadow transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-200 bg-clip-text text-transparent tracking-wide select-none" style={{letterSpacing: '0.04em'}}>
              Quantum Course Pitch
            </div>
            <div className="hidden md:flex space-x-7">
              {[
                { id: "hero", label: "Home" },
                { id: "why-course", label: "Why This Course" },
                { id: "course-flow", label: "Course Flow" },
                { id: "pitch-closer", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 py-1 text-base font-medium transition-all duration-200 rounded focus:outline-none focus:ring-1 focus:ring-cyan-200
                    ${activeSection === item.id
                      ? "text-cyan-200 border-b-2 border-cyan-200"
                      : "text-gray-300 hover:text-cyan-300"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            {/* Floating Badges */}
            <div className="flex justify-center space-x-4 mb-8">
              <Badge variant="outline" className="border-cyan-500/80 text-white bg-cyan-800/80 drop-shadow-lg px-5 py-2 text-lg font-bold animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2 text-cyan-200" />
                Interactive Learning
              </Badge>
              <Badge
                variant="outline"
                className="border-purple-500/80 text-white bg-purple-800/80 drop-shadow-lg px-5 py-2 text-lg font-bold animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <Award className="w-4 h-4 mr-2 text-purple-200" />
                Certified Course
              </Badge>
            </div>

            <div className="mb-8">
              <div className="inline-block p-6 border-2 border-cyan-500/30 rounded-full mb-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm">
                <Atom className="w-16 h-16 text-cyan-400 animate-spin" style={{ animationDuration: "8s" }} />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                End-to-End Intro to
              </span>
              <br />
              <span className="text-white drop-shadow-2xl">Quantum Computing Course</span>
              <br />
              <span className="text-2xl md:text-4xl font-normal bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                for Kids and High School Students
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              A fun, interactive journey to spark the next generation of quantum innovators through
              <span className="text-cyan-400 font-semibold"> gamified learning</span> and
              <span className="text-purple-400 font-semibold"> hands-on projects</span>
            </p>

            <div className="mb-8">
              <p className="text-lg text-gray-400 mb-2">Pitched for</p>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Whaot.com
              </div>
              <p className="text-gray-400">
                By <span className="text-white font-semibold">Arjun Thilak</span> from IIT Madras and SAI University
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                className="bg-cyan-600 hover:bg-cyan-700 text-white text-lg px-8 py-4 rounded-full shadow-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
                onClick={() => scrollToSection("pitch-closer")}
              >
                Start Learning Now
              </Button>
              <Button
                variant="outline"
                className="border-cyan-500 text-cyan-200 hover:bg-cyan-900/30 text-lg px-8 py-4 rounded-full font-bold shadow focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                onClick={() => scrollToSection("course-flow")}
              >
                View Course Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why This Course Section */}
      <section id="why-course" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10 mb-4">
              Market Opportunity
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why This Course?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Bridging the gap between quantum computing's explosive growth and youth education with
              <span className="text-cyan-400"> cutting-edge pedagogy</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Market Need",
                description:
                  "Quantum computing is booming—projected to be a $8.6 billion industry by 2027—but education lags for youth. This course bridges the gap, aligning with NEP 2020's focus on flexible, tech-forward learning.",
                color: "cyan",
                stat: "$8.6B Market",
              },
              {
                icon: Zap,
                title: "Unique Selling Points",
                description:
                  "Age-appropriate analogies (e.g., quantum bits as 'superhero particles'), gamified labs using free tools like Qiskit Playground, and capstone projects where students 'build' quantum games.",
                color: "purple",
                stat: "100% Gamified",
              },
              {
                icon: Trophy,
                title: "Proven Outcomes",
                description:
                  "Students gain a certificate, portfolio projects, and confidence to pursue STEM careers. Past similar programs have seen 90% completion rates and inspired alumni to join quantum hackathons.",
                color: "pink",
                stat: "90% Success Rate",
              },
              {
                icon: DollarSign,
                title: "Impact & Access",
                description:
                  "Free for schools via sponsorships; premium version at ₹3,499/student for individuals, with proceeds funding access for low-income participants.",
                color: "green",
                stat: "₹3,499 Premium",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm group"
              >
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto mb-4 p-4 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-full w-fit border border-${item.color}-500/30 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                  </div>
                  <Badge
                    variant="outline"
                    className={`border-${item.color}-500/50 text-${item.color}-400 bg-${item.color}-500/10 mb-2`}
                  >
                    {item.stat}
                  </Badge>
                  <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Course Flow Section */}
      <section
        id="course-flow"
        className="relative z-10 py-20 px-4 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-purple-500/50 text-purple-400 bg-purple-500/10 mb-4">
              <Clock className="w-3 h-3 mr-1" />
              12-Week Journey
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Course Flow
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Structured in three progressive phases for maximum learning impact with
              <span className="text-purple-400"> interactive milestones</span>
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1: Foundations",
                weeks: "Weeks 1-3",
                subtitle: "Building Excitement and Basics",
                icon: BookOpen,
                color: "cyan",
                weeks_data: [
                  {
                    week: "Week 1",
                    title: "What is Quantum Computing? (Intro & Motivation)",
                    content: [
                      "Classical vs. quantum: Compare everyday computers to quantum 'magic' with analogies like flipping coins (bits) vs. spinning tops (qubits)",
                      "Fun activity: Interactive demo of superposition using a coin toss game",
                      "Key takeaway: Quantum computers solve problems faster, like cracking codes or simulating molecules",
                    ],
                  },
                  {
                    week: "Week 2",
                    title: "Meet the Qubit",
                    content: [
                      "Basics of qubits, superposition, and measurement",
                      "Hands-on: Use online simulators (e.g., IBM Quantum Lab) to 'flip' virtual qubits—no coding yet",
                      "For kids: Storytime with quantum characters; for high school: Intro to probability",
                    ],
                  },
                  {
                    week: "Week 3",
                    title: "Quantum Tools & First Code",
                    content: [
                      "Intro to Python basics (no prior knowledge needed)",
                      "Simple coding lab: Create a basic quantum circuit in Qiskit Playground",
                      "Assessment: Quick quiz on qubit states",
                    ],
                  },
                ],
              },
              {
                phase: "Phase 2: Core Concepts",
                weeks: "Weeks 4-8",
                subtitle: "Diving Deeper with Hands-On Learning",
                icon: Code,
                color: "purple",
                weeks_data: [
                  {
                    week: "Week 4",
                    title: "Entanglement – The Quantum 'Twin' Effect",
                    content: [
                      "Explain entanglement with paired dice or 'telepathic' particles",
                      "Lab: Simulate entangled qubits and discuss applications like secure communication",
                    ],
                  },
                  {
                    week: "Week 5",
                    title: "Quantum Gates & Circuits",
                    content: [
                      "Gates like Hadamard and NOT, building simple circuits",
                      "Activity: Design a 'quantum puzzle' circuit; group challenges for high schoolers",
                    ],
                  },
                  {
                    week: "Week 6",
                    title: "Interference and Algorithms Intro",
                    content: [
                      "How quantum interference enables speedups",
                      "Basic algorithm: Deutsch's algorithm via storytelling (e.g., 'quantum detective')",
                      "Lab: Code and run a simple algorithm on a simulator",
                    ],
                  },
                  {
                    week: "Week 7",
                    title: "Quantum Measurement & Noise",
                    content: [
                      "Dealing with real-world quantum 'noise' and errors",
                      "Fun twist: Game-ify error correction as a 'fix the glitch' challenge",
                    ],
                  },
                  {
                    week: "Week 8",
                    title: "Mid-Course Review & Guest Speaker",
                    content: [
                      "Recap with interactive review games",
                      "Virtual guest talk from a quantum expert (e.g., via Zoom) on careers in quantum tech",
                    ],
                  },
                ],
              },
              {
                phase: "Phase 3: Applications & Capstone",
                weeks: "Weeks 9-12",
                subtitle: "Real-World Impact and Creativity",
                icon: Users,
                color: "pink",
                weeks_data: [
                  {
                    week: "Week 9",
                    title: "Quantum Algorithms in Action",
                    content: [
                      "Grover's search and basics of Shor's algorithm (simplified for age groups)",
                      "Lab: Search for 'hidden treasures' in a quantum simulation",
                    ],
                  },
                  {
                    week: "Week 10",
                    title: "Real-World Applications",
                    content: [
                      "Quantum in everyday life: AI, medicine, climate modeling",
                      "For kids: Cartoon examples; for high school: Case studies like quantum chemistry",
                    ],
                  },
                  {
                    week: "Week 11",
                    title: "Capstone Project Workshop",
                    content: [
                      "Students build a project, e.g., a quantum random number generator or simple game",
                      "Guidance on tools, teamwork, and presentation",
                    ],
                  },
                  {
                    week: "Week 12",
                    title: "Showcase & Wrap-Up",
                    content: [
                      "Present projects in a virtual 'Quantum Fair'",
                      "Certificate ceremony, feedback, and next steps (e.g., advanced courses)",
                      "Assessment: Project rubric focusing on creativity and understanding",
                    ],
                  },
                ],
              },
            ].map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className="border border-gray-700/50 rounded-2xl p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500"
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                  <div
                    className={`mr-4 p-3 bg-gradient-to-br from-${phase.color}-500/20 to-${phase.color}-600/20 rounded-full border border-${phase.color}-500/30`}
                  >
                    <phase.icon className={`w-6 h-6 text-${phase.color}-400`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white">{phase.phase}</span>
                      <Badge
                        variant="outline"
                        className={`border-${phase.color}-500/70 text-white bg-${phase.color}-700/40 drop-shadow px-3 py-1 text-sm font-semibold animate-fade-in mb-2`}
                      >
                        {phase.weeks}
                      </Badge>
                    </div>
                    <div className={`text-lg text-${phase.color}-400 font-normal`}>{phase.subtitle}</div>
                  </div>
                </h3>

                <Accordion className="w-full">
                  {phase.weeks_data.map((week, weekIndex) => (
                    <AccordionItem key={weekIndex} value={`${phaseIndex}-${weekIndex}`} className="border-gray-600/50">
                      <AccordionTrigger accordionValue={`${phaseIndex}-${weekIndex}`} className="text-white hover:text-cyan-400 transition-colors duration-300 text-left">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="border-gray-600 text-gray-400">
                            {week.week}
                          </Badge>
                          <span>{week.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent accordionValue={`${phaseIndex}-${weekIndex}`} className="text-gray-300">
                        <ul className="space-y-3 list-none">
                          {week.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="pitch-closer" className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-block p-3 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full mb-4 border border-cyan-400/30 shadow-lg">
                <Sparkles className="w-8 h-8 text-cyan-300" />
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300">
                Ready to revolutionize quantum education? <br />
                <span className="text-cyan-400 font-semibold">Let's discuss this opportunity.</span>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-2xl border border-cyan-400/20 rounded-3xl shadow-2xl p-10 animate-fade-in text-center space-y-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Directly</h3>
              <div className="flex flex-col items-center gap-6">
                <a
                  href="mailto:arjunthilak2005@gmail.com"
                  className="text-cyan-300 text-xl font-semibold hover:underline flex items-center gap-3 justify-center"
                >
                  <Mail className="w-6 h-6" />
                  arjunthilak2005@gmail.com
                </a>
                <a
                  href="https://wa.me/916383640754"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-xl font-semibold hover:underline flex items-center gap-3 justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.68-.5-5.25-1.44l-.38-.22-3.68.97.98-3.59-.25-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.47-7.14c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.65-.93-2.26-.24-.58-.48-.5-.68-.5-.18 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5 0 1.48 1.08 2.92 1.23 3.12.15.2 2.13 3.25 5.18 4.42.72.25 1.28.4 1.72.51.72.18 1.38.15 1.9.09.58-.07 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"/></svg>
                  WhatsApp / Phone: 6383640754
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-gray-900/80 to-black/80 border-t border-gray-800/50 py-12 px-4 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full mb-4 border border-cyan-500/30">
                <Atom className="w-8 h-8 text-cyan-400 animate-pulse" />
              </div>
              <p className="text-gray-400 mb-4 text-lg">
                Created by{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Arjun Thilak
                </span>{" "}
                from IIT Madras and SAI University
              </p>
              <p className="text-gray-400 mb-6 text-lg">Pitching the Future of Quantum Education</p>
            </div>

            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="https://www.linkedin.com/in/arjun-thilak-17248a247/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href="https://github.com/arjunthilak05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
                GitHub
              </a>
            </div>

            <div className="border-t border-gray-800/50 pt-8">
              <p className="text-gray-500 text-sm">© 2024 Quantum Course Pitch for Whaot.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white p-3 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  )
}
