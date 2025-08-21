export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  link: string;
  featured?: boolean;
  image?: string; // new column
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Inside Visual Studio's Compiler",
    excerpt:
      "How Your C++ Code Becomes an Executable. The MSVC Compilation Factory Analogy - Imagine a car assembly line with specialized stations.",
    publishedDate: "2025-06-01",
    readTime: "4 min read",
    tags: ["C++", "Compiler", "Visual Studio", "Programming"],
    link: "https://programcycle.hashnode.dev/inside-visual-studios-compiler-how-your-c-code-becomes-an-executable",
    featured: true,
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1755794215791/dee73ea2-b37b-4a03-8dca-e1c9edcd0bbc.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "2",
    title: "Clang & LLVM Under the Hood",
    excerpt:
      "C++ to Machine Code. The Compiler Factory: A Simple Analogy - Imagine a car factory that builds vehicles from blueprints.",
    publishedDate: "2025-06-01",
    readTime: "4 min read",
    tags: ["C++", "LLVM", "Clang", "Compiler"],
    link: "https://programcycle.hashnode.dev/clang-and-llvm-under-the-hood",
    featured: true,
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1755795855527/35913bcd-6f61-4d5d-9b05-d37169faf3c8.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "3",
    title: "C++ Code: Converted to Machine",
    excerpt:
      "A Step-by-Step Guide (GCC). C++ is a powerful, high-performance language—but have you ever wondered how your C++ code becomes an executable file?",
    publishedDate: "2025-06-01",
    readTime: "4 min read",
    tags: ["C++", "GCC", "Machine Code", "Programming"],
    link: "niplaynow.live/anime/watch/30?host=pahe&ep=6&type=dub",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1755795200833/f92372c9-290d-48e4-82df-523b224d1ef0.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "4",
    title: "Competitive Programming & SDL2 with JetBrains Fleet on Arch Linux",
    excerpt:
      "Exploring development setup and competitive programming tools with modern IDE and graphics library on Arch Linux.",
    publishedDate: "2025-05-31",
    readTime: "6 min read",
    tags: ["Competitive Programming", "SDL2", "JetBrains Fleet", "Arch Linux"],
    link: "https://curiouscode.hashnode.dev/jetbrains-fleet-cpp-ide-setup",
    image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1749207102522/2368be7f-b168-4e49-bda6-56d2bfa5ca6a.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

export const blogStats = {
  totalPosts: blogPosts.length,
  totalViews: "Growing audience",
  followers: "Active community",
  hashnodeProfile: "https://hashnode.com/@echosingh",
  blogSites: [
    {
      name: "Pointer Hmm",
      url: "https://programcycle.hashnode.dev",
      description:
        "Developer-focused publication exploring C++, software engineering practices, and modern programming insights",
    },
    {
      name: "CuriousCode",
      url: "https://curiouscode.hashnode.dev",
      description: "Technical insights and code explorations",
    },
  ],
};
