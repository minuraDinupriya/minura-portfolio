export const profile = {
  name: 'Minura Ranaweera',
  title: 'Software Engineering Undergraduate | Full-Stack Developer',
  location: 'Sri Lanka',
  availability: 'Seeking internships from January 2027',
  email: 'minuraranaweera@gmail.com',
  github: 'https://github.com/minuraDinupriya',
  linkedin: 'https://www.linkedin.com/in/minura-ranaweera',
  summary:
    'I’m a software engineering undergraduate and full-stack developer in Sri Lanka. I build applications across web, mobile, and embedded systems, with an interest in how good design, testing, and documentation make software easier to maintain.',
} as const

type Education = {
  readonly qualification: string
  readonly institution: string
  readonly detail?: string
  readonly graduation?: string
  readonly gpa?: string
}

export const education: readonly Education[] = [
  {
    qualification:
      'Bachelor of Information and Communication Technology (Honours)',
    institution: 'Faculty of Technology, University of Sri Jayewardenepura',
    detail: 'Specializing in Software Technology',
    graduation: 'Expected graduation: 2028',
    gpa: 'Cumulative GPA: 3.80/4.00',
  },
  {
    qualification: 'Diploma in Software Engineering',
    institution: 'iCET Sri Lanka',
  },
  {
    qualification: 'Diploma in Human Resource Management',
    institution: 'University of Colombo',
  },
]

export const internship = {
  role: 'Software Development Intern',
  organization: 'iCET Sri Lanka',
  duration: 'Six months',
  highlights: [
    'Worked on web applications organized around layered architecture.',
    'Contributed to software requirements and technical documentation.',
    'Collaborated on development using GitHub, Jira, and Slack.',
  ],
} as const
