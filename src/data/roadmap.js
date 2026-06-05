export const roadmap = {
  placement: {
    1: {
      title: "Programming Fundamentals",
      duration: "Months 1–4",
      tasks: [
        { name: "C Basics", resource: "https://www.learn-c.org", },
        { name: "Python Basics", resource: "https://cs50.harvard.edu/python" },
        { name: "Git & GitHub", resource: "https://learngitbranching.js.org" },
        { name: "Linux Command Line Basics", resource: "https://linuxjourney.com" },
        { name: "Problem Solving on HackerRank (Easy)", resource: "https://hackerrank.com" },
        { name: "Build a simple CLI project", resource: null },
      ],
    },
    2: {
      title: "DSA + Aptitude Foundation",
      duration: "Months 5–10",
      tasks: [
        { name: "Arrays & Strings", resource: "https://leetcode.com" },
        { name: "Linked Lists & Stacks", resource: "https://leetcode.com" },
        { name: "Trees & Binary Search", resource: "https://leetcode.com" },
        { name: "Graphs (BFS, DFS)", resource: "https://leetcode.com" },
        { name: "Dynamic Programming (Basic)", resource: "https://leetcode.com" },
        { name: "Aptitude - Quantitative (IndiaBix)", resource: "https://indiabix.com" },
        { name: "Aptitude - Logical Reasoning", resource: "https://indiabix.com" },
        { name: "LeetCode - Solve 100 Easy problems", resource: "https://leetcode.com" },
      ],
    },
    3: {
      title: "Core Subjects + Internship",
      duration: "Months 11–18",
      tasks: [
        { name: "DBMS (Joins, Normalization, SQL)", resource: "https://www.w3schools.com/sql" },
        { name: "Operating Systems (Process, Memory)", resource: "https://pages.cs.wisc.edu/~remzi/OSTEP" },
        { name: "Computer Networks (OSI, TCP/IP)", resource: "https://youtube.com" },
        { name: "OOP Concepts (Java/C++)", resource: "https://www.javatpoint.com" },
        { name: "Build a Full Stack Project (MERN/Django)", resource: null },
        { name: "Apply for Summer Internships", resource: "https://internshala.com" },
        { name: "LeetCode - 200+ problems (Easy+Medium)", resource: "https://leetcode.com" },
        { name: "Build LinkedIn Profile", resource: "https://linkedin.com" },
      ],
    },
    4: {
      title: "Placement Final Prep",
      duration: "Months 19–24",
      tasks: [
        { name: "System Design Basics (HLD)", resource: "https://github.com/donnemartin/system-design-primer" },
        { name: "LeetCode - 300+ problems total", resource: "https://leetcode.com" },
        { name: "Resume: 1 page, ATS optimized", resource: "https://resumeworded.com" },
        { name: "Mock Interviews (Pramp / Interviewing.io)", resource: "https://pramp.com" },
        { name: "HR Questions Prep", resource: null },
        { name: "Company-wise previous questions", resource: "https://geeksforgeeks.org" },
        { name: "Apply to 50+ companies on campus", resource: null },
      ],
    },
  },
  gate: {
    1: {
      title: "Basics & Maths",
      duration: "Months 1–4",
      tasks: [
        { name: "Engineering Mathematics", resource: "https://nptel.ac.in" },
        { name: "C Programming", resource: "https://learn-c.org" },
        { name: "Digital Logic", resource: "https://nptel.ac.in" },
      ],
    },
    2: {
      title: "Core CS Subjects",
      duration: "Months 5–12",
      tasks: [
        { name: "Data Structures & Algorithms", resource: "https://nptel.ac.in" },
        { name: "Theory of Computation", resource: "https://nptel.ac.in" },
        { name: "Computer Organization", resource: "https://nptel.ac.in" },
        { name: "Operating Systems", resource: "https://nptel.ac.in" },
        { name: "DBMS", resource: "https://nptel.ac.in" },
        { name: "Computer Networks", resource: "https://nptel.ac.in" },
      ],
    },
    3: {
      title: "Advanced Topics + Practice",
      duration: "Months 13–20",
      tasks: [
        { name: "Compiler Design", resource: "https://nptel.ac.in" },
        { name: "Algorithms (Advanced)", resource: "https://nptel.ac.in" },
        { name: "GATE Previous Year Papers (2015–2022)", resource: "https://gateoverflow.in" },
        { name: "Subject-wise Mock Tests", resource: "https://gateoverflow.in" },
      ],
    },
    4: {
      title: "Full Revision + Mock GATE",
      duration: "Months 21–24",
      tasks: [
        { name: "Full Syllabus Revision", resource: null },
        { name: "5 Full Mock Tests", resource: "https://gateoverflow.in" },
        { name: "Weak topic re-study", resource: null },
        { name: "Application & college shortlisting", resource: "https://goaps.iisc.ac.in" },
      ],
    },
  },
  ms_abroad: {
    1: {
      title: "Academic Foundation",
      duration: "Months 1–6",
      tasks: [
        { name: "Maintain CGPA above 8.0", resource: null },
        { name: "Start GRE Prep (Vocab + Quant)", resource: "https://magoosh.com" },
        { name: "Explore research areas of interest", resource: null },
        { name: "Join lab or research group in college", resource: null },
      ],
    },
    2: {
      title: "Research & GRE",
      duration: "Months 7–14",
      tasks: [
        { name: "GRE - Target 320+", resource: "https://ets.org/gre" },
        { name: "IELTS/TOEFL - Target 100+", resource: "https://ets.org/toefl" },
        { name: "Publish or present a paper (if possible)", resource: null },
        { name: "Apply for IISER/IIT summer research", resource: "https://srfp.iisc.ac.in" },
        { name: "Build 2 strong projects with GitHub", resource: "https://github.com" },
      ],
    },
    3: {
      title: "Application Prep",
      duration: "Months 15–20",
      tasks: [
        { name: "Shortlist 10–15 universities", resource: "https://usnews.com" },
        { name: "Write SOP (Statement of Purpose)", resource: null },
        { name: "Request 3 LORs from professors", resource: null },
        { name: "Build resume for MS application", resource: "https://resumeworded.com" },
        { name: "Email professors for research fit", resource: null },
      ],
    },
    4: {
      title: "Apply & Decide",
      duration: "Months 21–24",
      tasks: [
        { name: "Submit applications (Oct–Dec)", resource: null },
        { name: "Apply for scholarships (Fulbright, DAAD)", resource: "https://fulbright.org" },
        { name: "Compare offers & funding packages", resource: null },
        { name: "Visa process (F-1 / Study Visa)", resource: "https://travel.state.gov" },
      ],
    },
  },
  startup: {
    1: {
      title: "Mindset & Exploration",
      duration: "Months 1–4",
      tasks: [
        { name: "Read: Zero to One by Peter Thiel", resource: null },
        { name: "Join E-Cell or entrepreneurship club", resource: null },
        { name: "Attend 2 hackathons", resource: "https://devfolio.co" },
        { name: "Identify a problem worth solving", resource: null },
      ],
    },
    2: {
      title: "Validate & Build",
      duration: "Months 5–12",
      tasks: [
        { name: "Talk to 50 potential users", resource: null },
        { name: "Build MVP in 4–6 weeks", resource: null },
        { name: "Learn no-code tools (Bubble, Webflow)", resource: "https://bubble.io" },
        { name: "Get first 10 users", resource: null },
        { name: "Apply to college incubator", resource: null },
      ],
    },
    3: {
      title: "Traction & Funding",
      duration: "Months 13–20",
      tasks: [
        { name: "Apply: NIDHI PRAYAS Grant", resource: "https://nidhi.dst.gov.in" },
        { name: "Apply: Startup India Registration", resource: "https://startupindia.gov.in" },
        { name: "Build in public on LinkedIn/X", resource: null },
        { name: "Apply: NASSCOM 10K Startups", resource: "https://10000startups.com" },
        { name: "Reach ₹1L revenue or 100 active users", resource: null },
      ],
    },
    4: {
      title: "Scale & Sustain",
      duration: "Months 21–24",
      tasks: [
        { name: "Pitch to angel investors / seed funds", resource: "https://angellist.com" },
        { name: "Hire first intern or co-founder", resource: null },
        { name: "Apply: YC / Antler / 100X.VC", resource: "https://ycombinator.com" },
        { name: "Register company (Pvt Ltd)", resource: "https://mca.gov.in" },
      ],
    },
  },
};